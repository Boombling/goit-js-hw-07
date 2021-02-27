const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const itemEl = (item) => {
  const itemList = document.createElement('li')
  itemList.textContent = item
  return itemList
}
const element = ingredients.map(itemEl)
ingredientsRef.append(...element)