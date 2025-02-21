// function nextMovies(container, scrollDistance) {
//   container.scrollBy({ left: scrollDistance, behavior: "smooth" });
// }

// function previousMovies(container, scrollDistance) {
//   container.scrollBy({ left: -scrollDistance, behavior: "smooth" });
// }

const darkModeToggle = document.querySelector("#temp")
const body = document.querySelector("#body")

darkModeToggle.addEventListener("click", () => {
  console.log("nice")
  body.classList.toggle("dark-mode")
}) 