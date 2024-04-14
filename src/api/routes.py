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
    return generate_sitemap(api)

#Obtenemos todos los usuarios
@api.route('/users', methods=['GET'])
def get_users():

    users = User.query.all()

    response_body = [user.serialize() for user in users]

    return jsonify(response_body), 200

#Creamos un usuario
@api.route('/register', methods = ['POST'])
def crear_usuario():

    #capturo los datos del formulario
    register_data = request.json
    username = register_data.get('username')
    email = register_data.get('email')
    password = request.json.get('password')

#crea una nueva instancia del modelo de usuario y desempaco **register_data
    new_user = User(**register_data) 

    db.session.add(new_user)

    try:
        db.session.commit()
        return jsonify({'message': 'Usuario registrado exitosamente'}),200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'message':'Error al registrar usuarios {}'.format(str(e))}),404



#Obtenemos todos los Tour
@api.route('/tours', methods=['GET'])
def get_tours():

    tours = Tour.query.all()

    response_body = [tour.serialize() for tour in tours]

    return jsonify(response_body), 200

#Obtener un tour en especifico
@api.route('/tours/<int:tour_id>', methods = ['GET'])
def get_OneTour(tour_id):

    tour = Tour.query.get(tour_id)

    if tour:
        serialize_tour = tour.serialize()
        return jsonify(serialize_tour), 200
    else:
        return jsonify({'mesage' : 'Tour no encontrado'}), 400

#Crearemos un Nuevo Tours
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

 # Modificacion de Tour   
@api.route('/tours/<int:tour_id>', methods = ['PUT'])
def actualizacion_tour(tour_id):

    tour = Tour.query.get(tour_id)

    if not tour:
        return jsonify({'message':'Tour No Encontrado'}),404
    
    tour_data = request.json

    if not tour_data:
        return ({'message': 'No se proporcionaron datos para actualizar el tour'}), 400
    
    #actualizar los campos del tour con los nuevos datos

    tour.name = tour_data.get('name',tour.name)
    tour.descripcion = tour_data.get('descripcion', tour.descripcion)
    tour.duracion = tour_data.get ('duracion', tour.duracion)
    tour.precio = tour_data.get ('precio', tour.precio)

    try:
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Error al actualizar el tour: {}'.format(str(e))}), 500

    return jsonify({'message': 'Tour actualizado exitosamente', 'tour': tour.serialize()}), 200

#Eliminamos un tour
@api.route('/tours/<int:tour_id>', methods = ['DELETE'])
def delete_tour(tour_id):

    # encuentra el tour por su id en base de datos
    tour = Tour.query.get(tour_id)

    if tour:
        db.session.delete(tour)
        db.session.commit()
        return jsonify({'message': 'Tour eliminado exitosamente' }), 200
    else:
        return jsonify({'message': 'Tour no encontrado'}),404