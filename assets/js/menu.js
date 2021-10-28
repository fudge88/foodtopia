const API_KEY = "be6ae57f7b8c425994e6a529e04cb682";

//construct and render recipe cards

const renderRecipeCards = (recipeData) => {
  $("#card-container").empty();

  // construct recipe card
  const callback = (each) => {
    const recipeCard = `<div class="card m-2 recipe-card">
    <!-- cards image-->
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src=${each.image}
          alt=${each.title}
        />
      </figure>
    </div>
    <!-- title of recipe -->
    <div class="card-header-title is-centered">
      <h2 class="is-4">${each.title}</h2>
    </div>
    <!-- extra content for recipe -->
    <div class="card-footer">
      <div class="card-footer-item"><i class="far fa-clock"> ${each.time}mins</i></div>
      <div class="card-footer-item"><i class="fas fa-users"> ${each.servings}</i></div>
      <div class="card-footer-item">${each.calories}Kcal</div>
    </div>
  </div>`;
    $("#card-container").append(recipeCard);
  };

  // append recipe card to container
  recipeData.forEach(callback);
};

const constructRecipeObject = (data) => {
  const callback = (each) => {
    return {
      id: each.id,
      title: each.title,
      time: each.readyInMinutes,
      servings: each.servings,
      image: each.image,
      calories: each.nutrition.nutrients[0].amount,
    };
  };

  // replace with data from API
  return data.results.map(callback);
};

const onSubmit = function (event) {
  event.preventDefault();

  // get search term
  const searchTerm = $("#search-term").val();

  console.log(searchTerm);

  // get data from API for search term

  const recipeCardsData = constructRecipeObject(complexSearchApiData);
  renderRecipeCards(recipeCardsData);
};

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const constructApiUrl = function (baseUrl, searchOptions) {
  const searchQuery = searchOptions.query;
  let dietQuery;
  let intolerancesQuery;
  let cuisinesQuery;

  if (searchOptions.diet.length) {
    dietQuery = `diet=${searchOptions.diet.join(",")}`;
  }
  if (searchOptions.intolerances.length) {
    intolerancesQuery = `intolerances=${searchOptions.intolerances.join(",")}`;
  }
  if (searchOptions.cuisines.length) {
    cuisinesQuery = `cuisines=${searchOptions.cuisines.join(",")}`;
  }
  const url = `${baseUrl}?query=${searchQuery}&${dietQuery}&${intolerancesQuery}&${cuisinesQuery}&addRecipeNutrition=true&apiKey=${API_KEY}&number=10`;
  return url;
};

const onReady = function () {
  const searchOptions = getFromLocalStorage("options", {});
  console.log(searchOptions);
  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
  const apiUrl = constructApiUrl(baseUrl, searchOptions);
};

$("#search-form").on("submit", onSubmit);
$(document).ready(onReady);

$(".info-icon").hover(
  function () {
    $(".nutrition-label").attr("class", "nutrition-label displayed");
  },
  function () {
    $(".nutrition-label").removeClass("displayed");
  }
);
