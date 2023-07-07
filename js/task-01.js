document.addEventListener('DOMContentLoaded', () => {
  // Отримуємо елемент ul#categories
  const categoriesList = document.querySelector('#categories');

  // Отримуємо всі елементи li.item у списку ul#categories
  const categoryItems = categoriesList.children;

  // Виводимо кількість категорій
  console.log('Number of categories:', categoryItems.length);

  // Перебираємо кожен елемент li.item
  for (let i = 0; i < categoryItems.length; i++) {
    const item = categoryItems[i];
    // Отримуємо заголовок (текст елемента <h2>)
    const categoryTitle = item.firstElementChild.textContent;

    // Отримуємо всі елементи <li> у категорії
    const categoryElements = item.lastElementChild.children;

    // Виводимо назву категорії і кількість елементів у ній
    console.log('Category:', categoryTitle);
    console.log('Elements:', categoryElements.length);
  }
});