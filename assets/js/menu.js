const mockData = false;

//construct and render recipe cards
const renderRecipeCards = (recipeData) => {
  $("#card-container").empty();

  // construct recipe card
  const callback = (each) => {
    let recipeCard = ` <div class="card recipe-card">
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
            <div class="mr-3 bookmark-icon">
              <i class="fas fa-bookmark"></i>
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
          <button id=${each.id} class="button green-outline is-outlined">
            View Recipe
          </button>
        </footer>
      </div>
    </div>`;
    recipeCard = $(recipeCard);

    recipeCard.on("click", handleViewRecipeDetails);

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
  const url = `${baseUrl}?query=${searchQuery}&${dietQuery}&${intolerancesQuery}&${cuisinesQuery}&addRecipeNutrition=true&apiKey=${API_KEY}`;
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
