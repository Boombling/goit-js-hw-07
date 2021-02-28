const sizeContorlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

sizeContorlRef.addEventListener("input", resizes);

function resizes(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}