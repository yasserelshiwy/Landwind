// !html elements
let navBtn = document.querySelector("#nav-btn");
let navList = document.querySelector("#nav-list");
let toggelTheme = document.querySelector("#check");
let changeIcon = document.querySelector(".mode");
let theme = "light";
// ^functions
navBtn.addEventListener("click", function () {
  navList.classList.toggle("hidden");
});
// *evant
toggelTheme.addEventListener("change", function () {
  if (theme == "light") {
    theme = "dark";
    document.documentElement.classList.add("dark");
    changeIcon.classList.remove("fa-moon");
    changeIcon.classList.add("fa-sun");
    changeIcon.classList.remove("text-black");
    changeIcon.classList.add("text-yellow-100");
  } else {
    theme = "light";
    document.documentElement.classList.remove("dark");
    changeIcon.classList.remove("fa-sun");
    changeIcon.classList.add("fa-moon");
    changeIcon.classList.remove("text-yellow-100");
    changeIcon.classList.add("text-black");
  }
});
