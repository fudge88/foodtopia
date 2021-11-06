const mockData = false;

// render advance search
//construct and render recipe cards
const renderRecipeCards = (recipeData) => {
  $("#card-container").empty();

  // construct recipe card
  const callback = (each) => {
    const recipeCard = `<div class="menu-card-container">
    <div class="menu-card-body">
      <h1 class="menu-card-title pt-2">${each.title}</h1>
      <h3 class="menu-br lets-cook" id=${each.id}>Lets Cook!</h3>
      <div class="menu-icon-container">
        <div class="menu-icon-info-div">
          <div class="mr-2 menu-icon menu-icon-info">${each.time}min</div>
          <div class="menu-icon menu-icon-info">${each.calories}</div>
        </div>
        <div class="menu-icon-love-div">
          <div class="ml-6 menu-icon menu-icon-love add-to-favourites" id=${each.id}><i class="fas fa-heart fa-lg" id=${each.id}></i></div>
        </div>
      </div>
    </div>
    <div class="menu-card-img">
      <figure class="menu-img">
        <img class="" src=${each.image} alt=${each.title}>
      </figure>
    </div>
  </div>`;

    $("#card-container").append(recipeCard);

    $(".lets-cook").on("click", handleViewRecipeDetails);

    const addToFavourites = (event) => {
      // Get the snackbar DIV
      var toast = $("#toast");

      // Add the "show" class to DIV
      toast.addClass("show");

      // After 3 seconds, remove the show class from DIV
      setTimeout(function () {
        toast.attr("class", "");
      }, 3000);

      const target = event.target;

      if ($(target).attr("id") == each.id) {
        const favouritesRecipe = {
          id: each.id,
          title: each.title,
          time: each.time,
          servings: each.servings,
          image: each.image,
          calories: each.calories,
        };

        const favourites = getFromLocalStorage("favourites", []);

        const findRecipeId = (each) => {
          return each.id == $(target).attr("id");
        };

        const isRecipeInFavourites = favourites.find(findRecipeId);

        if (!isRecipeInFavourites) {
          favourites.push(favouritesRecipe);

          localStorage.setItem("favourites", JSON.stringify(favourites));
        }
      }
    };

    //add to local storage
    $(".add-to-favourites").on("click", addToFavourites);
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
      dishType: each.dishTypes,
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

  // get data from API for search term

  const recipeCardsData = constructRecipeObject(complexSearchApiData);
  renderRecipeCards(recipeCardsData);
};

const handleSearch = (event) => {
  event.preventDefault();

  const searchInputs = getSearchInputs();
  localStorage.setItem("options", JSON.stringify(searchInputs));

  //change page location
  window.location.assign("./menu.html");
};

const handleViewRecipeDetails = (event) => {
  const target = $(event.target);
  if (target.is("h3")) {
    const recipeId = target.attr("id");

    // add recipe id value to local storage
    localStorage.setItem("recipeId", JSON.stringify(recipeId));
    //change location to recipe
    window.location.assign("./recipe.html");
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
  const url = `${baseUrl}?query=${searchQuery}&${dietQuery}&${intolerancesQuery}&${cuisinesQuery}&addRecipeNutrition=true&apiKey=${API_KEY}&number=12`;
  return url;
};

const onReady = async function () {
  const searchOptions = getFromLocalStorage("options", {});
  //append search query to main heading
  $("#search-heading-container").append(
    `<span class="orange-text">${searchOptions.query}</span>`
  );
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
};

const handleAdvanceSearch = (event) => {
  event.preventDefault();

  const searchInputs = getSearchInputs();

  localStorage.setItem("options", JSON.stringify(searchInputs));
  window.location.reload();
};

const onClick = (event) => {
  event.preventDefault();
  const options = JSON.parse(localStorage.getItem("options")) ?? {};
  constructAndAppendModal(searchOptions, options.query || "");
  $("#advance-search").on("click", handleAdvanceSearch);
};

//add event listener on recipe container
$(".recipe-card").on("click", callback);
$("#filter-toggle").on("click", onClick);
$(".close-modal").on("click", closeModal);

function showToast() {
  // Get the snackbar DIV
  var toast = $("#toast");

  // Add the "show" class to DIV
  toast.addClass("show");

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    toast.attr("class", "");
  }, 3000);
}

$("#search-form").submit(function (event) {
  handleSearch(event);
});
