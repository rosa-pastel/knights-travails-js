function Board() {
  const board = [[], [], [], [], [], [], [], []];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      board[x][y] = Knight(x, y);
    }
  }
  return board;
}

function Knight(x, y) {
  function moves(board) {
    const x = this.x;
    const y = this.y;
    let moveCoords = [
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 1, y + 2],
      [x - 1, y - 2],
      [x - 2, y + 1],
      [x - 2, y - 1],
    ];
    moveCoords = moveCoords.filter((coord) => {
      return coord[0] >= 0 && coord[1] >= 0 && coord[0] <= 7 && coord[1] <= 7;
    });
    return moveCoords.map((coord) => {
      return board[coord[0]][coord[1]];
    });
  }
  return { x, y, moves };
}

function knightMoves(from, to) {
  const board = Board();
  const destination = { x: to[0], y: to[1] };
  const queue = [{ knight: board[from[0]][from[1]], prev: null }];
  let knight;
  while (queue[0]) {
    knight = queue[0].knight;
    if (knight.x === destination.x && knight.y === destination.y) {
      return printPath(destination, queue[0]);
    }
    knight.moves(board).map((move) => {
      queue.push({ knight: move, prev: queue[0] });
    });
    queue.shift();
  }
}

function printPath(destination, current) {
  let path = [[destination.x, destination.y]];
  while (current.prev) {
    current = current.prev;
    path.unshift([current.knight.x, current.knight.y]);
  }
  let numberOfMoves = path.length - 1;
  if (numberOfMoves === 0) {
    return console.log(`You are already there! Go somewhere else`);
  } else if (numberOfMoves === 1) {
    console.log(`You made it in 1 move!  Here's your path:`);
  } else {
    console.log(`You made it in ${numberOfMoves} moves!  Here's your path:`);
  }
  path.map((move) => {
    console.log(move);
  });
}

module.exports = knightMoves;
