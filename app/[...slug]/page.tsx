import { notFound } from "next/navigation";
import { all } from "@/data";

export function generateStaticParams() {
  return all.paths().map((pathname) => ({
    // Use last part of pathname as the slug. Pass `baseDirectory` as an option to `createSource` to remove the source directory from the slug.
    slug: pathname,
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const Item = await all.get(params.slug);

  console.log({ tree: all.tree() });

  if (Item === undefined) {
    return notFound();
  }

  const { Content, metadata } = Item;

  return (
    <>
      {metadata ? (
        <div>
          <h1>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </div>
      ) : null}
      {Content ? <Content /> : null}
    </>
  );
}
