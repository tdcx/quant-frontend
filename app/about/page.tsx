export const metadata = {
  title: "About | Quant Notes",
  description: "Scope and non-goals for this research record.",
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
          validation, and reproducibility in quantitative finance. Content is
          written as research memoranda and is intended to be read independently
          of any system, product, or service.
        </p>
      </div>

      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">Non-goals</h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-800">
          <li>Investment advice, trading signals, or portfolio guidance.</li>
          <li>Performance claims, benchmarks, or comparative rankings.</li>
          <li>Product marketing, sales material, or calls to action.</li>
          <li>Speculative roadmaps or unpublished work.</li>
        </ul>
      </section>
    </>
  );
}
