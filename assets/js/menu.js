const mockData = false;

// render advance search
const renderModal = () => {
  constructModal();
  $(".modal").attr("class", "modal is-active");
};

const closeModal = () => {
  $(".modal").removeClass("is-active");
};

const constructAndAppendAdvanceSearchOptions = (searchOptions) => {
  const constructDietOption = (eachDiet) => {
    return `<input type="checkbox" data-option="diet" id=${eachDiet}>${eachDiet}</input>`;
  };

  const constructIntolerancesOption = (eachIntolerance) => {
    return `<input type="checkbox" data-option="intolerances" id=${eachIntolerance}>${eachIntolerance}</input>`;
  };

  const constructCuisinesOption = (eachCuisine) => {
    return ` <input type="checkbox" data-option="cuisines" id=${eachCuisine}>${eachCuisine}</input>`;
  };

  const dietOption = searchOptions.diet.map(constructDietOption).join("");

  //map through the intolerance
  const intolerancesOption = searchOptions.intolerances
    .map(constructIntolerancesOption)
    .join("");

  //map through the cuisines
  const cuisinesOption = searchOptions.cuisines
    .map(constructCuisinesOption)
    .join("");
};

const constructModal = (searchOptions) => {
  ` <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <form class="filter" id="filter-form">
      <header class="modal-card-head">
        <p class="modal-card-title">Advance search</p>
        <button class="delete close-modal" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <h3>Diets</h3>
        <label class="checkbox">
        ${dietOption} </label>
        <h3>Intolerances</h3>
        <label class="checkbox">
        ${intolerancesOption} </label>
        <h3>Cuisines</h3>
        <label class="checkbox">
        ${cuisinesOptions}</label>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Search</button>
        <button class="button">Cancel</button>
      </footer>
    </form>
  </div>
</div>
</section>

<!-- search bar and filter -->
<!-- Main container -->
<div class="level container is-max-desktop">
<!-- Left side -->
<form id="search-form">
  <div class="level-left">
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input
            class="input"
            type="text"
            placeholder="Find a post"
            id="search-term"
          />
        </p>
        <p class="control">
          <button class="button" type="submit">Search</button>
        </p>
      </div>
    </div>
  </div>
</form>
</div>`;
};
//construct and render recipe cards
const renderRecipeCards = (recipeData) => {
  $("#card-container").empty();

  // construct recipe card
  const callback = (each) => {
    const recipeCard = ` <div class="card recipe-card">
      <div class="card-image">
        <figure class="image is-4by3">
          <div class="nutrition-label">
            <div class="column nutrient-col">
              <h6>Time</h6>
              <p>${each.time}</p>
            </div>
            <div class="column nutrient-col">
              <h6>Servings</h6>
              <p>${each.servings}</p>
              <span>low</span>
            </div>
            <div class="column nutrient-col">
              <h6>Calories</h6>
              <p>${each.calories}</p>
              <span>low</span>
            </div>
          </div>
          <div class="recipe-img-icon-container">
            <div id=${each.id} class="mr-3 bookmark-icon">
              <i id=${each.id} class="fas fa-bookmark"></i>
            </div>
            <div class="mr-3 info-icon">
              <i class="fas fa-info fa-lg"></i>
            </div>
          </div>
          <img
            class="recipe-img"
            src=${each.image}
            alt=${each.title}
          />
        </figure>

        <div class="card-header">
          <h1 class="card-header-title recipe-title">${each.title}</h1>
        </div>

        <footer class="card-footer recipe-footer">
          <button id=${each.id} class="button green-outline is-outlined view-info">
            View Recipe
          </button>
        </footer>
      </div>
    </div>`;

    $("#card-container").append(recipeCard);

    $(".view-info").on("click", handleViewRecipeDetails);

    const addToFavourites = (event) => {
      const target = event.target;

      if ($(target).attr("id") == each.id) {
        const favouritesRecipe = {
          id: each.id,
          title: each.title,
          time: each.readyInMinutes,
          servings: each.servings,
          image: each.image,
        };

        const favourites = getFromLocalStorage("favourites", []);

        favourites.push(favouritesRecipe);

        localStorage.setItem("favourites", JSON.stringify(favourites));
      }
    };

    //add to local storage
    $(".bookmark-icon").on("click", addToFavourites);
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

const handleViewRecipeDetails = (event) => {
  const target = $(event.target);
  if (target.is("button")) {
    const recipeId = target.attr("Id");
    console.log(recipeId);

    // add recipe id value to local storage
    localStorage.setItem("recipeId", JSON.stringify(recipeId));

    //change location to recipe html
    window.location.assign("../../recipes.html");
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
  const url = `${baseUrl}?query=${searchQuery}&${dietQuery}&${intolerancesQuery}&${cuisinesQuery}&addRecipeNutrition=true&apiKey=${API_KEY}&number=1`;
  return url;
};

const onReady = async function () {
  const searchOptions = getFromLocalStorage("options", {});

  const baseUrl = "https://api.spoonacular.com/recipes/complexSearch";
  const apiUrl = constructApiUrl(baseUrl, searchOptions);
  const data = await getApiData(apiUrl);

  if (mockData) {
    const recipeCardsData = constructRecipeObject(complexSearchApiData);
    renderRecipeCards(recipeCardsData);
  } else {
    const recipeCardsData = constructRecipeObject(data);
    renderRecipeCards(recipeCardsData);
  }
};

$("#search-form").on("submit", onSubmit);
$(document).ready(onReady);

const callback = (event) => {
  const target = event.target;
  console.log(target);
};

//add event listener on recipe container
$(".recipe-card").on("click", callback);
$("#filter-toggle").on("click", renderModal);
$("#filter-form").on("submit", onSubmit);
$(".close-modal").on("click", closeModal);
