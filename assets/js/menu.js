//carousel options
bulmaCarousel.attach("#carousel", {
  slidesToScroll: 1,
  slidesToShow: 4,
  infinite: true,
  breakpoints: [
    { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
    { changePoint: 640, slidesToShow: 2, slidesToScroll: 2 },
    { changePoint: 768, slidesToShow: 3, slidesToScroll: 3 },
  ],
});

//target images carousel
const carouselContainer = $("#carousel");

//construct and render recipe cards
const renderRecipeCards = (event) => {
  const target = $(event.target);

  //if clicked on an image
  if (target.is("img")) {
    //get image id
    const id = target.attr("id");
  }
};

//add event on carousel container
carouselContainer.on("click", renderRecipeCards);
