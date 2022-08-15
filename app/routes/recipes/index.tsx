import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import type { Recipe } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = { randomRecipe: Recipe };

export const loader: LoaderFunction = async () => {
  const count = await db.recipe.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomRecipe] = await db.recipe.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  const data: LoaderData = { randomRecipe };
  return json(data);
};

export default function RecipeIndexRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <p>Here's a random recipe:</p>
      <p>{data.randomRecipe.content}</p>
      <Link to={data.randomRecipe.id}>
        "{data.randomRecipe.name}" Permalink
      </Link>
    </div>
  );
}
