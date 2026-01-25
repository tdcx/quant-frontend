export const metadata = {
  title: "About | Quant Engineering Lab",
  description: "Scope, boundaries, and non-goals of Quant Engineering Lab and its public materials.",
};

export default function About() {
  return (
    <>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          About
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Scope</h1>

        <p className="text-lg text-neutral-700">
          This site publishes technical notes on numerical experiments, model
          validation, and reproducibility in quantitative finance. These notes
          are written as research memoranda and may be read independently.
        </p>

        <p className="text-lg text-neutral-700">
          The site also hosts public materials related to Quant Engineering Lab,
          a protocol for packaging quantitative claims together with their
          evidence so they can be independently verified.
        </p>

        <p className="text-lg text-neutral-700">
          Research notes are exploratory. Assumptions and conclusions may change
          as experiments evolve. Publication does not imply completeness,
          correctness, or applicability of any specific result.
        </p>

        <p className="text-lg text-neutral-700">
          The Quant Engineering Lab verifier is a licensed product and is not
          provided on this site. Public materials describe the protocol and
          illustrative example artifacts only.
        </p>
      </div>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Non-goals</h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-800">
          <li>Investment advice, trading signals, or portfolio guidance.</li>
          <li>Performance claims, benchmarks, or comparative rankings.</li>
          <li>Model development, training, or deployment.</li>
          <li>Free or open verification services.</li>
          <li>Product marketing, sales material, or calls to action.</li>
          <li>
            Institutional positions, proprietary systems, or representations of
            any firm or organization.
          </li>
          <li>Speculative roadmaps or unpublished work.</li>
        </ul>
      </section>
    </>
  );
}
