const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

const itemRef = categoriesRef.querySelectorAll('.item');
const elemItem = item => {
    const headName = item.querySelector('h2');
    const lengthElem = item.querySelectorAll('ul li');
    console.log(`Катигория: ${headName.textContent}
    Количество элементов: ${lengthElem.length}`);
};
console.log(itemRef.forEach(item => elemItem(item)));