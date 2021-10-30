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
        <h2 class="prep-time-heading">Low</h2>
      </div>
      <div class="card-footer-item recipe-info-box">
        <p>ORIGIN</p>
        <h2 class="prep-time-heading">Spain</h2>
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

//render ingredients card
const renderIngredientsCard = (data) => {
  const constructIngredientItem = (each) => {
    const ingredientItem = `<li>${each.ingredientName} ${each.quantity} ${each.quantityUnit}</li>`;
    $("#ingredients-container").append(ingredientItem);
  };
  data.forEach(constructIngredientItem);
};

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

  return {
    image: data.image,
    title: data.title,
    time: data.readyInMinutes,
    serves: data.servings,
    summary: data.summary,
    energy: energy?.amount || "N/A",
    fat: fat?.amount || "N/A",
    // fatPerDay: data.nutrition.nutrients[1].percentOfDailyNeeds,
    // fatUnit: data.nutrition.nutrients[1].unit,
    // saturates: data.nutrition.nutrients[2].amount,
    // saturatesPerDay: data.nutrition.nutrients[2].percentOfDailyNeeds,
    // saturatesUnit: data.nutrition.nutrients[2].unit,
    // sugars: data.nutrition.nutrients[5].amount,
    // sugarsPerDay: data.nutrition.nutrients[5].percentOfDailyNeeds,
    // sugarsUnit: data.nutrition.nutrients[5].unit,
    // salt: data.nutrition.nutrients[7].amount,
    // saltPerDay: data.nutrition.nutrients[7].percentOfDailyNeeds,
    // saltUnit: data.nutrition.nutrients[7].unit,
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

const onLoad = () => {
  //get recipe info and render recipe image card
  const recipeInformationData = constructRecipeObject(mockRecipe);
  renderImageRecipeCard(recipeInformationData);

  //get cooking methods info and render cooking method card
  const cookingMethodsData = constructCookingMethodObject(mockRecipe);
  renderCookingMethodCard(cookingMethodsData);

  //get ingredients info and render ingredients list
  const ingredientsData = constructIngredientsObject(mockRecipe);
  renderIngredientsCard(ingredientsData);
};

$(document).ready(onLoad);
