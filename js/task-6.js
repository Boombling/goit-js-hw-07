const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', onInputBlur)
function onInputBlur(event) {
    const valueLength = event.currentTarget.value.length;
    const valueDataLength = Number(inputRef.getAttribute('data-length'));
    if (valueDataLength === valueLength) {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }
    else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
}