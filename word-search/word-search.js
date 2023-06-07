const words = [
    'birthday',
    'wish',
    'balloon',
    'party',
    'beer',
    'cake',
    'ribbons',
    'music',
    'dance',
    'treat',
    'candle'
  ];
  
  const grid = [
    ['w', 'y', 'p', 'r', 'g', 'i', 'r', 'e', 't', 'a', 'w', 'z', 'e', 'e', 't'],
    ['r', 'r', 'i', 'b', 't', 'e', 'g', 'a', 'p', 'w', 'e', 'f', 'z', 'l', 'e'],
    ['e', 'b', 'y', 'a', 'd', 'h', 't', 'r', 'i', 'b', 'i', 's', 'h', 'd', 'e'],
    ['e', 'k', 'e', 'c', 'e', 'a', 'p', 'u', 's', 't', 'c', 'n', 'a', 'n', 't'],
    ['b', 'i', 'b', 't', 'r', 'e', 'a', 't', 'r', 'e', 'i', 'b', 'a', 'a', 'r'],
    ['e', 'c', 'n', 'b', 'd', 'r', 'r', 'e', 'e', 'a', 's', 'w', 'i', 'c', 'f'],
    ['e', 'b', 'a', 'l', 'h', 's', 'i', 'w', 'e', 'i', 'u', 'e', 'a', 'a', 'e'],
    ['a', 'e', 'b', 'a', 'l', 'o', 'l', 'n', 's', 'e', 'm', 'a', 'e', 'k', 'e'],
    ['b', 'a', 'a', 'e', 'k', 'e', 'a', 'k', 'r', 'i', 'b', 'b', 'o', 'n', 's'],
    ['a', 'a', 'l', 'o', 'd', 'a', 'n', 'c', 'e', 'a', 'e', 'c', 'a', 'a', 'e'],
    ['l', 'e', 'l', 'e', 'a', 'p', 'e', 'p', 'a', 'r', 't', 'a', 'a', 'r', 'w'],
    ['l', 'w', 'o', 'c', 'u', 'r', 'c', 'a', 'e', 'c', 'a', 'k', 't', 'u', 'm'],
    ['o', 'i', 'o', 'a', 'm', 'o', 's', 'r', 'a', 'n', 'c', 'e', 'o', 'n', 'o'],
    ['n', 's', 'n', 'k', 'e', 'e', 'b', 't', 'r', 'a', 'a', 't', 'r', 'a', 'p'],
    ['e', 'e', 'a', 'c', 'a', 'n', 'd', 'y', 'l', 'l', 'a', 'b', 'o', 'o', 'n']
  ];
  
  let selectedCells = [];
let foundWords = [];

function generateWordSearch() {
  const wordSearch = document.getElementById('wordSearch');

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = grid[i][j];
      wordSearch.appendChild(cell);
      cell.addEventListener('mousedown', handleCellMouseDown);
      cell.addEventListener('mouseenter', handleCellMouseEnter);
      cell.addEventListener('mouseup', handleCellMouseUp);
      cell.addEventListener('touchstart', handleCellTouchStart);
      cell.addEventListener('touchmove', handleCellTouchMove);
      cell.addEventListener('touchend', handleCellTouchEnd);
    }
  }
}

function handleCellMouseDown(event) {
  const cell = event.target;
  cell.classList.add('selected');
  selectedCells.push(cell);
}

function handleCellMouseEnter(event) {
  if (event.buttons === 1) {
    const cell = event.target;
    cell.classList.add('selected');
    selectedCells.push(cell);
  }
}

function handleCellMouseUp() {
  const word = getSelectedWord();
  if (word) {
    markSelectedWord(word);
    checkGameCompletion();
  }
  clearSelectedCells();
}

function handleCellTouchStart(event) {
  const cell = event.target;
  cell.classList.add('selected');
  selectedCells.push(cell);
}

function handleCellTouchMove(event) {
  event.preventDefault();
  const touch = event.changedTouches[0];
  const cell = document.elementFromPoint(touch.clientX, touch.clientY);
  if (cell && cell.classList.contains('cell') && !cell.classList.contains('selected')) {
    cell.classList.add('selected');
    selectedCells.push(cell);
  }
}

function handleCellTouchEnd() {
  const word = getSelectedWord();
  if (word) {
    markSelectedWord(word);
    checkGameCompletion();
  }
  clearSelectedCells();
}

function getSelectedWord() {
  const letters = selectedCells.map(cell => cell.textContent).join('');
  const reversedLetters = letters.split('').reverse().join('');

  for (const word of words) {
    if (word === letters || word === reversedLetters) {
      return word;
    }
  }

  return null;
}

function markSelectedWord(word) {
  for (const cell of selectedCells) {
    cell.classList.add('found');
  }
  foundWords.push(word);
}

function clearSelectedCells() {
  for (const cell of selectedCells) {
    cell.classList.remove('selected');
  }
  selectedCells = [];
}

function checkGameCompletion() {
  if (foundWords.length === words.length) {
    const wordSearch = document.getElementById('wordSearch');
    const completionMsg = document.createElement('div');
    completionMsg.classList.add('completion-msg');
    completionMsg.textContent = 'Congratulations! You found all the words!';
    wordSearch.appendChild(completionMsg);
  }
}

generateWordSearch();