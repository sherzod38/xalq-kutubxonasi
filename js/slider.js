// Posts slick carousel
$(document).ready(function () {
  $(".slider-holder").slick({
    dots: false,
    speed: 1000,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 8000,
    focusOnSelect: false,
    adaptiveHeight: true,
  });
});

// REMOVE CLASS
setTimeout(() => {
  // Slide-1 Texts
  $(".caption > .title").removeClass("rotate-in-down-right");
  $(".caption > .midtitle").removeClass("bounce-in-left-1");
  $(".caption > .subtitle").removeClass("bounce-in-left-2");
  // Slide-1 Images
  $(".img-wrap > .rotate-img-1").removeClass("rotateIn");
  $(".img-wrap > .rotate-img-2").removeClass("rotateIn");
  $(".img-wrap > .rotate-img-3").removeClass("rotateIn");

  // Slide-2 Images
  $(".img-wrap > .slide-img-1").removeClass("slide-in-left");
  $(".img-wrap > .slide-img-2").removeClass("slide-in-down");
  $(".img-wrap > .slide-img-3").removeClass("slide-in-right");
  $(".slider-imgs > .img-shelf").removeClass("slide-in-up");
}, 7000);

// ADD CLASS
setInterval(() => {
  // Slide-1 Texts
  $(".caption > .title").addClass("rotate-in-down-right");
  $(".caption > .midtitle").addClass("bounce-in-left-1");
  $(".caption > .subtitle").addClass("bounce-in-left-2");
  // Slide-1 Images
  $(".img-wrap > .rotate-img-1").addClass("rotateIn");
  $(".img-wrap > .rotate-img-2").addClass("rotateIn");
  $(".img-wrap > .rotate-img-3").addClass("rotateIn");

  // Slide-2 Images
  $(".img-wrap > .slide-img-1").addClass("slide-in-left");
  $(".img-wrap > .slide-img-2").addClass("slide-in-down");
  $(".img-wrap > .slide-img-3").addClass("slide-in-right");
  $(".slider-imgs > .img-shelf").addClass("slide-in-up");
  // REMOVE CLASS
  setTimeout(() => {
    // Slide-1 Texts
    $(".caption > .title").removeClass("rotate-in-down-right");
    $(".caption > .midtitle").removeClass("bounce-in-left-1");
    $(".caption > .subtitle").removeClass("bounce-in-left-2");
    // Slide-1 Images
    $(".img-wrap > .rotate-img-1").removeClass("rotateIn");
    $(".img-wrap > .rotate-img-2").removeClass("rotateIn");
    $(".img-wrap > .rotate-img-3").removeClass("rotateIn");

    // Slide-2 Images
    $(".img-wrap > .slide-img-1").removeClass("slide-in-left");
    $(".img-wrap > .slide-img-2").removeClass("slide-in-down");
    $(".img-wrap > .slide-img-3").removeClass("slide-in-right");
    $(".slider-imgs > .img-shelf").removeClass("slide-in-up");
  }, 7000);
}, 8100)
