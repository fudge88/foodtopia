//transform random recipe data
const constructRandomRecipeObject = (data) => {
  const callback = (each) => {
    return {
      id: each.id,
      image: each.image,
      title: each.title,
    };
  };
  return data.recipes.map(callback);
};

//construct random recipes cards
const constructRandomRecipeCards = (data) => {
  //construct each random recipe card
  const constructRandomRecipeCard = (each) => {
    const randomRecipeCard = `<div class="high-rated-recipe" >
      <figure class="image is-128x128">
        <img class="is-rounded view-random-info" id=${each.id}  src=${each.image}>
        <h3>${each.title}</h3>
      </figure>
    </div>`;

    //append random recipe card to random recipes container
    $("#random-recipes-container").append(randomRecipeCard);
  };
  data.forEach(constructRandomRecipeCard);

  //add event on random recipe card
  $(".view-random-info").on("click", handleViewRandomRecipe);
};

//callback function on random recipe card event
const handleViewRandomRecipe = (event) => {
  const target = $(event.target);
  if (target.is("img")) {
    //add recipe id to local storage
    const randomRecipeId = target.attr("id");

    localStorage.setItem("recipeId", JSON.stringify(randomRecipeId));

    //change page location to recipe page
    window.location.assign("./recipe.html");
  }
};

//get input value from user
const handleSearch = (event) => {
  event.preventDefault();

  const searchInputs = getSearchInputs();

  localStorage.setItem("options", JSON.stringify(searchInputs));

  //change page location to
  window.location.assign("./menu.html");
};

// add a event listener submit to get the input value
$("#search-form").on("submit", handleSearch);

//get search input and dietary option request
const onClick = (event) => {
  event.preventDefault();
  const searchInput = $("#search-input").val();

  //render modal
  constructAndAppendModal(searchOptions, searchInput);

  //add event on advanced search modal to get filter options
  $("#advance-search").on("click", handleSearch);
};

//add event on advanced search modal
$("#filter-toggle").on("click", onClick);

//on page load execute functions:
const handleLoad = async () => {
  //build random recipes search url URL
  const randomRecipesApiUrl = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${API_KEY}`;

  //get random recipes data from the API
  const getRandomRecipesData = await getApiData(randomRecipesApiUrl);

  // render random recipes cards
  const randomRecipesData = constructRandomRecipeObject(getRandomRecipesData);
  constructRandomRecipeCards(randomRecipesData);
};

//on document load
$(document).ready(handleLoad);
