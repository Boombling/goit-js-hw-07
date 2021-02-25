const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');
const item = (itemList) => {
    const itemElement = document.createElement('li');
    itemElement.textContent = itemList;

    return itemElement;
}
const renderItem = (renderList) => {
    const itemsElements = renderList.map((ingredients) => item(ingredients))
    ingredientsRef.append(...itemsElements)
}
renderItem(ingredients);