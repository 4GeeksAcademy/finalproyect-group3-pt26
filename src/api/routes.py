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

@api.route('/users', methods=['GET'])
def handle_hello():

    users = User.query.all()

    response_body = [user.serialize() for user in users]

    return jsonify(response_body), 200