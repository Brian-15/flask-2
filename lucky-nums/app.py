from flask import Flask, render_template, jsonify, request
from random import random
from urllib.request import urlopen

app = Flask(__name__)

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=["POST"])
def get_lucky_num():
    """Generate luck number into JSON data"""

    user_info = request.json
    errors = {}

    # check for errors
    if not user_info["name"]:
        errors["name"] = ["This field is required."]
    
    if not user_info["email"]:
        errors["email"] = ["This field is required."]
    
    if not (1900 <= int(user_info["year"]) <= 2000):
        errors["year"] = ["Invalid value, must be between 1900 and 2000 (inclusive)."]
    
    if user_info["color"] not in ["red", "green", "orange", "blue"]:
        errors["color"] = ["Invalid value, must be one of: red, green, orange, blue."]

    # no errors found
    if errors == {}:

        num = int(random() * 100)
        year = user_info["year"]

        num_fact = urlopen(f"http://numbersapi.com/{num}").read().decode("ascii")
        year_fact = urlopen(f"http://numbersapi.com/{year}/year").read().decode("ascii")

        return jsonify({
            "num": {
                "fact": num_fact,
                "num": num
            },
            "year": {
                "fact": year_fact,
                "year": year
            }
        })
    else:
        return {"errors": errors}