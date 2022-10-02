from stockfish import Stockfish
from engine.utils import load_json_as_dict

DEPTH = 18

config = load_json_as_dict('engine/stockfish.config.json')
stockfish = Stockfish(path="engine/stockfish.exe", parameters=config, depth=DEPTH)

def get_best_move_fen(fen):
    if (fen is None): return None
    stockfish.set_fen_position(fen)
    best_move = stockfish.get_best_move()
    stockfish.make_moves_from_current_position([best_move])
    new_fen = stockfish.get_fen_position()
    return new_fen
