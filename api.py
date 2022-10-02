from flask import Flask, render_template, request, jsonify
from engine.engine import get_best_move_fen

app = Flask(
    __name__,
    template_folder = "static"    
)

@app.route("/", methods = ["GET"])
def main_game():
    return render_template("chess-board.html")

@app.route("/get_best_move_fen", methods = ["GET"])
def get_best_move_endpoint():
    fen = request.args.get("fen")
    new_fen = get_best_move_fen(fen)
    return jsonify(new_fen = new_fen)

if __name__ == "__main__":
    app.run(debug = True)
