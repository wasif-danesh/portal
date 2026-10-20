export type IconKey = "chat" | "book" | "image" | "video" | "voice" | "music";

export interface Product {
  slug: string;
  name: string;
  /** Brand colour for the product's icon tile */
  color: string;
  icon: IconKey;
  /** Screenshot file in /public/images/product (without extension) */
  img: string;
  tag: string;
  lead: string;
  features: { title: string; body: string }[];
  extras: string[];
  tries: string[];
}

// Add or edit a product here: it appears on the home page, /products and gets its own page.
// Only claim what the app does today. Anything unproven belongs on the roadmap, not here.
export const products: Product[] = [
  {
    slug: "chat",
    name: "Chat",
    color: "#3b82f6",
    icon: "chat",
    img: "chat",
    tag: "Just ask.",
    lead: "Ask a question, draft an email, or just say what you need. The assistant can even make a picture for you, right in the conversation.",
    features: [
      {
        title: "Answers that stream in",
        body: "Code, maths and diagrams render properly. Stop or try again at any time.",
      },
      {
        title: "Makes things in the chat",
        body: "Say “draw a red teapot” or “make a song” and the right tool runs, with the result in the conversation.",
      },
      {
        title: "Edit and versions",
        body: "Edit a message or answer again. The old version stays, and arrows move between them.",
      },
      {
        title: "Asks before it acts",
        body: "Anything the assistant wants to make or change waits for your go-ahead.",
      },
    ],
    extras: [
      "Attach pictures and documents",
      "Web search, off until you allow it",
      "Thinking mode for harder questions",
      "Mic dictation and read-aloud",
    ],
    tries: [
      "Give me a three-step plan to launch a bakery",
      "Explain how a transistor works",
      "Draw a lighthouse at sunrise",
    ],
  },
  {
    slug: "notebook",
    name: "Notebook",
    color: "#14b8a6",
    icon: "book",
    img: "notebook",
    tag: "Chat with your own documents.",
    lead: "Add PDFs and notes, ask questions, and get answers that show exactly where they came from. Then turn them into something to share.",
    features: [
      {
        title: "Answers with citations",
        body: "Every answer points to the source it came from, and you can open it.",
      },
      { title: "Only your sources", body: "Tick the sources you want used. Nothing else is read." },
      {
        title: "A Studio of outputs",
        body: "Report, study guide, flashcards, quiz, mind map, slide deck, data table, infographic, audio overview and more.",
      },
      {
        title: "Runs on this computer",
        body: "The chat model on your computer reads the sources you ticked, and nothing is sent away.",
      },
    ],
    extras: [
      "PDF, Markdown, text and notes",
      "Save an answer as a note",
      "Export to Word or PDF",
      "Many chats per notebook",
    ],
    tries: [
      "What are the three biggest risks for the launch?",
      "Make a study guide from these papers",
      "Turn this into a slide deck",
    ],
  },
  {
    slug: "images",
    name: "Images",
    color: "#8b5cf6",
    icon: "image",
    img: "images",
    tag: "Words become pictures.",
    lead: "Describe a picture in a few words and Wasify AI paints it. Edit it, or start from your own photo.",
    features: [
      {
        title: "Create from a description",
        body: "Type what you want to see, with a helper to improve your prompt.",
      },
      { title: "Edit a picture", body: "Bring your own photo and say what to change." },
      { title: "Pick the model", body: "Choose the image model you like for each job." },
      {
        title: "Saved to your library",
        body: "Everything lands in My creations, searchable later.",
      },
    ],
    extras: [
      "Start from your own photo",
      "Improve prompt helper",
      "Model picker per job",
      "Search by meaning",
    ],
    tries: [
      "A lighthouse at sunrise, soft watercolour",
      "Make this photo look like a pencil sketch",
      "A cat asleep on a sofa by a lamp",
    ],
  },
  {
    slug: "video",
    name: "Video",
    color: "#f97316",
    icon: "video",
    img: "video",
    tag: "Describe a scene. Get a clip.",
    lead: "Describe a scene and get a short video clip, or take any still picture and bring it to life.",
    features: [
      {
        title: "Video from words",
        body: "Describe the scene and the camera, and the model makes the clip.",
      },
      { title: "Animate a picture", body: "Start from a still image and make it move." },
      {
        title: "Runs on your computer",
        body: "The video model runs locally; the app tells you what it needs first.",
      },
      { title: "Saved to your library", body: "Clips sit beside your images and songs." },
    ],
    extras: [
      "Text to video",
      "Image to video",
      "Hardware check before you start",
      "Everything searchable",
    ],
    tries: ["A red fox walking through fresh snow", "Make this lighthouse photo come alive"],
  },
  {
    slug: "voice",
    name: "Voice",
    color: "#ec4899",
    icon: "voice",
    img: "voice",
    tag: "Speech, both ways.",
    lead: "Voice does the talking and the listening: turn text into natural speech, and turn what you say into words.",
    features: [
      { title: "Text to speech", body: "Natural voices that run on your computer." },
      {
        title: "Speech to text",
        body: "Press Mic, speak, and your words land in the box. Audio isn't kept.",
      },
      { title: "Read aloud", body: "Have any reply read to you." },
      {
        title: "More being tested",
        body: "Voice cloning with consent and dubbing are in testing, and not yet part of the release.",
      },
    ],
    extras: [
      "Natural voices",
      "Dictation anywhere in the app",
      "Nothing saved by default",
      "English first",
    ],
    tries: ["Read this chapter aloud", "Turn this recording into text"],
  },
  {
    slug: "music",
    name: "Music",
    color: "#d99a2b",
    icon: "music",
    img: "music",
    tag: "Songs on request.",
    lead: "Describe a song and get one, with lyrics you can review and change first.",
    features: [
      { title: "Describe the music", body: "Style, mood and language, in your own words." },
      {
        title: "Lyrics you control",
        body: "The app writes lyrics for you to read and edit before the song is made.",
      },
      { title: "Pick the model", body: "Choose the music model, and see its licence." },
      { title: "Your own library", body: "Songs are kept with everything else you make." },
    ],
    extras: ["Lyrics writer", "Language choice", "Model and licence shown", "Library of songs"],
    tries: [
      "A gentle acoustic folk song about a lighthouse at sunrise",
      "An upbeat jingle for a bakery",
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
