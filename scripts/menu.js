const menuButton = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu");
const barsIcon = document.querySelector("#bars-icon");
const closeIcon = document.querySelector("#close-icon");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("show");

  if (menuList.classList.contains("show")) {
    barsIcon.classList.remove("show");
    closeIcon.classList.add("show");
  } else {
    barsIcon.classList.add("show");
    closeIcon.classList.remove("show");
  }
});
