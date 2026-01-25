import Link from "next/link";
import { allPostsSorted, formatDate } from "@/lib/posts";

export default function Home() {
  const recent = allPostsSorted().slice(0, 3);

  return (
    <>
      <section className="mb-14 space-y-4">

        <h1 className="text-7xl font-semibold tracking-tight">
          Turn quantitative claims into independently verifiable artifacts.
        </h1>
        <p className="text-md text-neutral-600 max-w-[60ch]">
          Quant Engineering Lab defines a protocol for packaging quantitative claims
          together with their evidence, so they can be independently verified without
          repeated manual validation.
        </p>
      </section>

      <section className="mb-8 space-y-1 text-md text-neutral-600">
        <p>QEL does not build models or produce predictions.</p>
        <p>QEL focuses exclusively on verification.</p>
        <p>
          The verifier is a licensed product; public materials describe the protocol
          and example artifacts.
        </p>
      </section>

      <hr className="mb-10 border-neutral-200" />

      
    </>
  );
}
