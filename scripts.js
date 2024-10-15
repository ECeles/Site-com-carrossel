let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb");
let thumbItems = document.querySelectorAll(".thumb .thumbItems");
let listItems = document.querySelectorAll(".list .listItems");

// Função para clique dos botões next e prev
btnNext.onclick = () => moveItemsOnClick("next");
btnPrev.onclick = () => moveItemsOnClick("prev");

// Evento de clique para thumb
thumbItems.forEach((thumbItem, i) => {
  thumbItem.addEventListener("click", function () {
    moveToIndex(i);
  });
});

function moveItemsOnClick(type) {
  listItems = document.querySelectorAll(".list .listItems");
  thumbItems = document.querySelectorAll(".thumb .thumbItems");

  if (type === "next") {
    list.appendChild(listItems[0]);
    thumb.appendChild(thumbItems[0]);
    container.classList.add("next");
  } else {
    list.prepend(listItems[listItems.length - 1]);
    thumb.prepend(thumbItems[thumbItems.length - 1]);
    container.classList.add("back");
  }

  setTimeout(() => {
    container.classList.remove("next");
    container.classList.remove("back");
  }, 2000);
}

// Função para mover ao clicar em um thumbItem
function moveToIndex(targetIndex) {
  listItems = document.querySelectorAll(".list .listItems");
  thumbItems = document.querySelectorAll(".thumb .thumbItems");

  // Obter o índice atual do primeiro item exibido
  let currentFirstIndex = Array.from(listItems).indexOf(list.firstElementChild);

  // Calcular o número de movimentos necessários
  let steps = targetIndex - currentFirstIndex;

  // Se o targetIndex é menor, precisamos girar o carrossel na direção oposta
  if (steps < 0) {
    steps += listItems.length; // Corrige se o índice alvo é menor
  }

  // Mover os itens até o índice correto
  for (let i = 0; i < steps; i++) {
    list.appendChild(listItems[0]); // Mover o primeiro item para o final
    thumb.appendChild(thumbItems[0]); // Mover a miniatura correspondente
  }

  // Mostrar o item clicado
  container.classList.add("next");
  setTimeout(() => {
    container.classList.remove("next");
  }, 1000);
}
