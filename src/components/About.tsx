import { profile } from "../data/siteData";

export function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="mb-8 size-28 rounded-full border border-line object-cover"
          />
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">About me</h2>
          <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-muted">
            {profile.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>

        <dl className="divide-y divide-line self-start rounded-3xl border border-line bg-night px-6">
          {profile.facts.map((f) => (
            <div key={f.label} className="py-5">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="mt-1 text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}