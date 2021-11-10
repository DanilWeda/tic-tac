// HTML element which we use.
const board = document.getElementById('squares');
const reload = document.getElementById('reload');

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
const checkArray = [];

//click for square
squares.forEach((item) => {
  item.addEventListener('click', () => {
    if (x) {
      x = false;
      item.classList.add('filled');
      indexX(item);
    } else if (x == false) {
      x = true;
      item.classList.add('null');
      indexO(item);
    }
    //check first row
    if (squares[0] === true && squares[1] === true && squares[2] === true) {
      youWin();
    } else if (
      squares[0] === false &&
      squares[1] === false &&
      squares[2] === false
    ) {
      youWin();
    }
    //check second row
    if (squares[3] === true && squares[4] === true && squares[5] === true) {
      youWin();
    } else if (
      squares[3] === false &&
      squares[4] === false &&
      squares[5] === false
    ) {
      youWin();
    }
    //check third row
    if (squares[6] === true && squares[7] === true && squares[8] === true) {
      youWin();
    } else if (
      squares[6] === false &&
      squares[7] === false &&
      squares[8] === false
    ) {
      youWin();
    }
    // check diagonals
    if (squares[2] === true && squares[4] === true && squares[6] === true) {
      youWin();
    } else if (
      squares[2] === false &&
      squares[4] === false &&
      squares[6] === false
    ) {
      youWin();
    }
    /// second
    if (squares[0] === true && squares[4] === true && squares[8] === true) {
      youWin();
    } else if (
      squares[0] === false &&
      squares[4] === false &&
      squares[8] === false
    ) {
      youWin();
    }
  });
});

// function for check
function indexX(item) {
  let index = squares.indexOf(item);
  return (squares[index] = true);
}

function indexO(item) {
  let index = squares.indexOf(item);
  return (squares[index] = false);
}

function youWin() {
  alert('You win!');
}

// reload
