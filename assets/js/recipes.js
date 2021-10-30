//mock data
const mockData = {
  vegetarian: true,
  vegan: true,
  glutenFree: false,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 11,
  gaps: "no",
  lowFodmap: false,
  aggregateLikes: 1,
  spoonacularScore: 50.0,
  healthScore: 11.0,
  creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  license: "CC BY 3.0",
  sourceName: "Foodista",
  pricePerServing: 97.07,
  extendedIngredients: [
    {
      id: 18064,
      aisle: "Bakery/Bread",
      image: "white-bread.jpg",
      consistency: "solid",
      name: "bread",
      nameClean: "bread",
      original: "400 g 2-day-old Tuscan-style bread",
      originalString: "400 g 2-day-old Tuscan-style bread",
      originalName: "2-day-old Tuscan-style bread",
      amount: 400.0,
      unit: "g",
      meta: ["tuscan-style"],
      metaInformation: ["tuscan-style"],
      measures: {
        us: {
          amount: 14.11,
          unitShort: "oz",
          unitLong: "ounces",
        },
        metric: {
          amount: 400.0,
          unitShort: "g",
          unitLong: "grams",
        },
      },
    },
    {
      id: 11529,
      aisle: "Produce",
      image: "tomato.png",
      consistency: "solid",
      name: "tomatoes",
      nameClean: "tomato",
      original: "4 tomatoes, diced",
      originalString: "4 tomatoes, diced",
      originalName: "tomatoes, diced",
      amount: 4.0,
      unit: "",
      meta: ["diced"],
      metaInformation: ["diced"],
      measures: {
        us: {
          amount: 4.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 4.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 10011282,
      aisle: "Produce",
      image: "red-onion.png",
      consistency: "solid",
      name: "red onions",
      nameClean: "red onion",
      original: "2 red onions or 4 spring onions, sliced thinly",
      originalString: "2 red onions or 4 spring onions, sliced thinly",
      originalName: "red onions or 4 spring onions, sliced thinly",
      amount: 2.0,
      unit: "",
      meta: ["red", "sliced"],
      metaInformation: ["red", "sliced"],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 2.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 11206,
      aisle: "Produce",
      image: "cucumber.jpg",
      consistency: "solid",
      name: "cucumber",
      nameClean: "cucumber",
      original: "1 cucumber, finely sliced",
      originalString: "1 cucumber, finely sliced",
      originalName: "cucumber, finely sliced",
      amount: 1.0,
      unit: "",
      meta: ["finely sliced"],
      metaInformation: ["finely sliced"],
      measures: {
        us: {
          amount: 1.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 1.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 2044,
      aisle: "Produce;Spices and Seasonings",
      image: "basil.jpg",
      consistency: "solid",
      name: "basil leaves",
      nameClean: "fresh basil",
      original: "10 basil leaves, ripped in half",
      originalString: "10 basil leaves, ripped in half",
      originalName: "basil leaves, ripped in half",
      amount: 10.0,
      unit: "",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 10.0,
          unitShort: "",
          unitLong: "",
        },
        metric: {
          amount: 10.0,
          unitShort: "",
          unitLong: "",
        },
      },
    },
    {
      id: 2053,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "vinegar-(white).jpg",
      consistency: "liquid",
      name: "vinegar",
      nameClean: "distilled white vinegar",
      original: "2 Tbs red vinegar",
      originalString: "2 Tbs red vinegar",
      originalName: "red vinegar",
      amount: 2.0,
      unit: "Tbs",
      meta: ["red"],
      metaInformation: ["red"],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs",
        },
        metric: {
          amount: 2.0,
          unitShort: "Tbs",
          unitLong: "Tbs",
        },
      },
    },
    {
      id: 1034053,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "olive-oil.jpg",
      consistency: "liquid",
      name: "extra virgin olive oil",
      nameClean: "extra virgin olive oil",
      original: "100 ml extra virgin olive oil",
      originalString: "100 ml extra virgin olive oil",
      originalName: "extra virgin olive oil",
      amount: 100.0,
      unit: "ml",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 3.382,
          unitShort: "fl. oz",
          unitLong: "fl. ozs",
        },
        metric: {
          amount: 100.0,
          unitShort: "ml",
          unitLong: "milliliters",
        },
      },
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "solid",
      name: "salt",
      nameClean: "salt",
      original: "2 pinches of salt",
      originalString: "2 pinches of salt",
      originalName: "salt",
      amount: 2.0,
      unit: "pinches",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "pinches",
          unitLong: "pinches",
        },
        metric: {
          amount: 2.0,
          unitShort: "pinches",
          unitLong: "pinches",
        },
      },
    },
    {
      id: 1002030,
      aisle: "Spices and Seasonings",
      image: "pepper.jpg",
      consistency: "solid",
      name: "pepper",
      nameClean: "black pepper",
      original: "2 pinches of pepper",
      originalString: "2 pinches of pepper",
      originalName: "pepper",
      amount: 2.0,
      unit: "pinches",
      meta: [],
      metaInformation: [],
      measures: {
        us: {
          amount: 2.0,
          unitShort: "pinches",
          unitLong: "pinches",
        },
        metric: {
          amount: 2.0,
          unitShort: "pinches",
          unitLong: "pinches",
        },
      },
    },
  ],
  id: 649147,
  title: "La Panzanella",
  readyInMinutes: 45,
  servings: 6,
  sourceUrl: "https://www.foodista.com/recipe/Z636YKLN/la-panzanella",
  image: "https://spoonacular.com/recipeImages/649147-556x370.jpg",
  imageType: "jpg",
  nutrition: {
    nutrients: [
      {
        name: "Calories",
        title: "Calories",
        amount: 364.64,
        unit: "kcal",
        percentOfDailyNeeds: 18.23,
      },
      {
        name: "Fat",
        title: "Fat",
        amount: 19.26,
        unit: "g",
        percentOfDailyNeeds: 29.62,
      },
      {
        name: "Saturated Fat",
        title: "Saturated Fat",
        amount: 2.89,
        unit: "g",
        percentOfDailyNeeds: 18.04,
      },
      {
        name: "Carbohydrates",
        title: "Carbohydrates",
        amount: 40.9,
        unit: "g",
        percentOfDailyNeeds: 13.63,
      },
      {
        name: "Net Carbohydrates",
        title: "Net Carbohydrates",
        amount: 36.05,
        unit: "g",
        percentOfDailyNeeds: 13.11,
      },
      {
        name: "Sugar",
        title: "Sugar",
        amount: 8.46,
        unit: "g",
        percentOfDailyNeeds: 9.4,
      },
      {
        name: "Cholesterol",
        title: "Cholesterol",
        amount: 0.0,
        unit: "mg",
        percentOfDailyNeeds: 0.0,
      },
      {
        name: "Sodium",
        title: "Sodium",
        amount: 482.29,
        unit: "mg",
        percentOfDailyNeeds: 20.97,
      },
      {
        name: "Protein",
        title: "Protein",
        amount: 8.39,
        unit: "g",
        percentOfDailyNeeds: 16.78,
      },
      {
        name: "Manganese",
        title: "Manganese",
        amount: 1.03,
        unit: "mg",
        percentOfDailyNeeds: 51.26,
      },
      {
        name: "Selenium",
        title: "Selenium",
        amount: 19.48,
        unit: "µg",
        percentOfDailyNeeds: 27.82,
      },
      {
        name: "Vitamin K",
        title: "Vitamin K",
        amount: 26.84,
        unit: "µg",
        percentOfDailyNeeds: 25.56,
      },
      {
        name: "Vitamin B1",
        title: "Vitamin B1",
        amount: 0.38,
        unit: "mg",
        percentOfDailyNeeds: 25.15,
      },
      {
        name: "Vitamin B3",
        title: "Vitamin B3",
        amount: 4.51,
        unit: "mg",
        percentOfDailyNeeds: 22.57,
      },
      {
        name: "Folate",
        title: "Folate",
        amount: 83.44,
        unit: "µg",
        percentOfDailyNeeds: 20.86,
      },
      {
        name: "Vitamin E",
        title: "Vitamin E",
        amount: 2.99,
        unit: "mg",
        percentOfDailyNeeds: 19.95,
      },
      {
        name: "Fiber",
        title: "Fiber",
        amount: 4.85,
        unit: "g",
        percentOfDailyNeeds: 19.41,
      },
      {
        name: "Vitamin C",
        title: "Vitamin C",
        amount: 15.8,
        unit: "mg",
        percentOfDailyNeeds: 19.15,
      },
      {
        name: "Iron",
        title: "Iron",
        amount: 2.9,
        unit: "mg",
        percentOfDailyNeeds: 16.14,
      },
      {
        name: "Vitamin A",
        title: "Vitamin A",
        amount: 758.12,
        unit: "IU",
        percentOfDailyNeeds: 15.16,
      },
      {
        name: "Phosphorus",
        title: "Phosphorus",
        amount: 143.91,
        unit: "mg",
        percentOfDailyNeeds: 14.39,
      },
      {
        name: "Vitamin B2",
        title: "Vitamin B2",
        amount: 0.22,
        unit: "mg",
        percentOfDailyNeeds: 12.89,
      },
      {
        name: "Potassium",
        title: "Potassium",
        amount: 443.9,
        unit: "mg",
        percentOfDailyNeeds: 12.68,
      },
      {
        name: "Magnesium",
        title: "Magnesium",
        amount: 50.4,
        unit: "mg",
        percentOfDailyNeeds: 12.6,
      },
      {
        name: "Calcium",
        title: "Calcium",
        amount: 118.83,
        unit: "mg",
        percentOfDailyNeeds: 11.88,
      },
      {
        name: "Copper",
        title: "Copper",
        amount: 0.21,
        unit: "mg",
        percentOfDailyNeeds: 10.65,
      },
      {
        name: "Vitamin B6",
        title: "Vitamin B6",
        amount: 0.21,
        unit: "mg",
        percentOfDailyNeeds: 10.42,
      },
      {
        name: "Vitamin B5",
        title: "Vitamin B5",
        amount: 0.79,
        unit: "mg",
        percentOfDailyNeeds: 7.91,
      },
      {
        name: "Zinc",
        title: "Zinc",
        amount: 1.08,
        unit: "mg",
        percentOfDailyNeeds: 7.22,
      },
    ],
    properties: [
      {
        name: "Glycemic Index",
        title: "Glycemic Index",
        amount: 48.44,
        unit: "",
      },
      {
        name: "Glycemic Load",
        title: "Glycemic Load",
        amount: 19.45,
        unit: "",
      },
    ],
    flavonoids: [
      {
        name: "Cyanidin",
        title: "Cyanidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Petunidin",
        title: "Petunidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Delphinidin",
        title: "Delphinidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Malvidin",
        title: "Malvidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Pelargonidin",
        title: "Pelargonidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Peonidin",
        title: "Peonidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Catechin",
        title: "Catechin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Epigallocatechin",
        title: "Epigallocatechin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Epicatechin",
        title: "Epicatechin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Epicatechin 3-gallate",
        title: "Epicatechin 3-gallate",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Epigallocatechin 3-gallate",
        title: "Epigallocatechin 3-gallate",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Theaflavin",
        title: "Theaflavin",
        amount: 0.0,
        unit: "",
      },
      {
        name: "Thearubigins",
        title: "Thearubigins",
        amount: 0.0,
        unit: "",
      },
      {
        name: "Eriodictyol",
        title: "Eriodictyol",
        amount: 0.0,
        unit: "",
      },
      {
        name: "Hesperetin",
        title: "Hesperetin",
        amount: 0.0,
        unit: "mg",
      },
      {
        name: "Naringenin",
        title: "Naringenin",
        amount: 0.56,
        unit: "mg",
      },
      {
        name: "Apigenin",
        title: "Apigenin",
        amount: 0.02,
        unit: "mg",
      },
      {
        name: "Luteolin",
        title: "Luteolin",
        amount: 0.03,
        unit: "mg",
      },
      {
        name: "Isorhamnetin",
        title: "Isorhamnetin",
        amount: 1.84,
        unit: "mg",
      },
      {
        name: "Kaempferol",
        title: "Kaempferol",
        amount: 0.31,
        unit: "mg",
      },
      {
        name: "Myricetin",
        title: "Myricetin",
        amount: 0.12,
        unit: "mg",
      },
      {
        name: "Quercetin",
        title: "Quercetin",
        amount: 7.92,
        unit: "mg",
      },
      {
        name: "Theaflavin-3,3'-digallate",
        title: "Theaflavin-3,3'-digallate",
        amount: 0.0,
        unit: "",
      },
      {
        name: "Theaflavin-3'-gallate",
        title: "Theaflavin-3'-gallate",
        amount: 0.0,
        unit: "",
      },
      {
        name: "Theaflavin-3-gallate",
        title: "Theaflavin-3-gallate",
        amount: 0.0,
        unit: "",
      },
      {
        name: "Gallocatechin",
        title: "Gallocatechin",
        amount: 0.0,
        unit: "mg",
      },
    ],
    ingredients: [
      {
        id: 18064,
        name: "bread",
        amount: 66.67,
        unit: "g",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.43,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 2.29,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 3.96,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 32.97,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 1.33,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.07,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 2.35,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 121.33,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 0.13,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 6.91,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.18,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 1.07,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 30.67,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 92.0,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.54,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 102.0,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.13,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.31,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 56.67,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 346.0,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.55,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 30.17,
            unit: "g",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 180.0,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 19.2,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 3.27,
            unit: "µg",
          },
          {
            title: "Trans Fat",
            name: "Trans Fat",
            amount: 0.02,
            unit: "g",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 2.8,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 13.33,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.11,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 12.47,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.79,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.79,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 4.05,
            unit: "g",
          },
        ],
      },
      {
        id: 11529,
        name: "tomatoes",
        amount: 0.67,
        unit: "",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.03,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.16,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.49,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 3.19,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 683.06,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.07,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.22,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 194.34,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 11.23,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.72,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.02,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.07,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 9.02,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 8.2,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.02,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 19.68,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.44,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.03,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 12.3,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 4.1,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.07,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 2.21,
            unit: "g",
          },
          {
            title: "Fluoride",
            name: "Fluoride",
            amount: 1.89,
            unit: "mg",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 14.76,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 6.48,
            unit: "µg",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.98,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.05,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 5.49,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.14,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.09,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 2.16,
            unit: "g",
          },
        ],
      },
      {
        id: 10011282,
        name: "red onions",
        amount: 0.33,
        unit: "",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.04,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.04,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 3.42,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 0.73,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.04,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.08,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 53.53,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 2.71,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.4,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.01,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 3.67,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 8.43,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.02,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 10.63,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.02,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 6.97,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 1.47,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.05,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 2.8,
            unit: "g",
          },
          {
            title: "Fluoride",
            name: "Fluoride",
            amount: 0.4,
            unit: "mg",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 14.67,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.18,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 0.15,
            unit: "µg",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.62,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 2.24,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.06,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.05,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 1.55,
            unit: "g",
          },
        ],
      },
      {
        id: 11206,
        name: "cucumber",
        amount: 0.17,
        unit: "",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.08,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.02,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 1.08,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 36.0,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.03,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.11,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 68.0,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 1.6,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.3,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 6.0,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 7.0,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.01,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 10.5,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.02,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.02,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 7.0,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 1.0,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.12,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 0.73,
            unit: "g",
          },
          {
            title: "Fluoride",
            name: "Fluoride",
            amount: 0.65,
            unit: "mg",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 6.0,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.05,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 3.6,
            unit: "µg",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.35,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.04,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 2.85,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.09,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.04,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 0.69,
            unit: "g",
          },
        ],
      },
      {
        id: 2044,
        name: "basil leaves",
        amount: 1.67,
        unit: "",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 0.02,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 35.17,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.02,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 1.97,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 0.12,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.02,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 0.43,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 1.18,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 0.37,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 0.45,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 0.03,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 0.01,
            unit: "g",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 0.15,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 2.77,
            unit: "µg",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.01,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 0.08,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 0.0,
            unit: "g",
          },
        ],
      },
      {
        id: 2053,
        name: "vinegar",
        amount: 0.33,
        unit: "Tbs",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 0.1,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 0.05,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 0.3,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 0.2,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 0.1,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 0.89,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.02,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Trans Fat",
            name: "Trans Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 0.0,
            unit: "g",
          },
        ],
      },
      {
        id: 1034053,
        name: "extra virgin olive oil",
        amount: 16.67,
        unit: "ml",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 12.16,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 16.67,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.09,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 0.17,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 1.75,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 0.17,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 2.3,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 2.39,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 0.33,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 147.33,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 10.03,
            unit: "µg",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 0.05,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 0.0,
            unit: "g",
          },
        ],
      },
      {
        id: 2047,
        name: "salt",
        amount: 0.33,
        unit: "pinches",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 0.0,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 0.03,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 0.08,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 129.19,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fluoride",
            name: "Fluoride",
            amount: 0.01,
            unit: "mg",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 0.0,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 0.0,
            unit: "g",
          },
        ],
      },
      {
        id: 1002030,
        name: "pepper",
        amount: 0.33,
        unit: "pinches",
        nutrients: [
          {
            title: "Mono Unsaturated Fat",
            name: "Mono Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fat",
            name: "Fat",
            amount: 0.01,
            unit: "g",
          },
          {
            title: "Vitamin B3",
            name: "Vitamin B3",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Carbohydrates",
            name: "Carbohydrates",
            amount: 0.21,
            unit: "g",
          },
          {
            title: "Vitamin A",
            name: "Vitamin A",
            amount: 1.82,
            unit: "IU",
          },
          {
            title: "Vitamin B6",
            name: "Vitamin B6",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Iron",
            name: "Iron",
            amount: 0.03,
            unit: "mg",
          },
          {
            title: "Potassium",
            name: "Potassium",
            amount: 4.43,
            unit: "mg",
          },
          {
            title: "Vitamin C",
            name: "Vitamin C",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Protein",
            name: "Protein",
            amount: 0.03,
            unit: "g",
          },
          {
            title: "Vitamin B2",
            name: "Vitamin B2",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Poly Unsaturated Fat",
            name: "Poly Unsaturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Magnesium",
            name: "Magnesium",
            amount: 0.57,
            unit: "mg",
          },
          {
            title: "Vitamin D",
            name: "Vitamin D",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Calcium",
            name: "Calcium",
            amount: 1.48,
            unit: "mg",
          },
          {
            title: "Caffeine",
            name: "Caffeine",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Saturated Fat",
            name: "Saturated Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Phosphorus",
            name: "Phosphorus",
            amount: 0.53,
            unit: "mg",
          },
          {
            title: "Vitamin E",
            name: "Vitamin E",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B1",
            name: "Vitamin B1",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Folate",
            name: "Folate",
            amount: 0.06,
            unit: "µg",
          },
          {
            title: "Sodium",
            name: "Sodium",
            amount: 0.07,
            unit: "mg",
          },
          {
            title: "Vitamin B5",
            name: "Vitamin B5",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Net Carbohydrates",
            name: "Net Carbohydrates",
            amount: 0.13,
            unit: "g",
          },
          {
            title: "Fluoride",
            name: "Fluoride",
            amount: 0.11,
            unit: "mg",
          },
          {
            title: "Calories",
            name: "Calories",
            amount: 0.84,
            unit: "kcal",
          },
          {
            title: "Cholesterol",
            name: "Cholesterol",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Vitamin B12",
            name: "Vitamin B12",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Selenium",
            name: "Selenium",
            amount: 0.02,
            unit: "µg",
          },
          {
            title: "Vitamin K",
            name: "Vitamin K",
            amount: 0.55,
            unit: "µg",
          },
          {
            title: "Trans Fat",
            name: "Trans Fat",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Fiber",
            name: "Fiber",
            amount: 0.08,
            unit: "g",
          },
          {
            title: "Folic Acid",
            name: "Folic Acid",
            amount: 0.0,
            unit: "µg",
          },
          {
            title: "Copper",
            name: "Copper",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Choline",
            name: "Choline",
            amount: 0.04,
            unit: "mg",
          },
          {
            title: "Alcohol",
            name: "Alcohol",
            amount: 0.0,
            unit: "g",
          },
          {
            title: "Zinc",
            name: "Zinc",
            amount: 0.0,
            unit: "mg",
          },
          {
            title: "Manganese",
            name: "Manganese",
            amount: 0.04,
            unit: "mg",
          },
          {
            title: "Sugar",
            name: "Sugar",
            amount: 0.0,
            unit: "g",
          },
        ],
      },
    ],
    caloricBreakdown: {
      percentProtein: 9.06,
      percentFat: 46.78,
      percentCarbs: 44.16,
    },
    weightPerServing: {
      amount: 258,
      unit: "g",
    },
  },
  summary:
    'La Panzanellan is a <b>dairy free, lacto ovo vegetarian, and vegan</b> recipe with 6 servings. This side dish has <b>365 calories</b>, <b>8g of protein</b>, and <b>19g of fat</b> per serving. For <b>97 cents per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires vinegar, tomatoes, extra virgin olive oil, and salt. 1 person has tried and liked this recipe. Not a lot of people really liked this Mediterranean dish. From preparation to the plate, this recipe takes around <b>around 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 49%</b>, which is good. Similar recipes include <a href="https://spoonacular.com/recipes/panzanella-731363">Panzanella</a>, <a href="https://spoonacular.com/recipes/panzanella-188408">Panzanella</a>, and <a href="https://spoonacular.com/recipes/panzanella-695088">Panzanella</a>.',
  cuisines: ["Mediterranean", "Italian", "European"],
  dishTypes: ["side dish"],
  diets: ["dairy free", "lacto ovo vegetarian", "vegan"],
  occasions: [],
  winePairing: {
    pairedWines: ["chianti", "trebbiano", "verdicchio"],
    pairingText:
      "Panzanellan on the menu? Try pairing with Chianti, Trebbiano, and Verdicchio. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes. One wine you could try is Caposaldo Chianti. It has 5 out of 5 stars and a bottle costs about 13 dollars.",
    productMatches: [
      {
        id: 441745,
        title: "Caposaldo Chianti",
        description:
          "Caposaldo Chianti is ruby red with a fruity perfume, smooth texture, excellent structure and a long, elegant finish.Best with pizza, and pasta with tomato- or meat-based sauces.",
        price: "$12.99",
        imageUrl: "https://spoonacular.com/productImages/441745-312x231.jpg",
        averageRating: 1.0,
        ratingCount: 5.0,
        score: 0.9375,
        link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcaposaldo-chianti-2012%2F140351",
      },
    ],
  },
  instructions:
    "submerge the bread in cool water for a several minutes. Then squeeze out as much water as you can, crush the bread in a big bowl, add all the vegetables and basil leaves and blend well. Add half spoone  of extra virgin olive oil, salt and pepper and mix again. Allow to stand in the fridge for an hour or more. Add the vinegar and remaining extra-virgin olive oil oil and mix again. Serve, garnishing with basil leaves.",
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "submerge the bread in cool water for a several minutes. Then squeeze out as much water as you can, crush the bread in a big bowl, add all the vegetables and basil leaves and blend well.",
          ingredients: [
            {
              id: 2044,
              name: "fresh basil",
              localizedName: "fresh basil",
              image: "fresh-basil.jpg",
            },
            {
              id: 11583,
              name: "vegetable",
              localizedName: "vegetable",
              image: "mixed-vegetables.png",
            },
            {
              id: 18064,
              name: "bread",
              localizedName: "bread",
              image: "white-bread.jpg",
            },
            {
              id: 14412,
              name: "water",
              localizedName: "water",
              image: "water.png",
            },
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
          ],
        },
        {
          number: 2,
          step: "Add half spoone  of extra virgin olive oil, salt and pepper and mix again. Allow to stand in the fridge for an hour or more.",
          ingredients: [
            {
              id: 1034053,
              name: "extra virgin olive oil",
              localizedName: "extra virgin olive oil",
              image: "olive-oil.jpg",
            },
            {
              id: 1102047,
              name: "salt and pepper",
              localizedName: "salt and pepper",
              image: "salt-and-pepper.jpg",
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: "Add the vinegar and remaining extra-virgin olive oil oil and mix again.",
          ingredients: [
            {
              id: 1034053,
              name: "extra virgin olive oil",
              localizedName: "extra virgin olive oil",
              image: "olive-oil.jpg",
            },
            {
              id: 2053,
              name: "vinegar",
              localizedName: "vinegar",
              image: "vinegar-(white).jpg",
            },
            {
              id: 4582,
              name: "cooking oil",
              localizedName: "cooking oil",
              image: "vegetable-oil.jpg",
            },
          ],
          equipment: [],
        },
        {
          number: 4,
          step: "Serve, garnishing with basil leaves.",
          ingredients: [
            {
              id: 2044,
              name: "fresh basil",
              localizedName: "fresh basil",
              image: "fresh-basil.jpg",
            },
          ],
          equipment: [],
        },
      ],
    },
  ],
  originalId: null,
  spoonacularSourceUrl: "https://spoonacular.com/la-panzanella-649147",
};
//render image card
const renderImageRecipeCard = (data) => {
  //construct image card

  const imageRecipeCard = ` <article class="tile is-child" >
  <figure class="image is-4by3">
    <img
      class="recipe-img"
      src=${data.image}
      alt="${data.title}
    />
    <div class="recipe-img-icon-container">
    <button class="small-screen-button">
      <i class="mt-4 bookmark-icon fas fa-bookmark fa-2x"></i>
    </button>
    <button class="small-screen-button info-icon">
      <i class="mt-4 bookmark-icon fas fa-info fa-2x"></i>
    </button>
    </div>
  </figure>
  <div class="nutrition-label">
    <div class="column nutrient-col">
      <h6>Energy</h6>
      <p>${data.energy}kcal</p>
    </div>
    <div class="column nutrient-col">
      <h6>Fat</h6>
      <p>${data.fat}${data.fatUnit}</p>
      <span>${data.fatPerDay}</span>
    </div>
    <div class="column nutrient-col">
      <h6>Saturates</h6>
      <p>${data.saturates}${data.saturatesUnit}</p>
      <span>${data.saturatesPerDay}</span>
    </div>
    <div class="column nutrient-col">
      <h6>Sugars</h6>
      <p>${data.sugars}${data.sugarsUnit}</p>
      <span>${data.sugarsPerDay}</span>
    </div>
    <div class="column">
      <h6>Salt</h6>
      <p>${data.salt}${data.saltUnit}</p>
      <span>${data.saltPerDay}</span>
    </div>
  </div>
  <div class="card-header">
     <h1 class="card-header-title recipe-title">${data.title}</h1>
  </div>
   <footer class="card-footer recipe-info-container">           
      <div class="card-footer-item  recipe-info-box">
        <p>COOK</p>
        <h2 class="prep-time-heading">${data.time} mins</h2>
      </div>
      <div class="card-footer-item recipe-info-box">
        <p>SERVES</p>
        <h2 class="prep-time-heading">${data.serves}</h2>
      </div>
      <div class="card-footer-item recipe-info-box">
        <p>DIFFICULTY</p>
        <h2 class="prep-time-heading">Low</i></h2>
      </div>
      <div class="card-footer-item recipe-info-box">
        <p>ORIGIN</p>
        <h2 class="prep-time-heading">Spain</i></h2>
      </div>
    </footer>
  </article>
  <article class="tile is-child desc-container">
    <h2 class="title">Description</h2>
    <p class="subtitle">${data.summary}</p>
  </article>`;

  //append image card and nutritional info on icon hover
  $("#image-recipe-container").append(imageRecipeCard);
};

//render cooking methods card
const renderCookingMethodCard = (data) => {
  //construct cooking methods card
  const cookingMethodsCard = `<article class="tile is-child method-container">
    <h2 class="title">Method</h2>
    <p class="subtitle">Method of cooking/steps</p>
  </article>`;

  //construct each cooking method container
  const constructEachCookingMethod = (each) => {
    const cookingMethod = `<div class="content">${each.stepNumber}. ${each.stepInstruction}</div>`;
    $(cookingMethod).appendTo(cookingMethodsCard);
    console.log(cookingMethod);
  };

  data.forEach(constructEachCookingMethod);
  //append cooking method card to cooking method container
  $("#method-container").append(cookingMethodsCard);
};

//transform recipe info data from API
const constructRecipeObject = (data) => {
  return {
    image: data.image,
    title: data.title,
    time: data.readyInMinutes,
    serves: data.servings,
    summary: data.summary,
    energy: data.nutrition.nutrients[0].amount,
    fat: data.nutrition.nutrients[1].amount,
    fatPerDay: data.nutrition.nutrients[1].percentOfDailyNeeds,
    fatUnit: data.nutrition.nutrients[1].unit,
    saturates: data.nutrition.nutrients[2].amount,
    saturatesPerDay: data.nutrition.nutrients[2].percentOfDailyNeeds,
    saturatesUnit: data.nutrition.nutrients[2].unit,
    sugars: data.nutrition.nutrients[5].amount,
    sugarsPerDay: data.nutrition.nutrients[5].percentOfDailyNeeds,
    sugarsUnit: data.nutrition.nutrients[5].unit,
    salt: data.nutrition.nutrients[7].amount,
    saltPerDay: data.nutrition.nutrients[7].percentOfDailyNeeds,
    saltUnit: data.nutrition.nutrients[7].unit,
  };
};

//transform cooking method data from the API
const constructCookingMethodObject = (data) => {
  const callback = (each) => {
    return {
      stepNumber: each.number,
      stepInstruction: each.step,
    };
  };
  return data.analyzedInstructions[0].steps.map(callback);
};

//transform ingredients data from the API

const onLoad = () => {
  //get recipe info and render recipe image card
  const recipeInformationData = constructRecipeObject(mockData);
  renderImageRecipeCard(recipeInformationData);

  //get cooking methods info and render cooking method card
  const cookingMethodsData = constructCookingMethodObject(mockData);
  renderCookingMethodCard(cookingMethodsData);
};

$(document).ready(onLoad);
