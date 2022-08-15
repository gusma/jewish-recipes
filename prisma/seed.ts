import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getRecipes().map((recipe) => {
      return db.recipe.create({ data: recipe });
    })
  );
}

seed();

function getRecipes() {
  return [
    {
      name: "Tuna Fish Salad",
      content: `Ingredient notes

    Tuna: I prefer tuna packed in water with a dolphin-safe label. I usually buy cans, but you can use packets instead. Or, substitute oil-packed tuna (feel free to decrease the amount of mayonnaise if you do). To remove the oil from oil-packed tuna, add it to a fine-mesh sieve, rinse vigorously with cold water, and press with a spatula to extract all of the liquid out of the fish.
    Mayonnaise: This recipe is heavy on the mayonnaise. Start with ¼ cup if you prefer and add more to taste.
    Sweet pickle relish: Or substitute dill relish or minced dill pickles if you prefer that flavor.

Step-by-step instructions

    In a medium bowl, combine tuna, mayonnaise, celery, onion, relish, lemon juice, and garlic. 

    Season to taste with salt and pepper (I like ½ teaspoons salt and ¼ teaspoon pepper). Serve immediately or cover and chill until serving.`,
    },
    {
      name: "Frisbee",
      content: `
Ingredients

Fish bones and skin set aside from the fish

1/4 cup seltzer

1/4 cup plus 2 Tablespoons sugar

1/2 teaspoon pepper

1 teaspoon salt

2 hard boiled eggs, chopped

2 white onions, coarsely chopped

5 1/2 lbs fish, filleted and skinned

1 parsnip whole or chopped

1 stalk of celery, whole or chopped

Salt and white pepper to taste

1/4 cup plus 2 Tablespoons sugar

2 whole carrots

Directions

Place the fish in a bowl and salt it all over. Leave standing overnight. This will help to remove as much liquid as possible.

The next day, make the stock by placing fish bones and skin in a saucepan. Cover with water, plus 2-3 inches. Add the rest of the fish stock ingredients and bring to a boil. Simmer for 1-3 hours–the longer the better.

(Alternatively, you can place all the fish bones in a cheesecloth, wrap it up, and add it to the vegetables and water. Later, instead of straining the stock, you can just discard the cheesecloth with its contents.)

Combine and mince all gefilte fish ingredients. Mix thoroughly with your hands, or with a mix-master.

When the stock is finished cooking, strain it and discard the bones and skin. Place the strained stock back on the fire. Add the carrots for the topping and bring to a boil.

Take a pinch of the gefilte fish mixture and place into the boiling stock. After a minute or so, the fish mixture will turn opaque. Taste it and adjust seasoning as needed.

When ready, begin making balls of fish about 2 inches in diameter. One by one, add to the boiling stock until the pot is filled with one layer of fish balls.

Wait until the gefilte fish balls have turned opaque before adding more balls. This will prevent the fish balls from sticking to one another. When you have used up all the mixture and all the fish balls are swimming in the pot, give the pot a little shake to avoid further sticking.

Reduce flame. Simmer with the pot lid partially on for one hour, then taste the fish to see if it’s ready. After cooking is finished and the pot has cooled, remove the finished gefilte fish balls one by one. Slice the carrot thinly.

To serve gefilte fish, decorate each ball with a slice of carrot. If you like, you can save the stock, which will gel once cooled, and serve it on the side.

Serve with a beetroot stained horseradish (aka chrein).`,
    },
  ];
}
