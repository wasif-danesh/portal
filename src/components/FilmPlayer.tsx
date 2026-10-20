"use client";

import { useRef } from "react";
import { film } from "@/lib/film";

const fmt = (t: number) => `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;

export function FilmPlayer() {
  const ref = useRef<HTMLVideoElement>(null);

  function seek(t: number) {
    const v = ref.current;
    if (!v) return;
    v.currentTime = Math.max(t, film.start);
    void v.play();
  }

  // Never show the cover frame: whenever playback begins before `start`, jump past it.
  function onPlay() {
    const v = ref.current;
    if (v && v.currentTime < film.start) v.currentTime = film.start;
  }

  return (
    <div className="watch">
      <div>
        <video
          ref={ref}
          controls
          preload="metadata"
          playsInline
          poster={film.poster}
          src={film.src}
          onPlay={onPlay}
        >
          <track kind="captions" src={film.captions} srcLang="en" label="English" default />
        </video>
        <p className="muted small mt">
          1080p original, shown here at 720p. Captions are on by default so it works muted.
        </p>
      </div>
      <aside id="chapters">
        <h3>Chapters</h3>
        <ol className="chaps">
          {film.chapters.map((c) => (
            <li key={c.t}>
              <button type="button" className="chap" onClick={() => seek(c.t)}>
                <b>{fmt(c.t)}</b>
                <span>
                  {c.title}
                  {c.note && <small>{c.note}</small>}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </aside>
    </div>
  );
}
