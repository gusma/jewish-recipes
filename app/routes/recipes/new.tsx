import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { db } from "../../utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");
  if (typeof name !== "string" || typeof content !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  const fields = { name, content };

  const recipe = await db.recipe.create({ data: fields });
  return redirect(`/recipes/${recipe.id}`);
};

export default function NewRecipeRoute() {
  return (
    <div>
      <p>Add your own recipe</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
