let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb");

//let items = container.querySelectorAll(".list .item");
//let indicator = document.querySelector(".indicators");
//let dots = indicator.querySelectorAll("ul li");

btnNext.onclick = () => moveItemsOnClick("next");
btnPrev.onclick = () => moveItemsOnClick("prev");

function moveItemsOnClick(type) {
  let listItems = document.querySelectorAll(".list .listItems");
  let thumbItems = document.querySelectorAll(".thumb .thumbItems");

  if (type === "next") {
    list.appendChild(listItems[0]);
    thumb.appendChild(thumbItems[0]);
  } else {
    list.prepend(listItems[listItems.length - 1]);
    thumb.prepend(thumbItems[listItems.length - 1]);
  }

  setTimeout(() => {
    container.classList.add("next");
    container.classList.add("prev");
  }, 2000);
}
