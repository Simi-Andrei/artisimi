//Brand Width
$(function () {
  $(document).scroll(function () {
    var $nav = $("#brand");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 0);
  });
});

//Bulb effect

$(function () {
  $(document).scroll(function () {
    var $bulb = $("#bulb");
    $bulb.toggleClass("scrolled", $(this).scrollTop() > 640);
  });
});

//History appear

$(function () {
  $(document).scroll(function () {
    var $para = $(".para");
    $para.toggleClass("scrolled", $(this).scrollTop() > 650);
  });
});

//Navbar active link

$(document).ready(function () {
  $(".navbar-nav").on("click", "a", function () {
    $(".navbar-nav a.active").removeClass("active");
    $(this).addClass("active");
  });
});
