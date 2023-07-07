let counterValue = 0;
const valueEl = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

function updateCounter(value) {
  valueEl.textContent = value;
  counterValue = value; // Оновити значення лічильника
}

incrementBtn.addEventListener("click", () => {
  const newValue = counterValue + 1;
  updateCounter(newValue);
});

decrementBtn.addEventListener("click", () => {
  const newValue = counterValue - 1;
  updateCounter(newValue);
});

// Оновити значення лічильника при завантаженні сторінки
updateCounter(counterValue);

