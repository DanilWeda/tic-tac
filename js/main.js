// HTML element which we use.
const board = document.getElementById('squares');
const reload = document.getElementById('reload');
let scoreOne = document.getElementById('scoreOne');
let scoreTwo = document.getElementById('scoreTwo');

// massive squares and count for cycle
let squares = [[], [], []];
const howSquareYouNeed = 3;

// function for create element.
function create() {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  return square;
}

// var for check
let x = true;
let checkArray = [[], [], []];
let countTaps = 0;

// cycle which we use for create squares
for (let i = 0; i < howSquareYouNeed; i++) {
  for (let j = 0; j < howSquareYouNeed; j++) {
    squares[i][j] = create();
  }
}

// cycle for add listener
for (let i = 0; i < howSquareYouNeed; i++) {
  for (let j = 0; j < howSquareYouNeed; j++) {
    squares[i][j].addEventListener('click', () => {
      if (x) {
        if (
          squares[i][j].classList.contains('filled') ||
          squares[i][j].classList.contains('null')
        ) {
          alert('Уже заполнен!');
        } else {
          x = false;
          squares[i][j].classList.add('filled');
          checkArray[i][j] = true;
          countTaps++;
          winX();
        }
      } else {
        if (
          squares[i][j].classList.contains('null') ||
          squares[i][j].classList.contains('filled')
        ) {
          alert('Уже заполнен!');
        } else {
          x = true;
          squares[i][j].classList.add('null');
          checkArray[i][j] = false;
          countTaps++;
          winO();
        }
      }
      if (countTaps === 9) {
        reloadAll(squares);
      }
    });
  }
}

//function for score
let scoreX = 0;
let score0 = 0;

function winX() {
  let countDiagonalLeftX = 0;
  let countDiagonalRightX = 0;
  for (let i = 0; i < howSquareYouNeed; i++) {
    let countHorizontal = 0;
    let countVertical = 0;
    for (let j = 0; j < howSquareYouNeed; j++) {
      if (checkArray[i][j] === true) {
        countHorizontal++;
      }
      if (checkArray[j][i] === true) {
        countVertical++;
      }
      if (i === j && checkArray[i][j] === true) {
        countDiagonalLeftX++;
      }
      if (j === howSquareYouNeed - 1 - i && checkArray[i][j] === true) {
        countDiagonalRightX++;
      }
    }

    if (
      countHorizontal === 3 ||
      countVertical === 3 ||
      countDiagonalLeftX === 3 ||
      countDiagonalRightX === 3
    ) {
      alert('X won!');
      scoreX++;
      scoreOne.innerHTML = `X Score - ${scoreX}`;
      reloadAll(squares);
    }
  }
}

function winO() {
  let countDiagonalLeftO = 0;
  let countDiagonalRightO = 0;
  for (let i = 0; i < howSquareYouNeed; i++) {
    let countHorizontal = 0;
    let countVertical = 0;
    for (let j = 0; j < howSquareYouNeed; j++) {
      if (checkArray[i][j] === false) {
        countHorizontal++;
      }
      if (checkArray[j][i] === false) {
        countVertical++;
      }
      if (i === j && checkArray[i][j] === false) {
        countDiagonalLeftO++;
      }
      if (j === howSquareYouNeed - 1 - i && checkArray[i][j] === false) {
        countDiagonalRightO++;
      }
    }
    if (
      countHorizontal === 3 ||
      countVertical === 3 ||
      countDiagonalLeftO === 3 ||
      countDiagonalRightO === 3
    ) {
      alert('0 won!');
      score0++;
      scoreTwo.innerHTML = `0 Score - ${score0}`;
      reloadAll(squares);
    }
  }
}

function reloadAll(sqArray) {
  sqArray.forEach((item) => {
    item.forEach((item) => {
      if (item.classList.contains('filled')) {
        item.classList.remove('filled');
      } else if (item.classList.contains('null')) {
        item.classList.remove('null');
      }
      checkArray = [[], [], []];
      countTaps = 0;
      x = true;
    });
  });
}

reload.addEventListener('click', () => {
  reloadAll(squares);
  scoreX = 0;
  scoreOne.innerHTML = `X Score - ${scoreX}`;
  score0 = 0;
  scoreTwo.innerHTML = `0 Score - ${score0}`;
});
