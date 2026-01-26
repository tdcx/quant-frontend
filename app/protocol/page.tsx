export const metadata = {
  title: "Protocol | Quant Engineering Lab",
  description:
    "Overview of the Quant Engineering Lab protocol boundary and its public definitions.",
};

export default function Protocol() {
  return (
    <>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Protocol
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Quant Engineering Lab Protocol
        </h1>
        <p className="text-lg text-neutral-700">
          Quant Engineering Lab (QEL) defines a protocol for packaging
          quantitative claims together with evidence so they can be
          independently verified. The protocol boundary is defined by public
          materials, not by this website.
        </p>
      </div>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          What the QEL Protocol Is
        </h2>
        <p className="text-lg text-neutral-700">
          The QEL protocol is a public, verifiable structure for representing a
          quantitative claim and the evidence required to validate it
          independently. It focuses on the shape and identity of artifacts, not
          on how those artifacts are produced.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          What the Protocol Defines
        </h2>
        <p className="text-lg text-neutral-700">
          The protocol is defined by public specifications that describe its
          boundaries and artifacts at a conceptual level. These include:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-neutral-800">
          <li>Public schemas that describe protocol artifacts.</li>
          <li>Example artifacts that demonstrate expected structure.</li>
          <li>A verifier specification that defines conformance criteria.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          What the Protocol Does Not Define
        </h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-800">
          <li>How quantitative claims are computed or derived.</li>
          <li>Verification algorithms or implementation details.</li>
          <li>Runtime behavior, execution environments, or internal systems.</li>
          <li>Proprietary or internal data models not published publicly.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-xl font-semibold tracking-tight">
          Where the Authoritative Definitions Will Live
        </h2>
        <p className="text-lg text-neutral-700">
          The authoritative definitions will live in external public repositories.
          This site summarizes the protocol boundary and points to those
          sources; it is not the source of truth.
        </p>
      </section>
    </>
  );
}
