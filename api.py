from flask import Flask, request, jsonify
from engine.engine import get_best_move

app = Flask(__name__)

@app.route('/get_best_move', methods=['GET'])
def get_best_move_endpoint():
    fen = request.args.get('fen')
    best_move = get_best_move(fen)
    return jsonify(best_move=best_move)
