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


// search

const getSearchInput = document.querySelector("#search");

getSearchInput.addEventListener("input", (event) => {
  console.log(event.target.value); // Logs the current input value
});


// Testing

const birthYear = 1992

const age = (birthYear) => {
  birthYear = 2025 - birthYear
  console.log(`hello sir you are ${birthYear} years old`)
};

age(birthYear) // Call the correct function
