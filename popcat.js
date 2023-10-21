//定義controller 是選哪個class
const controller = document.querySelector(".img-container");

function switchCat(event) {
  let target = event.target;

  if (target.matches(".catClosed")) {
    // Click and count
    const score = target.parentElement.previousElementSibling;
    let scoreNumber = parseInt(score.innerText);
    scoreNumber += 1;
    score.innerText = scoreNumber;
    target.src = "https://popcat.click/img/op.353767c3.png";
    target.classList.remove("catClosed");
    target.classList.add("catOpen");
  }
}

function returnCat(event) {
  let target = event.target;
  if (target.src === "https://popcat.click/img/op.353767c3.png") {
    target.src = "https://popcat.click/img/p.1e9d00be.png";
    target.classList.remove("catOpen");
    target.classList.add("catClosed");
  }
}

controller.addEventListener("mousedown", switchCat);
controller.addEventListener("mouseup", returnCat);
