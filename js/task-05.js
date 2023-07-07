const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const name = event.target.value;
  nameOutput.textContent = name ? name : "Anonymous";
});
