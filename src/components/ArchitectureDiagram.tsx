"use client";

import { Fragment, useState } from "react";
import { diagram, type Path } from "@/lib/architecture";
import { StatusChip, StatusLegend } from "./StatusChip";

type Mode = "both" | Path;

const modes: { id: Mode; label: string }[] = [
  { id: "both", label: "Both" },
  { id: "desktop", label: "Desktop app" },
  { id: "web", label: "Web app (cloud)" },
];

/** The architecture diagram. The toggle dims whatever isn't on the chosen path. */
export function ArchitectureDiagram() {
  const [mode, setMode] = useState<Mode>("both");

  return (
    <div className="arch">
      <h3 className="sr-only">
        Wasify AI architecture: one shared engine that runs as a desktop profile on your computer or
        as a web profile on Kubernetes in the cloud.
      </h3>
      <div className="seg" role="group" aria-label="Show a path through the diagram">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            aria-pressed={mode === m.id}
            className={mode === m.id ? "on" : ""}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
      </div>

      {diagram.map((row, i) => (
        <Fragment key={i}>
          {row.label && <p className="alab">{row.label}</p>}
          <div className={`arow ${row.cells.length > 1 ? "c2" : "c1"}`}>
            {row.cells.map((c) => (
              <div
                key={c.title}
                className={`acell ${row.core ? "core" : ""} ${mode !== "both" && c.only && c.only !== mode ? "dim" : ""}`}
              >
                <h4>
                  {c.title} <StatusChip status={c.status} label={c.note} />
                </h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </Fragment>
      ))}
      <StatusLegend />
    </div>
  );
}
