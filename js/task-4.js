const decrementRef = document.querySelector('button[data-action="decrement"]')
const incrementRef = document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector('#value')

const decrement = () => {
    valueRef.textContent = Number(valueRef.textContent) - 1
} 

const icrement = () => {
    valueRef.textContent = Number(valueRef.textContent) + 1
} 

decrementRef.addEventListener('click', decrement)
incrementRef.addEventListener('click', icrement)