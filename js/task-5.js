function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const coloredBox = document.querySelector(".widget");
const changeColor = document.querySelector(".change-color");
const colorId = document.querySelector(".color");

changeColor.addEventListener("click", function (e) {
  coloredBox.style.backgroundColor = getRandomHexColor();
  colorId.textContent = getRandomHexColor();
});
