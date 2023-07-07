const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients"); // Вибираємо список ul за його id

// Створюємо розмітку зі списком інгредієнтів
const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");

ul.insertAdjacentHTML("beforeend", markup); // Вставляємо розмітку у список ul
