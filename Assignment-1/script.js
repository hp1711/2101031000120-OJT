const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[main-nav-toggle]");
const title = document.querySelector("[title]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
    elemToggleFunc(title);
  elemToggleFunc(document.body);

});


