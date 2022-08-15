import { Outlet, Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/recipes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function RecipesRoute() {
  return (
    <div className="recipes-layout">
      <header className="recipes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Jewish Recipes" aria-label="Jewish Recipes">
              <span className="logo">🤪</span>
              <span className="logo-medium">Recipes</span>
            </Link>
          </h1>
        </div>
      </header>
      <main className="recipes-main">
        <div className="container">
          <div className="recipe-list">
            <Link to=".">Get a random recipe</Link>
            <p>Here are a few more jokes to check out:</p>
            <ul>
              <li>
                <Link to="some-joke-id">Hippo</Link>
              </li>
            </ul>
            <Link to="new" className="button">
              Add your own
            </Link>
          </div>
          <div className="recipes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
