let knightMoves = require("./game");
knightMoves([0, 0], [1, 2]);
/*
You made it in 1 move!  Here's your path:
[ 0, 0 ]
[ 1, 2 ]
*/
knightMoves([0, 0], [3, 3]);
/*
You made it in 2 moves!  Here's your path:
[ 0, 0 ]
[ 1, 2 ]
[ 3, 3 ]
*/
knightMoves([3, 3], [0, 0]);
/*
You made it in 2 moves!  Here's your path:
[ 3, 3 ]
[ 2, 1 ]
[ 0, 0 ]
*/
knightMoves([3, 3], [4, 3]);
/*
You made it in 3 moves!  Here's your path:
[ 3, 3 ]
[ 4, 5 ]
[ 6, 4 ]
[ 4, 3 ]
*/
knightMoves([0, 0], [7, 7]);
/*
You made it in 6 moves!  Here's your path:
[ 0, 0 ]
[ 1, 2 ]
[ 2, 4 ]
[ 3, 6 ]
[ 4, 4 ]
[ 5, 6 ]
[ 7, 7 ]
*/
knightMoves([7, 7], [7, 7]);
/*
You are already there! Go somewhere else
*/
