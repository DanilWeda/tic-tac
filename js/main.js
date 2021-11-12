// HTML element which we use.
const board = document.getElementById('squares');
const reload = document.getElementById('reload');
let scoreOne = document.getElementById('scoreOne');
let scoreTwo = document.getElementById('scoreTwo');

// massive squares and count for cycle
let squares = [];
const howSquareYouNeed = 9;

// function for create element.
function create() {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  return square;
}

// cycle which we use for create squares
for (let i = 0; i < howSquareYouNeed; i++) {
  squares[i] = create();
}

// var for check
let x = true;
let checkArray = [];

//click for square
squares.forEach((item) => {
  item.addEventListener('click', () => {
    if (x) {
      if (
        item.classList.contains('filled') ||
        item.classList.contains('null')
      ) {
        alert('Уже заполнен!');
        console.log(x);
      } else {
        x = false;
        item.classList.add('filled');
        indexX(item);
      }
    } else if (x == false) {
      if (
        item.classList.contains('null') ||
        item.classList.contains('filled')
      ) {
        alert('Уже заполнен!');
        console.log(x);
      } else {
        x = true;
        item.classList.add('null');
        indexO(item);
      }
    }
    //check first row
    if (
      checkArray[0] === true &&
      checkArray[1] === true &&
      checkArray[2] === true
    ) {
      WinX();
    } else if (
      checkArray[0] === false &&
      checkArray[1] === false &&
      checkArray[2] === false
    ) {
      Win0();
    }
    //check second row
    if (
      checkArray[3] === true &&
      checkArray[4] === true &&
      checkArray[5] === true
    ) {
      WinX();
    } else if (
      checkArray[3] === false &&
      checkArray[4] === false &&
      checkArray[5] === false
    ) {
      Win0();
    }
    //check third row
    if (
      checkArray[6] === true &&
      checkArray[7] === true &&
      checkArray[8] === true
    ) {
      WinX();
    } else if (
      checkArray[6] === false &&
      checkArray[7] === false &&
      checkArray[8] === false
    ) {
      Win0();
    }
    // check diagonals
    if (
      checkArray[2] === true &&
      checkArray[4] === true &&
      checkArray[6] === true
    ) {
      WinX();
    } else if (
      checkArray[2] === false &&
      checkArray[4] === false &&
      checkArray[6] === false
    ) {
      Win0();
    }
    /// second diagonal
    if (
      checkArray[0] === true &&
      checkArray[4] === true &&
      checkArray[8] === true
    ) {
      WinX();
    } else if (
      checkArray[0] === false &&
      checkArray[4] === false &&
      checkArray[8] === false
    ) {
      Win0();
    }
    /// check column first
    if (
      checkArray[0] === true &&
      checkArray[3] === true &&
      checkArray[6] === true
    ) {
      WinX();
    } else if (
      checkArray[0] === false &&
      checkArray[3] === false &&
      checkArray[6] === false
    ) {
      Win0();
    }
    /// check column second
    if (
      checkArray[1] === true &&
      checkArray[4] === true &&
      checkArray[7] === true
    ) {
      WinX();
    } else if (
      checkArray[1] === false &&
      checkArray[4] === false &&
      checkArray[7] === false
    ) {
      Win0();
    }
    /// check column third
    if (
      checkArray[2] === true &&
      checkArray[5] === true &&
      checkArray[8] === true
    ) {
      WinX();
    } else if (
      checkArray[2] === false &&
      checkArray[5] === false &&
      checkArray[8] === false
    ) {
      Win0();
    } else if (checkArray.length == 9) {
      alert('Nobody to won! Reloading.');
      reloads(squares);
    }
  });
});

// function for check
function indexX(item) {
  let index = squares.indexOf(item);
  return (checkArray[index] = true);
}

function indexO(item) {
  let index = squares.indexOf(item);
  return (checkArray[index] = false);
}

//function for score
let scoreX = 0;
let score0 = 0;

function WinX() {
  alert('X is win!');
  scoreX += 1;
  reloads(squares);
  scoreOne.innerHTML = `X Score - ${scoreX}`;
}
function Win0() {
  alert('0 is win!');
  score0 += 1;
  reloads(squares);
  scoreTwo.innerHTML = `0 Score - ${score0}`;
}

// reload

reload.addEventListener('click', () => {
  reloads(squares);
  scoreX = 0;
  scoreOne.innerHTML = `X Score - ${scoreX}`;
  score0 = 0;
  scoreTwo.innerHTML = `0 Score - ${score0}`;
});

// reload function
function reloads(sqArray) {
  sqArray.forEach((item) => {
    if (item.classList.contains('filled')) {
      item.classList.remove('filled');
    } else if (item.classList.contains('null')) {
      item.classList.remove('null');
    }
    checkArray = [];
  });
}
