//render image card
const renderImageRecipeCard = (data) => {
  //construct image card
  const imageRecipeCard = `<article class="tile is-child">
    <figure class="image is-4by3">
      <img
        class="recipe-img"
        src=${data.image}
        alt=${data.title}
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
        <span>${data.fatPerDay}%</span>
      </div>
      <div class="column nutrient-col">
        <h6>Saturates</h6>
        <p>${data.saturates}${data.saturatesUnit}</p>
        <span>${data.saturatesPerDay}%</span>
      </div>
      <div class="column nutrient-col">
        <h6>Sugars</h6>
        <p>${data.sugars}${data.sugarsUnit}</p>
        <span>${data.sugarsPerDay}%</span>
      </div>
      <div class="column">
        <h6>Salt</h6>
        <p>${data.salt}${data.saltUnit}</p>
        <span>${data.saltPerDay}%</span>
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
        <p>Cost</p>
        <h2 class="prep-time-heading">${getCostRange(data)}</h2>
      </div>
      <div class="card-footer-item recipe-info-box">
        <p>Popularity</p>
        <h2 class="prep-time-heading">${getPopularityScore(data)}</h2>
      </div>
    </footer>
  </article>
  <article class="tile is-child desc-container">
    <h2 class="title">Wine Pairing?</h2>
    <p class="subtitle">${data.summary}</p>
  </article>`;

  getCostRange(data);
  //append image card and nutritional info on icon hover
  $("#image-recipe-container").append(imageRecipeCard);
  $(".info-icon").hover(
    function () {
      $(".nutrition-label").attr("class", "nutrition-label displayed");
    },
    function () {
      $(".nutrition-label").removeClass("displayed");
    }
  );
};

//get cost range
const getCostRange = (data) => {
  if (data.cheap) {
    return "cheap";
  } else {
    return "admirable";
  }
};

//get popularity score
const getPopularityScore = (data) => {
  if (data.veryPopular) {
    return "high";
  } else {
    return "low";
  }
};

// add a function to construct API URL
const constructApiUrl = (searchQuery) => {
  let recipeId = searchQuery;

  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${API_KEY}`;
  return url;
};

//render cooking methods card
const renderCookingMethodCard = (data) => {
  //construct cooking methods card
  const cookingMethodsCard = $(`<article class="tile is-child method-container">
    <h2 class="title">Method</h2>
    <p class="subtitle">Method of cooking/steps</p>
  </article>`);

  //construct each cooking method container
  const constructEachCookingMethod = (each) => {
    const cookingMethod = `<div class="content">${each.stepNumber}. ${each.stepInstruction}</div>`;
    $(cookingMethod).appendTo(cookingMethodsCard);
  };

  data.forEach(constructEachCookingMethod);
  //append cooking method card to cooking method container
  $("#method-container").append(cookingMethodsCard);
};

const renderServingQuantities = function (userServings) {
  console.log(userServings);
  const serving = (document.getElementById("original-serving").innerHTML =
    userServings.servings);
};

// ingredients calculator
const ingredientsCalculator = (servingData, ingredientsData, userServings) => {
  const servings = servingData.serves;
  const ingredientsCalculatorItem = (each) => {
    // console.log(each);
    // get value from each ingredient
    const value = each.quantity;
    // divide value by number of servings with the recipe
    const baseServing = value / servings;
    const selectedServings = Math.floor(baseServing * userServings);
    // console.log(each.ingredientName, selectedServings);

    const ingredientItem = `<div>
      <span>${selectedServings}</span>
      ${each.quantityUnit} ${each.ingredientName}
      </div>`;
    console.log(ingredientItem);
    $("#ingredients-container").append(ingredientItem);
    // get number of servings user wishes to use
    // times the new value with teh number of servings
    // render new value
  };
  $("#ingredients-container").empty();
  ingredientsData.forEach(ingredientsCalculatorItem);
};

//render ingredients card
const renderIngredientsCard = (data) => {
  const constructIngredientItem = (each) => {
    // const ingredientItem = `<li>${each.ingredientName} ${each.quantity} ${each.quantityUnit}</li>`;

    const ingredientItem = `<div>
    <span>${each.quantity}</span>
    ${each.quantityUnit} ${each.ingredientName}
    </div>`;
    $("#ingredients-container").append(ingredientItem);
  };
  data.forEach(constructIngredientItem);
};

//get nutrient key name from nutrients array
const getNutrient = (arr, key) => {
  return arr.find((each) => {
    return each.name === key;
  });
};

//transform recipe info data from API
const constructRecipeObject = (data) => {
  const nutrients = data?.nutrition?.nutrients || [];
  const energy = getNutrient(nutrients, "Calories");
  const fat = getNutrient(nutrients, "Fat");
  const saturates = getNutrient(nutrients, "Saturated Fat");
  const sugars = getNutrient(nutrients, "Sugar");
  const salt = getNutrient(nutrients, "Sodium");

  return {
    image: data.image,
    title: data.title,
    time: data.readyInMinutes,
    serves: data.servings,
    summary: data.winePairing.pairingText,

    //calories
    energy: energy?.amount || "N/A",

    //fats
    fat: fat?.amount || "N/A",
    fatPerDay: fat?.percentOfDailyNeeds || "N/A",
    fatUnit: fat?.unit,

    //saturated fats
    saturates: saturates?.amount || "N/A",
    saturatesPerDay: saturates?.percentOfDailyNeeds || "N/A",
    saturatesUnit: saturates?.unit,

    //sugar
    sugars: sugars?.amount || "N/A",
    sugarsPerDay: sugars?.percentOfDailyNeeds || "N/A",
    sugarsUnit: sugars?.unit,

    //salt
    salt: salt?.amount || "N/A",
    saltPerDay: salt?.percentOfDailyNeeds || "N/A",
    saltUnit: salt?.unit,
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
const constructIngredientsObject = (data) => {
  const callback = (each) => {
    return {
      ingredientName: each.name,
      quantity: each.measures.metric.amount,
      quantityUnit: each.measures.metric.unitShort,
    };
  };
  return data.extendedIngredients.map(callback);
};

const onLoad = async () => {
  //get recipe id from local storage
  const recipeIdValue = getFromLocalStorage("recipeId", {});

  if (recipeIdValue) {
    //build url API
    const apiUrl = `https://api.spoonacular.com/recipes/${recipeIdValue}/information?includeNutrition=true&apiKey=${API_KEY}`;

    //fetch data
    const recipeData = await getApiData(apiUrl);

    //get recipe info and render recipe image card
    const recipeInformationData = constructRecipeObject(recipeData);
    renderImageRecipeCard(recipeInformationData);

    //get cooking methods info and render cooking method card
    const cookingMethodsData = constructCookingMethodObject(recipeData);
    renderCookingMethodCard(cookingMethodsData);

    //get ingredients info and render ingredients list
    const ingredientsData = constructIngredientsObject(recipeData);
    renderIngredientsCard(ingredientsData);

    const getUserServings = (event) => {
      const target = event.target;
      if ($(target).hasClass("servings-value")) {
        const servingTabValue = $(target).data("value");
        console.log(servingTabValue);

        ingredientsCalculator(
          recipeInformationData,
          ingredientsData,
          servingTabValue
        );
      }
    };

    $("#servings-container").on("click", getUserServings);

    renderServingQuantities(recipeData);
  }
  console.log(recipeIdValue);
};
$(document).ready(onLoad);
