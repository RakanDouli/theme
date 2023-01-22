const navItem = document.querySelector(".nav");
const nav_btn = document.querySelector(".hambuger_btn");

nav_btn.addEventListener("click", () => {
  console.log("first");
  navItem.classList.toggle("nav_active");
});
