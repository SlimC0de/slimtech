import { profile } from "../data/siteData";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:gap-16 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-36">
        <div>
          {profile.photo && (
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              loading="lazy"
              className="mb-10 size-28 rounded-full border border-line object-cover"
            />
          )}

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-muted">
            About
          </p>

          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            About me
          </h2>

          <div className="mt-10 max-w-prose space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            {profile.about.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>

        <dl className="divide-y divide-line self-start rounded-3xl border border-line bg-night px-6 sm:px-8">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="py-6">
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="mt-1.5 text-base font-medium sm:text-lg">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}