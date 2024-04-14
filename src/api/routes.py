"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tour
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

#     return jsonify(response_body), 200

@api.route('/users', methods= ['GET'])
def get_user():

    all_users = User.query.all()
    # print(len(all_users))

    response_body = [user.serialize() for user in all_users]
    return jsonify(response_body), 200

@api.route('/tours', methods= ['GET'])
def get_tours():
@api.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()

    all_tours = Tour.query.all()
    # print(len(all_users))

    response_body = [user.serialize() for user in all_users]
    response_body = [user.serialize() for user in users]
    print(response_body)
    return jsonify(response_body), 200