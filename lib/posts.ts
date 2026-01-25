import type { ReactNode } from "react";
import FailureFirstReplayContracts, {
  meta as failureFirstMeta,
} from "@/content/failure-first-replay-contracts";
import NumericalValidationDefinitionProblem, {
  meta as numericalValidationDefinitionMeta,
} from "@/content/numerical-validation-definition-problem";

export type Post = {
  slug: string;
  title: string;
  published: string; // ISO 8601
  Content: () => ReactNode;
};

// Static research records.
// Posts are written as self-contained technical notes.
// This file intentionally avoids frontmatter, tags, or CMS-style metadata.
export const posts: Post[] = [
  {
    ...numericalValidationDefinitionMeta,
    Content: NumericalValidationDefinitionProblem,
  },
  {
    ...failureFirstMeta,
    Content: FailureFirstReplayContracts,
  },
];

export function allPostsSorted(): Post[] {
  // Sorted descending by publication date (most recent first).
  return [...posts].sort(
    (a, b) => Date.parse(b.published) - Date.parse(a.published),
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}
