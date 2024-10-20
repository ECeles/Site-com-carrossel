let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = container.querySelector(".list");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

btnNext.onclick = () => moveItemsOnClick("next");
btnBack.onclick = () => moveItemsOnClick("back");

function moveItemsOnClick(type) {
  let listItems = document.querySelectorAll(".list .listitems");
  let thumbItems = document.querySelectorAll(".thumb .thumbitems");

  if (type === "next") {
    list.appendChild(listItems[0]);
    thumb.appendChild(thumbItems[0]);
  } else {
    list.prepend(listItems[listItems.length - 1]);
    thumb.prepend(thumbItems[listItems.length - 1]);
  }
}
