//Estado del rating seleccionado
let ratingState = 0;

//**DOM**
// 1. Traigo las secciones para alternarlas
const ratingStateSection = document.querySelector(".rating-state-section");
const thankYouStateSection = document.querySelector(".thank-you-state-section");

//2. Traigo los botones 1 2 3 4 5
const ratingButtons = document.querySelectorAll(".rating-btn");

//3. Traigo el botón submit
const ratingSubmitButton = document.querySelector(".rating-submit-button");

//4. Traigo el contenedor de la seleccion
const stateSelectedContainer = document.getElementById("rating-selected");

//**ESCUCHAR Y ACTULIZAR LOS CAMBIOS**


ratingButtons.forEach((btn) => {

  btn.addEventListener("click", (e) => {
// console.log("Evento click en botón de rating:", e.target.dataset.value);
    ratingButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

    e.target.classList.add("active");

    ratingState = e.target.dataset.value;
  });
});

ratingSubmitButton.addEventListener("click", () => {

  if (ratingState > 0) {
    ratingStateSection.classList.add("hidden");
    stateSelectedContainer.textContent = ratingState;
    thankYouStateSection.classList.remove("hidden");
  } else {
    alert("Please select a rating");
  }
});
