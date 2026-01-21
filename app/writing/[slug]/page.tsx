import { notFound } from "next/navigation";
import { getPostBySlug, formatDate, posts } from "@/lib/posts";
import Link from "next/link";
import ScrollProgress from "./scroll-progress";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Quant Notes`,
    description: `Published ${formatDate(post.published)}`,
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const Content = post.Content;

  return (
    <>
      <ScrollProgress />
      <Link
        href="/writing"
        className="text-sm text-neutral-600 hover:text-neutral-900"
      >
        ← Writing
      </Link>

      <article className="mt-6 space-y-4" data-article>
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
            Published {formatDate(post.published)}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            {post.title}
          </h1>
        </header>

        <div className="text-base leading-6 text-neutral-900">
          <Content />
        </div>
      </article>

    </>
  );
}
