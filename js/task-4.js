const form = document.querySelector(".login-form");
let archives = [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (form.email.value === "" || form.password.value === "") {
    alert("All form fields must be filled in");
    return;
  } else {
    archives.push([
      `Email: ${form.elements.email.value.trim()}`,
      `Password: ${form.elements.password.value.trim()}`,
    ]);
    console.log(archives);
    form.reset();
  }
});
