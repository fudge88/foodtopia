const API_KEY = "afcf068a6e5d4679a7bf651d36da89ce";

//YouTube API key
const API_KEY_YOU_TUBE = "AIzaSyBFiF_ViAG6gJRFVQyBXBidsSKR4bapkuM";

//fetch API data
const getApiData = async (url) => {
  const dataResponse = await fetch(url);

  const data = await dataResponse.json();
  return data;
};

// taken from Bulma for coss and burger icon on smaller screen
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// render advance search modal
const renderModal = () => {
  $(".modal").attr("class", "modal is-active");
};

// close advance search Modal
const closeModal = () => {
  $(".modal").removeClass("is-active");
};

// construct search options

const constructAndAppendModal = (searchOptions, searchInput) => {
  const constructDietOption = (eachDiet) => {
    return `<input type="checkbox" data-option="diet" id=${eachDiet}>
    <label for="${eachDiet}" class="mr-2">${eachDiet}</label>`;
  };

  const constructIntolerancesOption = (eachIntolerance) => {
    return `<input type="checkbox" data-option="intolerances" id=${eachIntolerance}>
    <label for="${eachIntolerance}" class="mr-2">${eachIntolerance}</label>`;
  };

  const constructCuisinesOption = (eachCuisine) => {
    return `<input type="checkbox" data-option="cuisines" id=${eachCuisine}>
    <label for="${eachCuisine}" class="mr-2">${eachCuisine}</label>`;
  };

  //map through the diet
  const dietOption = searchOptions.diet.map(constructDietOption).join(" ");

  //map through the intolerance
  const intolerancesOption = searchOptions.intolerances
    .map(constructIntolerancesOption)
    .join(" ");

  //map through the cuisines
  const cuisinesOption = searchOptions.cuisines
    .map(constructCuisinesOption)
    .join(" ");

  // Modal conntainer
  const searchOptionsContainer = `<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <form class="filter" id="filter-form">
      <header class="modal-card-head">
        <p class="modal-card-title">Advance search</p>
        <button class="delete close-modal" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
      <div class="field">
      <div class="control mb-2">
      <input class="input" id="search-input" type="text" value="${searchInput}" placeholder="Search" />
      </div>
      <h3>Choose your diet...</h3>
      <div class="diet-options mb-2">
      ${dietOption}</div><hr />
      <h3>Any Intolerances?...</h3>
      <div class="intolerance-options mb-2">
        ${intolerancesOption} </div><hr />
      <h3>Choose your Cuisine...</h3>
      <div class="cuisine-option mb-2">
      ${cuisinesOption}</div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" id="advance-search">Search</button>
        <button class="button">Cancel</button>
      </footer>
    </form>
  </div>
</div>
</section>
      `;

  $("#modal-container").append(searchOptionsContainer);
  renderModal();
};

// get the inputs from the search

const getSearchInputs = () => {
  const searchInput = $("#search-input").val();
  const checkBoxInput = $("input[type=checkbox]:checked");

  const options = {
    query: searchInput,
    diet: [],
    intolerances: [],
    cuisines: [],
  };
  const callback = function () {
    if ($(this).data("option") === "diet") {
      options.diet.push($(this).attr("id"));
    }
    if ($(this).data("option") === "intolerances") {
      options.intolerances.push($(this).attr("id"));
    }
    if ($(this).data("option") === "cuisines") {
      options.cuisines.push($(this).attr("id"));
    }
  };
  checkBoxInput.each(callback);
  return options;
};

// brand hover
const hoverIn = () => {
  $("#logo").attr("src", "./assets/images/logo-hover.PNG");
};

const hoverOut = () => {
  $("#logo").attr("src", "./assets/images/logo.PNG");
};

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

$(".navbar-logo").hover(hoverIn, hoverOut);

$(".info-icon").hover(
  function () {
    $(".nutrition-label").attr("class", "nutrition-label displayed");
  },
  function () {
    $(".nutrition-label").removeClass("displayed");
  }
);
