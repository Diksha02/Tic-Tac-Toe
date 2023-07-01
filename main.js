let items = document.getElementsByClassName("item");
let itemsArray = [...items];

function markX(selectedItem) {
  let crossMark = document.createElement("img");
  crossMark.src = "./imgs/cross.png";
  crossMark.alt = "cross-mark";
  selectedItem.append(crossMark);
}

function markO(someItem) {
  let circleMark = document.createElement("img");
  circleMark.src = "./imgs/circle.png";
  circleMark.alt = "circle-mark";
  someItem.append(circleMark);
}

function markByComputer() {
  let itemsNotMarked = itemsArray.filter(
    (item) =>
      !(
        item.classList.contains("markedX") || item.classList.contains("markedO")
      )
  );

  if (!itemsNotMarked.length) {
    return;
  }

  index = Math.floor(Math.random() * itemsNotMarked.length);
  markO(itemsNotMarked[index]);
  itemsNotMarked[index].classList.add("markedO");
  let win = isWinner();
  if (win) {
    return announceWinner(win);
  }
}

function isWinner() {
  if (
    (itemsArray[0].classList.contains("markedX") &&
      itemsArray[1].classList.contains("markedX") &&
      itemsArray[2].classList.contains("markedX")) ||
    (itemsArray[3].classList.contains("markedX") &&
      itemsArray[4].classList.contains("markedX") &&
      itemsArray[5].classList.contains("markedX")) ||
    (itemsArray[6].classList.contains("markedX") &&
      itemsArray[7].classList.contains("markedX") &&
      itemsArray[8].classList.contains("markedX")) ||
    (itemsArray[0].classList.contains("markedX") &&
      itemsArray[3].classList.contains("markedX") &&
      itemsArray[6].classList.contains("markedX")) ||
    (itemsArray[1].classList.contains("markedX") &&
      itemsArray[4].classList.contains("markedX") &&
      itemsArray[7].classList.contains("markedX")) ||
    (itemsArray[2].classList.contains("markedX") &&
      itemsArray[5].classList.contains("markedX") &&
      itemsArray[8].classList.contains("markedX")) ||
    (itemsArray[2].classList.contains("markedX") &&
      itemsArray[4].classList.contains("markedX") &&
      itemsArray[6].classList.contains("markedX")) ||
    (itemsArray[0].classList.contains("markedX") &&
      itemsArray[4].classList.contains("markedX") &&
      itemsArray[8].classList.contains("markedX"))
  ) {
    return 1;
  } else if (
    (itemsArray[0].classList.contains("markedX") &&
      itemsArray[1].classList.contains("markedO") &&
      itemsArray[2].classList.contains("markedO")) ||
    (itemsArray[3].classList.contains("markedO") &&
      itemsArray[4].classList.contains("markedO") &&
      itemsArray[5].classList.contains("markedO")) ||
    (itemsArray[6].classList.contains("markedO") &&
      itemsArray[7].classList.contains("markedO") &&
      itemsArray[8].classList.contains("markedO")) ||
    (itemsArray[0].classList.contains("markedO") &&
      itemsArray[3].classList.contains("markedO") &&
      itemsArray[6].classList.contains("markedO")) ||
    (itemsArray[1].classList.contains("markedO") &&
      itemsArray[4].classList.contains("markedO") &&
      itemsArray[7].classList.contains("markedO")) ||
    (itemsArray[2].classList.contains("markedO") &&
      itemsArray[5].classList.contains("markedO") &&
      itemsArray[8].classList.contains("markedO")) ||
    (itemsArray[2].classList.contains("markedO") &&
      itemsArray[4].classList.contains("markedO") &&
      itemsArray[6].classList.contains("markedO")) ||
    (itemsArray[0].classList.contains("markedO") &&
      itemsArray[4].classList.contains("markedO") &&
      itemsArray[8].classList.contains("markedO"))
  ) {
    return 2;
  } else {
    return 0;
  }
}

function announceWinner(score) {
  let message = document.createElement("h1");
  if (score == 1) {
    message.textContent = "You Win!";
    message.style.color = "green";
  } else {
    message.textContent = "You Lose!";
    message.style.color = "red";
  }
  document.getElementById("msg").append(message);
}

itemsArray.forEach((item) => {
  item.addEventListener("click", function () {
    if (!item.childElementCount) {
      markX(item);
      item.classList.add("markedX");
      let win = isWinner();
      if (win) {
        return announceWinner(win);
      }
      setTimeout(markByComputer, 1000);
    }
  });
});
