export function Section({
  kicker,
  title,
  lead,
  children,
  alt = false,
  id,
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section className={`sec ${alt ? "alt" : ""}`} id={id}>
      <div className="wrap">
        <div className="sec-h">
          <p className="eyebrow">{kicker}</p>
          <h2>{title}</h2>
          {lead && <p className="lead">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageHead({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
}) {
  return (
    <section className="phead">
      <div className="glow sm" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
