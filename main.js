let items = document.getElementsByClassName("item");
let itemsArray = [...items];
let row0 = [itemsArray[0], itemsArray[1], itemsArray[2]];
let row1 = [itemsArray[3], itemsArray[4], itemsArray[5]];
let row2 = [itemsArray[6], itemsArray[7], itemsArray[8]];
let col0 = [itemsArray[0], itemsArray[3], itemsArray[6]];
let col1 = [itemsArray[1], itemsArray[4], itemsArray[7]];
let col2 = [itemsArray[2], itemsArray[5], itemsArray[8]];
let diag0 = [itemsArray[0], itemsArray[4], itemsArray[8]];
let diag1 = [itemsArray[2], itemsArray[4], itemsArray[6]];

function markX(selectedItem) {
  let crossMark = document.createElement("img");
  crossMark.src = "./imgs/cross.png";
  crossMark.alt = "cross-mark";
  selectedItem.append(crossMark);
  selectedItem.dataset.markedx = "1";
}

function markO(someItem) {
  let circleMark = document.createElement("img");
  circleMark.src = "./imgs/circle.png";
  circleMark.alt = "circle-mark";
  someItem.append(circleMark);
}

function returnBoxWithNoX(arr) {
  let result = -1;
  if (!(arr[0].dataset.markedx * 1)) {
    result = arr[0];
  } else if (!(arr[1].dataset.markedx * 1)) {
    result = arr[1];
  } else {
    result = arr[2];
  }

  return result;
}

function istwoInARow() {
  let result = -1;
  if (
    itemsArray[0].dataset.markedx * 1 +
      itemsArray[1].dataset.markedx * 1 +
      itemsArray[2].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(row0);
  } else if (
    itemsArray[3].dataset.markedx * 1 +
      itemsArray[4].dataset.markedx * 1 +
      itemsArray[5].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(row1);
  } else if (
    itemsArray[6].dataset.markedx * 1 +
      itemsArray[7].dataset.markedx * 1 +
      itemsArray[8].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(row2);
  } else if (
    itemsArray[0].dataset.markedx * 1 +
      itemsArray[3].dataset.markedx * 1 +
      itemsArray[6].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(col0);
  } else if (
    itemsArray[1].dataset.markedx * 1 +
      itemsArray[4].dataset.markedx * 1 +
      itemsArray[7].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(col1);
  } else if (
    itemsArray[2].dataset.markedx * 1 +
      itemsArray[5].dataset.markedx * 1 +
      itemsArray[8].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(col2);
  } else if (
    itemsArray[0].dataset.markedx * 1 +
      itemsArray[4].dataset.markedx * 1 +
      itemsArray[8].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(diag0);
  } else if (
    itemsArray[2].dataset.markedx * 1 +
      itemsArray[4].dataset.markedx * 1 +
      itemsArray[6].dataset.markedx * 1 ==
    2
  ) {
    result = returnBoxWithNoX(diag1);
  } else {
    result = -1;
  }

  return result;
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

  let index = Math.floor(Math.random() * itemsNotMarked.length);
  let twoInARow = istwoInARow();
  if (twoInARow == -1) {
    markO(itemsNotMarked[index]);
    itemsNotMarked[index].classList.add("markedO");
  } else {
    loc = twoInARow;
    console.log(loc);
    if (itemsNotMarked.indexOf(loc) != -1) {
      markO(loc);
      loc.classList.add("markedO");
    } else {
      markO(itemsNotMarked[index]);
      itemsNotMarked[index].classList.add("markedO");
    }
  }

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
    (itemsArray[0].classList.contains("markedO") &&
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
      row0 = [itemsArray[0], itemsArray[1], itemsArray[2]];
      row1 = [itemsArray[3], itemsArray[4], itemsArray[5]];
      row2 = [itemsArray[6], itemsArray[7], itemsArray[8]];
      col0 = [itemsArray[0], itemsArray[3], itemsArray[6]];
      col1 = [itemsArray[1], itemsArray[4], itemsArray[7]];
      col2 = [itemsArray[2], itemsArray[5], itemsArray[8]];
      diag0 = [itemsArray[0], itemsArray[4], itemsArray[8]];
      diag1 = [itemsArray[2], itemsArray[4], itemsArray[6]];
    }
  });
});
