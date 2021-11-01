const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const constructAndAppendFavouritesCards = (favouritesRecipes) => {
  //construct each favourite recipe card
  const renderFavouritesCards = () => {
    return `<div class="card recipe-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <div class="nutrition-label">
          <div class="column nutrient-col">
            <h6>Energy</h6>
            <p>106Kcal</p>
          </div>
          <div class="column nutrient-col">
            <h6>Fat</h6>
            <p>3.0g</p>
            <span>low</span>
          </div>
          <div class="column nutrient-col">
            <h6>Saturates</h6>
            <p>1.3g</p>
            <span>low</span>
          </div>
          <div class="column nutrient-col">
            <h6>Sugars</h6>
            <p>34g</p>
            <span>high</span>
          </div>
          <div class="column">
            <h6>Salt</h6>
            <p>0.3g</p>
            <span>med</span>
          </div>
        </div>
        <div class="recipe-img-icon-container">
          <div class="mr-3 bookmark-icon">
            <i class="fas fa-minus-circle"></i>
          </div>
          <div class="mr-3 info-icon">
            <i class="fas fa-info fa-lg"></i>
          </div>
        </div>
        <img
          class="recipe-img"
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="placeholder image"
        />
      </figure>

      <div class="card-header">
        <h1 class="card-header-title recipe-title">Recipe Name</h1>
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
