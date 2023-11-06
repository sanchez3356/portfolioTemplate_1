// Wait for the page to finish loading
$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".mobile-menu").toggleClass("open");
    $(".menu-icon .icon").toggleClass("open");
  });

  var slider = tns({
    center: true,
    container: '.slider',
    // items: 1, // Show 2 cards at a time
    slideBy: 2, // Slide by 2 cards
    controls: true, // Show previous and next buttons
    "mouseDrag": true,
    navPosition: 'bottom',
    prevButton: '.prev',
    nextButton: '.next',
    responsive: {
      350: {
        items: 1, // Show 2 cards on screens with a width of 768 pixels or larger (tablets and desktop)
      },
      500: {
        items: 2,
      }
    },
  });

  var slider2 = tns({
    "center": true,
    "container": '.review-slider',
    // items: 1, // Show 2 cards at a time
    "slideBy": 1, // Slide by 2 cards
    "controls": true, // Show previous and next buttons
    "navPosition": 'bottom',
    "mouseDrag": true,
    "prevButton": '.prev2',
    "nextButton": '.next2',
    "responsive": {
      350: {
        "items": 1, // Show 2 cards on screens with a width of 768 pixels or larger (tablets and desktop)
      },
      500: {
        "items": 2,
      }
    },
  });
});
