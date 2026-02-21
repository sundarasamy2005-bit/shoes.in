import random
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Buyer database for the animated SalesToast
buyers = [
    {"name": "Madugula", "location": "Telangana, India"},
    {"name": "Rahul", "location": "Kochi, Kerala"},
    {"name": "Ananya", "location": "Mumbai, Maharashtra"},
    {"name": "Kim", "location": "Uttar Pradesh, India"}
]

@app.route('/api/live-activity', methods=['GET'])
def get_activity():
    # Returns random buyer data for the bottom-left glide animation
    return jsonify(random.choice(buyers))

@app.route('/api/recommend', methods=['POST'])
def recommend():
    # Smart Picks logic based on selected size
    data = request.json
    size = data.get('size')
    # Mock AI logic returning shoes for the fade-in RecommendationEngine
    picks = ["Campus Terminator", "Lancer Indus-251", "Sparx SD-90"]
    return jsonify({"picks": picks})

if __name__ == "__main__":
    app.run(port=5001)