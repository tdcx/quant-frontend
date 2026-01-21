import Link from "next/link";
import { allPostsSorted, formatDate } from "@/lib/posts";

export const metadata = {
  title: "Writing | Quant Notes",
  description: "Chronological index of published research notes.",
};

export default function WritingIndex() {
  const posts = allPostsSorted();

  return (
    <>
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
          Writing
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Research notes
        </h1>
      </div>

      <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
        {posts.map((post) => (
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
    </>
  );
}
