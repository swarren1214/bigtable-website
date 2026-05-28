import { SiteShell } from "./site-shell";

type LegalSection = {
  title: string;
  body: React.ReactNode;
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  intro: React.ReactNode;
  sections: LegalSection[];
};

export function LegalPage({ title, updatedAt, intro, sections }: LegalPageProps) {
  return (
    <SiteShell>
      <article className="legal-wrap reveal delay-1">
        <h1 style={{ fontFamily: "var(--font-display), serif" }}>{title}</h1>
        <p className="legal-meta">Last updated: {updatedAt}</p>
        <p>{intro}</p>
        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <div>{section.body}</div>
          </section>
        ))}
      </article>
    </SiteShell>
  );
}
