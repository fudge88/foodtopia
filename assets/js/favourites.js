const constructAndAppendFavouritesCards = (favouritesRecipes) => {
  //construct each favourite recipe card
  const renderFavouritesCards = (each) => {
    return `<div class="card recipe-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <div class="recipe-img-icon-container">
          <div class="mr-3 bookmark-icon">
            <i class="fas fa-minus-circle"></i>
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
        <button class="button green-outline is-outlined">
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
};

const onReady = () => {
  const favouritesRecipes = getFromLocalStorage("favourites", []);

  //render div with initial score
  constructAndAppendFavouritesCards(favouritesRecipes);
};

$(document).ready(onReady);
