/**
 * Content for /architecture. Statuses are the honest part of this page: change a status here the
 * moment the work behind it changes. Only state facts that are true today; no figures or guarantees.
 */
export type Status = "built" | "progress" | "planned";

export const statusLabel: Record<Status, string> = {
  built: "Built",
  progress: "In progress",
  planned: "Planned",
};

export const repo = {
  home: "https://github.com/wasif-danesh/wasifyai",
  decisions: "https://github.com/wasif-danesh/wasifyai/tree/main/docs/decisions",
  architecture: "https://github.com/wasif-danesh/wasifyai/blob/main/docs/architecture.md",
  deploy: "https://github.com/wasif-danesh/wasifyai/tree/main/deploy",
} as const;

export type Path = "desktop" | "web";

export interface DiagramCell {
  title: string;
  body: string;
  status: Status;
  /** Only shown highlighted for this path; omit for shared parts. */
  only?: Path;
  /** Overrides the status label, e.g. "Built on a test cluster". */
  note?: string;
}

export interface DiagramRow {
  label?: string;
  cells: DiagramCell[];
  core?: boolean;
}

export const diagram: DiagramRow[] = [
  {
    label: "Where you use it",
    cells: [
      {
        title: "Desktop app",
        body: "Mac first. Runs on your computer.",
        status: "built",
        only: "desktop",
      },
      { title: "Web app", body: "In a browser. Cloud first.", status: "progress", only: "web" },
    ],
  },
  {
    label: "Shared, identical in both",
    cells: [{ title: "Interface", body: "The same screens: React and Next.js.", status: "built" }],
  },
  {
    cells: [
      {
        title: "The Wasify AI engine",
        body: "FastAPI, LangGraph and every product, from chat to music. One codebase, two deployment profiles.",
        status: "built",
      },
    ],
    core: true,
  },
  {
    cells: [
      {
        title: "Model gateway",
        body: "Products ask for a capability, never for a specific model, so swapping a model is configuration.",
        status: "built",
      },
    ],
  },
  {
    label: "Different per profile",
    cells: [
      {
        title: "Desktop profile",
        body: "SQLite, an in-process queue and local files. Listens on this computer only.",
        status: "built",
        only: "desktop",
      },
      {
        title: "Web profile",
        body: "Postgres and pgvector, Redis, object storage and media workers.",
        status: "built",
        only: "web",
      },
    ],
  },
  {
    cells: [
      {
        title: "Models on your Mac",
        body: "Local language, image, video, speech and music models.",
        status: "built",
        only: "desktop",
      },
      {
        title: "Models in the cloud",
        body: "vLLM and ComfyUI on GPUs, or hosted model APIs.",
        status: "progress",
        only: "web",
      },
    ],
  },
  {
    label: "Web only: how it stays up",
    cells: [
      {
        title: "Kubernetes",
        body: "Helm chart, Gateway API, KEDA on queue depth, GPU Operator and Argo CD. k3s, or a managed cluster on AWS, Google Cloud or Azure.",
        status: "built",
        note: "Built on a test cluster",
        only: "web",
      },
    ],
  },
  {
    cells: [
      {
        title: "Monitoring",
        body: "Prometheus, Grafana, Loki and alerts.",
        status: "built",
        only: "web",
      },
      {
        title: "OpenTofu",
        body: "Infrastructure as code, one module per target.",
        status: "planned",
        only: "web",
      },
    ],
  },
];

export const profileRows: { what: string; desktop: string; web: string }[] = [
  { what: "Records", desktop: "A SQLite file", web: "Postgres" },
  {
    what: "Run events and queue",
    desktop: "In the engine's own process",
    web: "Redis, with a separate media worker",
  },
  {
    what: "Files",
    desktop: "A folder on your computer, opened through signed links",
    web: "S3-compatible object storage (AWS, Google Cloud or Azure)",
  },
  { what: "Search", desktop: "Vectors kept in the local database", web: "pgvector in Postgres" },
  {
    what: "Sign-in",
    desktop: "A token the app makes at each launch",
    web: "Sign-in through the web app",
  },
  {
    what: "Network",
    desktop: "Listens on this computer only",
    web: "Behind the cluster's gateway",
  },
  { what: "Models", desktop: "Run on your computer", web: "GPU nodes, or hosted model APIs" },
];

export const resilience: { title: string; body: string; status: Status }[] = [
  {
    title: "State lives in the database",
    body: "Any copy of the API can pick up any run, so no session is tied to one machine.",
    status: "built",
  },
  {
    title: "Heavy work is queued",
    body: "GPU jobs are never awaited inline. The run resumes when the job finishes.",
    status: "built",
  },
  {
    title: "Streams can resume",
    body: "Run events carry sequence numbers, so a dropped connection can pick up where it left off.",
    status: "built",
  },
  {
    title: "Outputs are links",
    body: "Pictures, video and audio are passed as links, never pushed through the stream.",
    status: "built",
  },
  {
    title: "Scale on demand",
    body: "Workers scale on queue depth, and GPU pools are meant to scale to zero when idle.",
    status: "planned",
  },
];

export const environments: { name: string; where: string; detail: string; status: Status }[] = [
  {
    name: "Development",
    where: "A MacBook",
    detail: "Containers for the services, with the models running natively on the Apple GPU.",
    status: "built",
  },
  {
    name: "Staging",
    where: "A home lab",
    detail:
      "k3s with one NVIDIA GPU, reached privately, with Argo CD syncing from the main branch.",
    status: "progress",
  },
  {
    name: "Cloud",
    where: "Google Cloud first",
    detail:
      "A managed cluster with GPU nodes. AWS and Azure stay deployable, so no single cloud is locked in.",
    status: "planned",
  },
];

export const security: { title: string; body: string; status: Status }[] = [
  {
    title: "Listens on this computer only",
    body: "On desktop, the engine binds to your computer's loopback address. Every route except a health check and signed file links needs a token made fresh at each launch.",
    status: "built",
  },
  {
    title: "Signed, time-limited file links",
    body: "A link opens one file, only against that launch of the engine.",
    status: "built",
  },
  {
    title: "Asks before it acts",
    body: "Anything the assistant wants to make or change waits for your go-ahead, and text it read can't talk it into acting.",
    status: "built",
  },
  {
    title: "No static cloud keys",
    body: "In the cloud, each workload gets its own identity from the provider instead of a key stored in a pod.",
    status: "planned",
  },
];

export const checks: { title: string; body: string }[] = [
  {
    title: "Automated checks on every change",
    body: "Linting, type checks, tests, a production build and Helm chart linting all run before code is merged.",
  },
  {
    title: "Real-browser layout tests",
    body: "The shared screens are tested in a browser, on both the desktop window and the web app.",
  },
  {
    title: "A local cluster for end-to-end testing",
    body: "The whole stack can be brought up on a local Kubernetes cluster and exercised without touching the cloud.",
  },
  {
    title: "Alerts that can be drilled",
    body: "Monitoring and alerting can be fire-drilled on demand, so you find out it works before you need it.",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Does my data leave my computer?",
    a: "On desktop, the models run on your computer and your prompts, documents and creations stay there. Web search is off until you allow it, and if anything ever has to leave, the app says so first.",
  },
  {
    q: "Is the web app live?",
    a: "Not yet. The desktop app comes first, on Mac. The web edition runs the same engine and is being built out; the roadmap shows where each part stands.",
  },
  {
    q: "Which clouds will it run on?",
    a: "It is designed to be portable across AWS, Google Cloud and Azure, with one deployed at a time. Google Cloud comes first.",
  },
  {
    q: "Can my organisation run it privately?",
    a: "That is the design goal: the same containers on your own hardware or in your own cloud account, so your data stays inside your network. Get in touch to talk it through.",
  },
];
