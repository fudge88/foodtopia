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

// logo hover change
$(document).ready(function () {
  $(".navbar-logo").hover(
    function () {
      $("#logo").attr("src", "../assets/images/logo-hover.PNG");
    },
    function () {
      $("#logo").attr("src", "../assets/images/logo.PNG");
    }
  );
});

//search options arrays
const dieatryOptions = [
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Vegetarian",
  "Ovo-Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
];

const intolerancesOptions = [
  "Dairy",
  "Egg",
  "Gluten",
  "Peanut",
  "Seafood",
  "Sesame",
  "Shellfish",
  "Soy",
  "Sulfite",
  "Tree Nut",
];

const cuisinesOptions = [
  "American",
  "British",
  "Chinese",
  "French",
  "Indian",
  "Italian",
  "Japanese",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Spanish",
  "Thai",
];

//construct the search bar

//get input value from user
const handleSearch = (event) => {
  event.preventDefault();

  const searchInput = $("#search-input").val();

  console.log(searchInput);
};

// add a event listener submit to get the input value
$("#search-form").on("submit", handleSearch);

// Bulma Accordion
//var accordions = bulmaAccordion.attach();
