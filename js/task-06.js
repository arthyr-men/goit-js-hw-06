const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const length = parseInt(input.dataset.length);
  const valueLength = input.value.length;

  if (valueLength === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
