import { Chess } from "./js/chess.js";
import { fetch } from "./js/utils.js";

async function makeBestMove() {
  const newFEN = await getBestMoveFen(game.fen());
  game.load(newFEN);
  board.position(newFEN);
}

function onDrop(source, target) {
  const move = game.move({
    from: source,
    to: target,
    promotion: "q",
  });
  if (move === null) return "snapback";
  makeBestMove();
}

async function getBestMoveFen(fen) {
  const response = await fetch("/get_best_move_fen?fen=" + fen).then(
    JSON.parse
  );
  return response.new_fen;
}

function onSnapEnd() {
  board.position(game.fen());
}

function onDragStart(source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false;

  // only pick up pieces for White
  if (piece.search(/^b/) !== -1) return false;
}

var config = {
  draggable: true,
  position: "start",
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
  onDragStart: onDragStart,
};

const board = Chessboard("myBoard", config);
const game = new Chess();
console.log(game.fen());
