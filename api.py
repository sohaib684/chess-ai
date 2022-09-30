from flask import Flask, render_template, request, jsonify
from engine.engine import get_best_move

app = Flask(
    __name__,
    template_folder = "static"    
)

@app.route("/", methods = ["GET"])
def main_game():
    return render_template("chess-board.html")

@app.route("/get_best_move", methods = ["GET"])
def get_best_move_endpoint():
    fen = request.args.get("fen")
    best_move = get_best_move(fen)
    return jsonify(best_move = best_move)

if __name__ == "__main__":
    app.run(debug = True)
