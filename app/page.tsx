import Link from "next/link";
import { allPostsSorted, formatDate } from "@/lib/posts";

export default function Home() {
  const recent = allPostsSorted().slice(0, 3);

  return (
    <>
      <section className="mb-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Research notes
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Research notes on numerical experiments, model validation,
          and reproducibility in quantitative finance.
        </h1>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Recent writing
        </h2>
        <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
          {recent.map((post) => (
            <li
              key={post.slug}
              className="flex items-center justify-between py-3"
            >
              <Link
                href={`/writing/${post.slug}`}
                className="text-base font-medium text-neutral-900 hover:underline"
              >
                {post.title}
              </Link>
              <time className="text-sm text-neutral-500">
                {formatDate(post.published)}
              </time>
            </li>
          ))}
        </ul>

        <p className="pt-2 text-sm">
          <Link
            href="/writing"
            className="text-neutral-600 hover:underline"
          >
            View all research notes →
          </Link>
        </p>
        <p className="text-xs text-neutral-500">
          Quant Notes is a public research notebook associated with the Quant
          Engineering Lab.
        </p>
      </section>
    </>
  );
}
