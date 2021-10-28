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

const mainContainer = $("#main");

//search options
const searchOptions = {
  diet: [
    "Gluten-Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescatarian",
    "Paleo",
  ],
  intolerances: [
    "Dairy",
    "Egg",
    "Gluten",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree-Nut",
  ],
  cuisines: [
    "American",
    "British",
    "Chinese",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Mediterranean",
    "Mexican",
    "Spanish",
    "Thai",
  ],
};

//construct the search input
const constructAndAppendSearchbar = () => {
  const searchBar = `<section>
  <form id="search-form" class="is-flex is-justify-content-center is-align-content-center">
    <div class="control">
      <input id="search-input"
        class="input is-focused"
        type="text"
        placeholder="Search Here"
      />
    </div>
    <button class="button is-primary is-focused">Search</button>
  </form>
</section>`;

  mainContainer.append(searchBar);
};

//construct search options
const constructAndAppendSearchOptions = (searchOptions) => {
  const constructDietOption = (eachDiet) => {
    return `<label class="checkbox">
    <input type="checkbox" data-option="diet" id=${eachDiet}>${eachDiet}</input>
  </label>`;
  };

  const constructIntolerancesOption = (eachIntolerance) => {
    return `<label class="checkbox">
    <input type="checkbox" data-option="intolerances" id=${eachIntolerance}>${eachIntolerance}</input>
  </label>`;
  };

  const constructCuisinesOption = (eachCuisine) => {
    return `<label class="checkbox">
    <input type="checkbox" data-option="cuisines" id=${eachCuisine}>${eachCuisine}</input>
  </label>`;
  };

  //map through the diet
  const dietOption = searchOptions.diet.map(constructDietOption).join("");

  //map through the intolerance
  const intolerancesOption = searchOptions.intolerances
    .map(constructIntolerancesOption)
    .join("");

  //map through the cuisines
  const cuisinesOption = searchOptions.cuisines
    .map(constructCuisinesOption)
    .join("");

  const searchOptionsContainer = `<section
  class="
    column
    is-flex
    is-justify-content-center
    is-align-content-center
    is-flex-wrap-wrap
  "
>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu4"
      >
        <span>Dietaries</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content is-flex is-flex-direction-column"> ${dietOption}
      </div>
    </div>
  </div>

  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu4"
      >
        <span>Intolerances</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content is-flex is-flex-direction-column"> ${intolerancesOption}
      </div>
    </div>
  </div>

  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu4"
      >
        <span>Cuisines</span>
        <span class="icon is-small">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content is-flex is-flex-direction-column"> ${cuisinesOption}
      </div>
    </div>
  </div>
</section>`;

  mainContainer.append(searchOptionsContainer);
};

//construct search plant
const constructSearchPlant = (searchOptions) => {
  constructAndAppendSearchbar();
  constructAndAppendSearchOptions(searchOptions);
};
const getSearchInputs = () => {
  const searchInput = $("#search-input").val();
  const checkboxInput = $("input[type=checkbox]:checked");
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
  checkboxInput.each(callback);
  return options;
};
//get input value from user
const handleSearch = (event) => {
  event.preventDefault();

  const searchInputs = getSearchInputs();
  localStorage.setItem("options", JSON.stringify(searchInputs));

  //change page location
  window.location.assign("../../menu.html");
};

// brand hover
const hoverIn = () => {
  $("#logo").attr("src", "../assets/images/logo-hover.PNG");
};

const hoverOut = () => {
  $("#logo").attr("src", "../assets/images/logo.PNG");
};

const handleLoad = () => {
  constructSearchPlant(searchOptions);
  // const accordions = bulmaAccordion.attach();
  // add a event listener submit to get the input value
  $("#search-form").on("submit", handleSearch);

  $(".navbar-logo").hover(hoverIn, hoverOut);
};

$(document).ready(handleLoad);
