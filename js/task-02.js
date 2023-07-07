const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.querySelector("#ingredients"); // Вибираємо список ul за його id

// Проходимо по кожному елементу масиву ingredients
ingredients.forEach((ingredient) => {
  const li = document.createElement("li"); // Створюємо елемент <li>
  li.textContent = ingredient; // Додаємо текстовий вміст з назвою інгредієнта
  li.classList.add("item"); // Додаємо клас "item"
  ul.appendChild(li); // Додаємо елемент <li> до списку <ul>
});
