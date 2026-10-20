import { WaitlistInline } from "./WaitlistForm";

export function CtaBand() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="band">
          <div>
            <h2>Be first to try Wasify AI.</h2>
            <p className="lead">
              Coming first to Mac. Join the early-access list and we&apos;ll email you when
              it&apos;s ready.
            </p>
          </div>
          <WaitlistInline />
        </div>
      </div>
    </section>
  );
}
