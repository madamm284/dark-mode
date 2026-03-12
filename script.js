
// Select the button
const button = document.querySelector("#modebtn");

// Add event listener
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".side-nav").classList.toggle("dark-mode");
});

