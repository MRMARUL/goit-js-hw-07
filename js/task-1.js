const list = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${list.length}`);

list.forEach((li) => {
  const category = li.querySelector("h2").textContent;
  const listLength = li.querySelectorAll("ul li").length;

  console.log("Category:", category);
  console.log("Element:", listLength);
});
