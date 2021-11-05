const constructAndAppendFavouritesCards = (favouritesRecipes) => {
  //construct each favourite recipe card
  const renderFavouritesCards = (each) => {
    return `<div class="menu-card-container">
    <div class="menu-card-body">
      <h1 class="menu-card-title pt-2">${each.title}</h1>
      <h3 class="menu-br lets-cook" id=${each.id}>Lets Cook!</h3>
      <div class="menu-icon-container">
        <div class="menu-icon-info-div">
          <div class="mr-2 menu-icon menu-icon-info">${each.time}m </div>
          <div class="menu-icon menu-icon-info">${each.calories}</div>
        </div>
        <div class="menu-icon-love-div">
          <div class="menu-icon menu-icon-love remove-from-favourites" id=${each.id}><i class="fas fa-trash fa-lg" id=${each.id}></i></div>
        </div>
        </div>
    </div>
    <div class="menu-card-img">
      <figure class="menu-img">
        <img class="" src=${each.image} alt=${each.title}>
      </figure>
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

    if (target.is("div") || target.is("i")) {
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
  $(".remove-from-favourites").on("click", removeRecipe);

  const handleViewRecipeDetails = (event) => {
    const target = $(event.target);
    if (target.is("h3")) {
      const recipeId = target.attr("id");

      // add recipe id value to local storage
      localStorage.setItem("recipeId", JSON.stringify(recipeId));

      //change location to recipe html
      window.location.assign("./recipe.html");
    }
  };

  //view recipe info
  $(".lets-cook").on("click", handleViewRecipeDetails);
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
