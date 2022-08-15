import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Recipe } from "@prisma/client";

import { db } from "../../utils/db.server";

type LoaderData = { recipe: Recipe };

export const loader: LoaderFunction = async ({ params }) => {
  const recipe = await db.recipe.findUnique({
    where: { id: params.recipeId },
  });
  if (!recipe) throw new Error("Recipe not found");
  const data: LoaderData = { recipe };
  return json(data);
};

export default function RecipeRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <p>Here's a random recipe:</p>
      <h1 className="text-3xl py-6 font-bold">{data.recipe.name}</h1>
      <p className="text-justify">{data.recipe.content}</p>
      <div className="py-5">
        <Link to="." className="text-red-500">
          {data.recipe.name} Permalink
        </Link>
      </div>
    </div>
  );
}
