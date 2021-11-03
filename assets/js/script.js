const mainContainer = $("#main");

//get input value from user
const handleSearch = (event) => {
  event.preventDefault();

  const searchInputs = getSearchInputs();

  localStorage.setItem("options", JSON.stringify(searchInputs));

  //change page location
  window.location.assign("./menu.html");
};

const handleLoad = () => {
  const onClick = (event) => {
    event.preventDefault();
    const searchInput = $("#search-input").val();
    constructAndAppendModal(searchOptions, searchInput);
    $("#advance-search").on("click", handleSearch);
  };
  $("#filter-toggle").on("click", onClick);

  // add a event listener submit to get the input value
  $("#search-form").on("submit", handleSearch);

  $(".navbar-logo").hover(hoverIn, hoverOut);
};

$(document).ready(handleLoad);

$(".info-icon").hover(
  function () {
    $(".nutrition-label").attr("class", "nutrition-label displayed");
  },
  function () {
    $(".nutrition-label").removeClass("displayed");
  }
);

// $("#filter-toggle").on("click", renderModal);

$(".close-modal").on("click", closeModal);
