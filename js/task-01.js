// Отримуємо елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item у списку ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій
console.log('Number of categories:', categoryItems.length);

// Перебираємо кожен елемент li.item
categoryItems.forEach((item) => {
  // Отримуємо заголовок (текст елемента <h2>)
  const categoryTitle = item.querySelector('h2').textContent;

  // Отримуємо всі елементи <li> у категорії
  const categoryElements = item.querySelectorAll('li');

  // Виводимо назву категорії і кількість елементів у ній
  console.log('Category:', categoryTitle);
  console.log('Elements:', categoryElements.length);
});
