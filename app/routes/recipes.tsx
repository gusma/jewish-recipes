import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import type { Recipe } from "@prisma/client";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { db } from "../utils/db.server";
import stylesUrl from "../styles/recipes.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

type LoaderData = {
  recipeListItems: Array<{ id: string; name: string }>;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    recipeListItems: await db.recipe.findMany({
      take: 5,
      select: { id: true, name: true },
      orderBy: { createdAt: "desc" },
    }),
  };
  return json(data);
};

export default function RecipesRoute() {
  const data = useLoaderData<LoaderData>();
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
            <p>
              Here are a few more recipes
              <br /> to check out:
            </p>
            <ul>
              {data.recipeListItems.map((recipe) => (
                <li key={recipe.id}>
                  <Link to={recipe.id}>{recipe.name}</Link>
                </li>
              ))}
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
