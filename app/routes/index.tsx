import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="text-3xl font-bold underline">Jewish Recipes</h1>
        <nav>
          <ul>
            <li>
              <Link to="recipes" className="text-3xl font-bold underline">
                Get a recipe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
