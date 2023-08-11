const program__drop = document.querySelector("program__drop-title");

  const reviews = new Swiper('.reviews__slider', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
    }
  });


$(".program__drop-item > .program__drop-title").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    $(this).siblings(".program__drop-content").slideUp(200);
  } else {
    $(".program__drop-item > .program__drop-title").removeClass("active");
    $(this).addClass("active");
    $(".program__drop-content").slideUp(200);
    $(this).siblings(".program__drop-content").slideDown(200);
  }
});

$(".header__btn-menu").on("click", function () {
  $(".menu").toggleClass("menu--open");
});

class MenuHandler {
  constructor() {
    this.menuTrigger = $("#menu-trigger");

    this.toggleMenu();
  }

  toggleMenu() {
    this.menuTrigger.on("click", () => {
      this.menuTrigger.toggleClass("is-open");
      this.menu.toggleClass("is-open");
    });
  }
}

$(document).ready(function ($) {
  var menuHandler = new MenuHandler(".menu");

  var tx = document.getElementsByTagName("textarea");

  for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
    );

    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = "auto";

    this.style.height = this.scrollHeight + "px";
  }
});
