const controlsDiv = document.querySelector("#controls");
const input = controlsDiv.querySelector("input");
const createBtn = controlsDiv.querySelector('[data-create]');
const destroyBtn = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
