import { Navigation } from "mdxts/components";
import Link from "next/link";
import { all } from "@/data";
import { inspect } from "util";

// The `Navigation` component renders a nested list of links to all .

export default function Page() {
  console.log(inspect(all.tree(), { depth: 4 }));
  return (
    <Navigation
      source={all}
      renderList={(props) => <ul>{props.children}</ul>}
      renderItem={(props) => (
        <li key={props.pathname}>
          <Link href={props.pathname}>{props.label}</Link>
          {props.children}
        </li>
      )}
    />
  );
}

// Alternatively, render the navigation links yourself with the `tree` method:

// function renderLinks(items: ReturnType<typeof all.tree>) {
//   return items.map((item) => (
//     <li key={item.pathname}>
//       <Link href={item.pathname}>{item.label}</Link>
//       {item.children.length ? <ul>{renderLinks(item.children)}</ul> : null}
//     </li>
//   ))
// }

// export default function Page() {
//   return <ul>{renderLinks(all.tree())}</ul>
// }
