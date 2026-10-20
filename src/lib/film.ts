/** The intro film. Chapter times are taken from the captions file, not estimated. */
export const film = {
  src: "/media/wasify-ai-intro.mp4",
  poster: "/media/wasify-ai-poster.jpg",
  /** The film opens on a cover frame that still carries the old product name, so playback starts after it. */
  start: 1.5,
  captions: "/media/wasify-ai-intro.vtt",
  duration: "1:33",
  chapters: [
    { t: 0, title: "The idea", note: "What if one app could do it all?" },
    { t: 8, title: "The problem", note: "A dozen sites, a dozen subscriptions" },
    { t: 15, title: "Meet Wasify AI", note: "One app. Your computer." },
    { t: 20, title: "Chat", note: "Just ask, or say what you need" },
    { t: 28, title: "Notebook", note: "Ask your own documents anything" },
    { t: 36, title: "Images", note: "Create, then edit your own photo" },
    { t: 44, title: "Video", note: "From words, or animate a picture" },
    { t: 52, title: "Voice", note: "Type it, hear it spoken" },
    { t: 57, title: "Music", note: "Lyrics written, then the song" },
    { t: 63, title: "Private by design", note: "The AI runs on your computer" },
    { t: 72, title: "Your models", note: "Use the models you already have" },
    { t: 79, title: "What's coming", note: "Train, motion graphics, 3D" },
    { t: 86, title: "Coming first to Mac", note: "" },
  ],
} as const;
