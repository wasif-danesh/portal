import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHead } from "@/components/Section";
import { WaitlistFull } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Get early access",
  description: "Join the Wasify AI early-access list.",
  alternates: { canonical: "/get" },
};

export default function GetPage() {
  return (
    <>
      <PageHead
        kicker="Early access"
        title="Get Wasify AI."
        lead="Coming first to Mac. Join the list and we'll email you when your invitation is ready."
      />
      <section className="sec tight">
        <div className="wrap cols2">
          <WaitlistFull />
          <div>
            <h3>What you&apos;ll need</h3>
            <ul className="list lg">
              {[
                "A Mac (Apple silicon recommended) to start",
                "Disk space for the models you choose, and the app shows each size first",
                "No account needed to run it on your computer",
              ].map((t) => (
                <li key={t}>
                  <Check className="ic sm" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
            <p className="muted small mt">
              Windows and the web edition follow. Prices and a release date aren&apos;t set yet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
