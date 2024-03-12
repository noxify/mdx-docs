import { createSource, mergeSources } from "mdxts";

export const some = createSource("content/some/**/*.{ts,tsx,md,mdx}", {
  baseDirectory: "content",
  basePathname: "/docs",
});

export const thing = createSource("content/thing/**/*.{ts,tsx,md,mdx}", {
  baseDirectory: "content",
  basePathname: "/docs",
});

export const all = mergeSources(some, thing);
