const mainContainer = $("#main");

//search options

const renderModal = () => {
  constructModal();
  $(".modal").attr("class", "modal is-active");
};

const closeModal = () => {
  $(".modal").removeClass("is-active");
};
//construct search options
const constructAndAppendSearchOptions = (searchOptions) => {
  const constructDietOption = (eachDiet) => {
    return `<input type="checkbox" data-option="diet" id=${eachDiet}>${eachDiet}</input>`;
  };

  const constructIntolerancesOption = (eachIntolerance) => {
    return `<input type="checkbox" data-option="intolerances" id=${eachIntolerance}>${eachIntolerance}</input>`;
  };

  const constructCuisinesOption = (eachCuisine) => {
    return `<input type="checkbox" data-option="cuisines" id=${eachCuisine}>${eachCuisine}</input>`;
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

  const searchOptionsContainer = `<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <form class="filter" id="filter-form">
      <header class="modal-card-head">
        <p class="modal-card-title">Advance search</p>
        <button class="delete close-modal" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
      <h3>Choose your diet...</h3>
      <label class="checkbox">
      ${dietOption}</label>
      <h3>Any Intolerances?...</h3>
      <label class="checkbox">
        ${intolerancesOption} </label>
      <h3>Choose your Cuisine...</h3>
      <label class="checkbox">
      ${cuisinesOptions}</label>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Search</button>
        <button class="button">Cancel</button>
      </footer>
    </form>
  </div>
</div>
</section>
      `;

  $("#model-container").append(searchOptionsContainer);
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

const onSubmit = (event) => {
  event.preventDefault();
};

const handleLoad = () => {
  constructAndAppendSearchOptions(searchOptions);

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

$("#filter-toggle").on("click", renderModal);
$("#filter-form").on("submit", onSubmit);
$(".close-modal").on("click", closeModal);
