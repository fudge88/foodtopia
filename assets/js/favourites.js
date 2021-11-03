const constructAndAppendFavouritesCards = (favouritesRecipes) => {
  //construct each favourite recipe card
  const renderFavouritesCards = (each) => {
    return `<div class="card recipe-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <div class="recipe-img-icon-container">
          <div id=${each.id} class="mr-3 bookmark-icon">
          <i id=${each.id} class="remove-icon fas fa-minus-circle"></i>
          </div>
        </div>
        <img
          class="recipe-img"
          src=${each.image}
          alt="placeholder image"
        />
      </figure>

      <div class="card-header">
        <h1 class="card-header-title recipe-title">${each.title}</h1>
      </div>

      <footer class="card-footer recipe-footer">
        <button id=${each.id} class="view-info button green-outline is-outlined">
          View Recipe
        </button>
      </footer>
    </div>
  </div>`;
  };

  //map over the favouritesRecipes
  const favouriteCards = favouritesRecipes.map(renderFavouritesCards).join("");

  const favouriteCardsContainer = `<div class="card-container">${favouriteCards}</div>`;

  //append to card container
  $("#card-section").append(favouriteCardsContainer);

  const removeRecipe = (event) => {
    const target = $(event.target);

    const favouritesRecipes = getFromLocalStorage("favourites", []);

    if (target.is("i")) {
      const recipeId = target.attr("id");

      const getFilteredFavourites = (each) => {
        console.log(recipeId, each.id);
        return each.id != recipeId;
      };

      const newFavourites = favouritesRecipes.filter(getFilteredFavourites);
      console.log(newFavourites);

      localStorage.setItem("favourites", JSON.stringify(newFavourites));

      const newFavouritesRecipes = getFromLocalStorage("favourites", []);

      $("#card-section").empty();

      if (newFavouritesRecipes.length === 0) {
        constructAndAppendMessage();
      } else {
        constructAndAppendFavouritesCards(newFavouritesRecipes);
      }
    }
  };

  //remove recipe from local Storage
  $(".bookmark-icon").on("click", removeRecipe);

  const handleViewRecipeDetails = (event) => {
    const target = $(event.target);
    if (target.is("button")) {
      const recipeId = target.attr("id");
      console.log(recipeId);

      // add recipe id value to local storage
      localStorage.setItem("recipeId", JSON.stringify(recipeId));

      //change location to recipe html
      window.location.assign("./recipes.html");
    }
  };

  //view recipe info
  $(".view-info").on("click", handleViewRecipeDetails);
};

//construct and append the message
const constructAndAppendMessage = () => {
  const message = `<div class ="notification is-primary">
  OOPS LOOKS LIKE YOU HAVE NO RECIPES ADDED TO YOUR FAVOURITES
</div>`;

  //append to card container
  $("#card-section").append(message);
};

const onReady = () => {
  const favouritesRecipes = getFromLocalStorage("favourites", []);

  if (favouritesRecipes.length === 0) {
    constructAndAppendMessage();
  } else {
    constructAndAppendFavouritesCards(favouritesRecipes);
  }
};

$(document).ready(onReady);
