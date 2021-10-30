
//bulma accordion

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

//construct search options
const constructAndAppendSearchOptions = (searchOptions) => {
  const constructDietOption = (eachDiet) => {
    return `<div id="accordion-content-diet" class="accordion-content"><label class="checkbox">
    <input type="checkbox" data-option="diet" id=${eachDiet}>${eachDiet}</input>
  </label></div>
    `;
  };

  const constructIntolerancesOption = (eachIntolerance) => {
    return `<div id="accordion-content-intolerances" class="accordion-content"><label class="checkbox">
    <input type="checkbox" data-option="intolerances" id=${eachIntolerance}>${eachIntolerance}</input>
  </label></div>`;
  };

  const constructCuisinesOption = (eachCuisine) => {
    return `<div id= "accordion-content-cuisines" class="accordion-content"><label class="checkbox">
    <input type="checkbox" data-option="cuisines" id=${eachCuisine}>${eachCuisine}</input>
  </label></div>`;
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

  const searchOptionsContainer = `<article class="accordion is-active">
    <div class="accordion-header toggle">
      <p>Choose your diet...</p>
    </div>
    <div id= "accordion-body" class="accordion-body">
    ${dietOption}
    </div>
  </article>
  <article class="accordion">
    <div class="accordion-header">
      <p>Any Intolerances?...</p>
      <button class="toggle" aria-label="toggle"></button>
    </div>
    <div class="accordion-body">
    ${intolerancesOption}
    </div>
  </article>
  <article class="accordion">
    <div class="accordion-header">
      <p>Choose your Cuisine...</p>
      <button class="toggle" aria-label="toggle"></button>
    </div>
    <div class="accordion-body">
    ${cuisinesOption}
    </div>
  </article>`;

  $("#accordions").append(searchOptionsContainer);
};

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
    console.log(this);
  };
  checkBoxInput.each(callback);
  return options;
};
//get input value from user
const handleSearch = (event) => {
  event.preventDefault();

  const searchInputs = getSearchInputs();

  console.log(searchInputs);

  localStorage.setItem("options", JSON.stringify(searchInputs));

  //change page location
  window.location.assign("../../menu.html");
};

const handleLoad = () => {
  constructAndAppendSearchOptions(searchOptions);

  //bulma accordion
  const accordions = bulmaAccordion.attach();
  // add a event listener submit to get the input value
  $("#search-form").on("submit", handleSearch);

  $(".navbar-logo").hover(hoverIn, hoverOut);
};

$(document).ready(handleLoad);

$(".info-icon").hover(
  function () {
    $(".nutrition-label").attr("class", "nutrition-label displayed");
    console.log("hey");
  },
  function () {
    $(".nutrition-label").removeClass("displayed");
    console.log("bye");
  }
);
