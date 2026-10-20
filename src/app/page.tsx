import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Clapperboard,
  Cpu,
  FlaskConical,
  Box,
  Lock,
  Play,
  ShieldCheck,
  X,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ProductTile, TileIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { Window } from "@/components/Window";
import { film } from "@/lib/film";
import { products } from "@/lib/products";
import { BookOpen, Image as ImageIcon } from "lucide-react";

const ticks = ["Models run on your computer", "Your work stays yours", "One searchable library"];

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list">
      {items.map((t, i) => (
        <li key={i}>
          <Check className="ic sm" aria-hidden="true" /> <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="glow" aria-hidden="true" />
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap hero-in">
          <div className="hero-t">
            <p className="pill">
              <span className="dot" /> Coming first to Mac
            </p>
            <h1>
              All your AI.
              <br />
              <span className="grad">One app.</span>
            </h1>
            <p className="sub">
              Chat, documents, images, video, voice and music, all running on your own computer.
              Everything you make lives in one library you can search.
            </p>
            <div className="cta">
              <Link className="btn btn-p lg" href="/get">
                Get early access
              </Link>
              <Link className="btn btn-g lg" href="/watch">
                <Play className="ic sm" aria-hidden="true" /> Watch the 90-second film
              </Link>
            </div>
            <ul className="ticks">
              {ticks.map((t) => (
                <li key={t}>
                  <Check className="ic sm" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-v">
            <Window
              img="home"
              tilt
              priority
              alt="The Wasify AI home screen with the assistant box and the side menu"
            />
            <div className="float f1">
              <TileIcon color="#8b5cf6" icon={ImageIcon} size="sm" />
              <span>
                <b>Images</b>
                <small>Words become pictures</small>
              </span>
            </div>
            <div className="float f2">
              <TileIcon color="#14b8a6" icon={BookOpen} size="sm" />
              <span>
                <b>Notebook</b>
                <small>Answers cite sources</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section
        kicker="Why Wasify AI"
        title="AI today is scattered."
        lead="A dozen websites, a dozen logins, a dozen subscriptions, and your words, files and photos going to someone else's servers. It doesn't have to be that way."
      >
        <div className="cols3">
          <div className="card">
            <span className="x">
              <X className="ic sm" aria-hidden="true" />
            </span>
            <h3>Before</h3>
            <p className="muted">
              A different site for chat, images, video, voice and music. Different accounts.
              Different bills. Work scattered everywhere.
            </p>
          </div>
          <div className="card hl">
            <span className="v">
              <Check className="ic sm" aria-hidden="true" />
            </span>
            <h3>With Wasify AI</h3>
            <p className="muted">
              One app on your computer. Everything you make is saved in one library you can search,
              in plain words.
            </p>
          </div>
          <div className="card">
            <span className="v">
              <Lock className="ic sm" aria-hidden="true" />
            </span>
            <h3>Private by design</h3>
            <p className="muted">
              The models run on your computer. If anything ever has to leave it, the app says so
              first.
            </p>
          </div>
        </div>
      </Section>

      <Section
        kicker="The suite"
        title="Six things, one app."
        lead="Each one is simple on its own, and they work together."
        id="suite"
      >
        <div className="tiles">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="tile"
              style={{ "--c": p.color } as React.CSSProperties}
            >
              <ProductTile color={p.color} icon={p.icon} />
              <h3>{p.name}</h3>
              <p>{p.tag}</p>
              <span className="more">
                Learn more <ArrowRight className="ic sm" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Film */}
      <section className="sec alt">
        <div className="wrap">
          <div className="film">
            <div>
              <p className="eyebrow">The film</p>
              <h2>See it in 90 seconds.</h2>
              <p className="lead">
                Real screens, real models, made on a Mac with Wasify AI itself, from the narration
                to the music.
              </p>
              <p>
                <Link className="btn btn-p" href="/watch">
                  Watch the film
                </Link>
                <Link className="btn btn-g" href="/watch#chapters">
                  Jump to a chapter
                </Link>
              </p>
            </div>
            <Link href="/watch" className="player" aria-label="Play the Wasify AI film">
              <Image
                src={film.poster}
                alt=""
                fill
                sizes="(min-width: 900px) 640px, 100vw"
                style={{ objectFit: "cover" }}
              />
              <span className="playbtn">
                <Play className="ic" aria-hidden="true" />
              </span>
              <span className="dur">{film.duration}</span>
            </Link>
          </div>
        </div>
      </section>

      <Section kicker="In the app" title="Made for how you work.">
        <div className="split">
          <div>
            <TileIcon color="#14b8a6" icon={BookOpen} size="md" />
            <h3>Chat with your own documents</h3>
            <p className="muted">
              Add your PDFs and notes to a Notebook and ask questions. Every answer shows exactly
              where it came from, then turn it into a report, study guide, quiz or slide deck.
            </p>
            <Bullets
              items={[
                "Citations you can open",
                "Only the sources you tick are used",
                "Studio: 11 kinds of output",
              ]}
            />
            <Link className="link" href="/products/notebook">
              Explore Notebook <ArrowRight className="ic sm" aria-hidden="true" />
            </Link>
          </div>
          <Window
            img="notebook"
            alt="A Notebook with sources, chat with citations, and the Studio of outputs"
          />
        </div>
        <div className="split rev">
          <div>
            <TileIcon color="#8b5cf6" icon={ImageIcon} size="md" />
            <h3>Images, video, voice and music</h3>
            <p className="muted">
              Describe it and Wasify AI makes it. Edit a picture, animate a still, hear a song with
              lyrics you reviewed first, all from the same place.
            </p>
            <Bullets
              items={[
                "Start from your own photo",
                "Pick the model for each job",
                "Everything saved to one library",
              ]}
            />
            <Link className="link" href="/products">
              See every product <ArrowRight className="ic sm" aria-hidden="true" />
            </Link>
          </div>
          <Window img="images" alt="Creating an image from a description" />
        </div>
      </Section>

      <Section kicker="Private by design" title="Your computer. Your creations." alt>
        <div className="cols3">
          <div className="card">
            <TileIcon color="#3b82f6" icon={Cpu} size="md" />
            <h3>Models run locally</h3>
            <p className="muted">
              The AI runs on your own computer, and the app tells you what each model needs and
              whether your machine can run it.
            </p>
          </div>
          <div className="card">
            <TileIcon color="#14b8a6" icon={Lock} size="md" />
            <h3>Your work stays with you</h3>
            <p className="muted">
              Prompts, documents and creations stay on your computer. Web search is off until you
              allow it.
            </p>
          </div>
          <div className="card">
            <TileIcon color="#8b5cf6" icon={ShieldCheck} size="md" />
            <h3>Honest about anything that leaves</h3>
            <p className="muted">
              If something ever has to leave your computer, the app says so first. You choose.
            </p>
          </div>
        </div>
        <p className="center mt2">
          <Link className="link" href="/privacy">
            How privacy and deployment work <ArrowRight className="ic sm" aria-hidden="true" />
          </Link>
        </p>
      </Section>

      <Section kicker="Your models, your choice" title="Bring the models you like.">
        <div className="split">
          <Window img="models" alt="The Models screen listing the models found on the computer" />
          <div>
            <h3>Find, pick and manage models</h3>
            <p className="muted">
              Wasify AI finds the models you already have and lets you pick one for each job. A
              simple Models screen shows what each one needs and what it can do.
            </p>
            <Bullets
              items={[
                "Finds models already on your computer",
                "Pick a different model per task",
                <>
                  Use your own cloud key for the biggest models <span className="chip">soon</span>
                </>,
              ]}
            />
          </div>
        </div>
      </Section>

      <Section kicker="What's coming" title="We're just getting started." alt>
        <div className="cols4">
          {[
            { c: "#3b82f6", i: FlaskConical, t: "Train", d: "Teach the app your own style." },
            {
              c: "#f97316",
              i: Clapperboard,
              t: "Motion graphics",
              d: "Animated graphics from a description.",
            },
            { c: "#8b5cf6", i: Box, t: "3D models", d: "Turn a picture into a 3D model." },
            { c: "#ec4899", i: Bot, t: "Agents", d: "Hand a whole task to an agent." },
          ].map((x) => (
            <div key={x.t} className="card slim">
              <TileIcon color={x.c} icon={x.i} size="md" />
              <h4>
                {x.t} <span className="chip">soon</span>
              </h4>
              <p className="muted small">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="center mt2">
          <Link className="link" href="/roadmap">
            See the roadmap <ArrowRight className="ic sm" aria-hidden="true" />
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
