from flask import Flask, request

app = Flask(__name__)

@app.route('/your-endpoint', methods=['POST'])
def handle_post():
    data = request.json
    print(data)
    return 'POST request received', 200

if _name_ == '_main_':
    app.run(debug=True)