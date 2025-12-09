const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cleanInput = input.value.trim();
    if (cleanInput !== "") {
      const cleanInput = input.value.trim();
      span.textContent = cleanInput;
    } else {
      span.textContent = "Anonymus";
    }
  }
});
