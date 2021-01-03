from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

# config
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

# login function here
@app.route('/login', methods=['POST'])
def login():
    response_object = {'status': 'success', 'login': 'fail'}
    post_data = request.get_json()
    username = post_data.get('username')
    password = post_data.get('password')
    if username == 'test' and password == 'test':
        print('working')
        response_object['login'] = 'ok'
        response_object['user'] = {'username': 'test', 'type': 'client', 'access': True} 
    return jsonify(response_object)
        



# running app
if __name__ == '__main__':
    app.run()

