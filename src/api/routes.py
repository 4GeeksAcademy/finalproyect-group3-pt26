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

@api.route('/')
def sitemap():
    return generate_sitemap(app)

@api.route('/users', methods=['GET'])
def get_users():

    users = User.query.all()

    response_body = [user.serialize() for user in users]

    return jsonify(response_body), 200

@api.route('/tours', methods=['GET'])
def get_tours():

    tours = Tour.query.all()

    response_body = [tour.serialize() for tour in tours]

    return jsonify(response_body), 200

@api.route('/tours/<int:tour_id>', methods = ['GET'])
def get_OneTour(tour_id):

    tour = Tour.query.get(tour_id)

    if tour:
        serialize_tour = tour.serialize()
        return jsonify(serialize_tour), 200
    else:
        return jsonify({'mesage' : 'Tour no encontrado'}), 400
    
@api.route('/tours' ,methods = ['POST'])
def create_Tour():

    tour_data = request.json   #Capturo los datos de mi body

    if not tour_data:

        return({'message' : 'No se proporcionaron los datos para crear el nuevo Tour'})
     
    new_tour = Tour(**tour_data) # desempaquetado de diccionario y creo una nueva instancia

    db.session.add(new_tour)

    try:
          db.session.commit()
    
    except Exception as e:

          # En caso de error, hacer rollback y devolver un mensaje de error
        db.session.rollback()

        return jsonify({'message': 'Error al crear el tour: {}'.format(str(e))}), 500
    
    #devuelvo repuesta con exito
    return jsonify({'message': 'Tour creado exitosamente', 'tour': new_tour.serialize()}), 201
    
@api.routes('/tours/<int:tours_id>', methods = ['GET'])
def actualizacion_tour(tours_id):
    
    pass