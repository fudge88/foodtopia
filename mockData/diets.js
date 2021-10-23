const recipeCard = {
  id: 649147,
  title: "La Panzanella",
  receipeInfo: {
    readyInMinutes: 45,
    servings: 6,
  },
  imageUrl: "https://spoonacular.com/recipeImages/649147-312x231.jpg",
  nutritionInfo: [
    {
      name: "Calories",
      amount: 364.64,
      unit: "kcal",
      percentOfDailyNeeds: 18.23,
    },
    {
      name: "Fat",
      amount: 19.26,
      unit: "g",
      percentOfDailyNeeds: 29.62,
    },
    {
      name: "Carbohydrates",
      title: "Carbohydrates",
      amount: 40.9,
      unit: "g",
      percentOfDailyNeeds: 13.63,
    },
    {
      name: "Protein",
      title: "Protein",
      amount: 8.39,
      unit: "g",
      percentOfDailyNeeds: 16.78,
    },
    {
      name: "Sugar",
      title: "Sugar",
      amount: 8.46,
      unit: "g",
      percentOfDailyNeeds: 9.4,
    },
    {
      name: "Sodium",
      title: "Sodium",
      amount: 482.29,
      unit: "mg",
      percentOfDailyNeeds: 20.97,
    },
  ],
  cuisines: ["Mediterranean", "Italian", "European"],
  diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
};

//mock data for cooking
const cookingRecipeCard = {
  ingredients: [
    { id: 2044, name: "fresh basil", image: "fresh-basil.jpg" },
    { id: 11583, name: "vegetable", image: "mixed-vegetables.png" },
    { id: 18064, name: "bread", image: "white-bread.jpg" },
    { id: 14412, name: "water", image: "water.png" },
    { id: 1034053, name: "extra virgin olive oil", image: "olive-oil.jpg" },
    { id: 1102047, name: "salt and pepper", image: "salt-and-pepper.jpg" },
    { id: 2053, name: "vinegar", image: "vinegar-(white).jpg" },
    { id: 4582, name: "cooking oil", image: "vegetable-oil.jpg" },
    { id: 2044, name: "fresh basil", image: "fresh-basil.jpg" },
  ],

  cookingInstructions: {
    steps: [
      {
        number: 1,
        step: "submerge the bread in cool water for a several minutes. Then squeeze out as much water as you can, crush the bread in a big bowl, add all the vegetables and basil leaves and blend well.",
      },
      {
        number: 2,
        step: "Add half spoone  of extra virgin olive oil, salt and pepper and mix again. Allow to stand in the fridge for an hour or more.",
      },
      {
        number: 3,
        step: "Add the vinegar and remaining extra-virgin olive oil oil and mix again.",
      },
      { number: 4, step: "Serve, garnishing with basil leaves." },
    ],
  },
};
