function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const number = Number(input.value);

  boxes.innerHTML = "";

  const box = Array.from({ length: number }, (a, b) => {
    const size = (b + 1) * 10;

    return `<div style="background-color:${getRandomHexColor()};width:${size}px;height:${size}px;"></div>`;
  }).join("");
  boxes.insertAdjacentHTML("beforeend", box);
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
});
