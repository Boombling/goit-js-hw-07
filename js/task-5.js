const inputRef = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')

    outputRef.textContent = 'незнакомец'

inputRef.addEventListener('input', onInputChange);
function onInputChange(event) {
     event.currentTarget.value
        ? outputRef.textContent = event.currentTarget.value
        : outputRef.textContent = 'незнакомец'
}
