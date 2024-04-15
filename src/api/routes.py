"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Tour, Hotel, Paquete, Reserva
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

#Obtenemos un usuario por su id

@api.route('/users/<int:user_id>', methods=['GET'])
def get_user_profile(user_id):
    user = User.query.get(user_id)

    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({'message': 'Usuario no encontrado'}), 404

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
    
@api.route('/user/<int:user_id>', methods = ['PUT'])
def actualizar_user(user_id):
    
    user = User.query.get(user_id)
    user_data = request.json

    if not user_data:
        return jsonify({'message':'Usuario No Encontrado'}),404


    if not user_data:
        return jsonify({'message':'No se Proporcionaron datos para actualizar el usuario'}), 400
    
    #Actualizo los campos del nuevo tour

    user.username = user_data.get('username',User.username)
    user.email = user_data.get('email',User.email)
    user.password = user_data.get('password', User.password)
    user.is_active = user_data.get('is_active',User.is_active)

    try:
        db.session.commit()
    except Exception as e:
        return jsonify({'message': 'Error al actualizar un Usuario: {}'.format(str(e))}),400
    
    return jsonify({'message': 'Usuario actualizado Exitosamente', 'user':user.serialize()}),200

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


#Hotel
#Obtener todos los alojamientos
@api.route('/accommodations', methods = ['GET'])
def get_accomodations():

    accomodations = Hotel.query.all()

    accomodations_serialized = []
    for hotel in accomodations:
        accomodations_serialized.append(hotel.serialize())

    response_body = {
        "result" : accomodations_serialized
    }

    return jsonify(response_body), 200

#Obtener un alojamiento específico por su ID
@api.route('/accommodation/<int:accommodation_id>', methods=['GET'])
def get_single_accommodation(accommodation_id):

    single_accommodation = Hotel.query.get(accommodation_id)
    if single_accommodation:
        return jsonify({
            "hotel": single_accommodation.serialize()
        }), 200
    else: return jsonify({"msg" : "Hotel not found"}), 404

#Crear un nuevo alojamiento
@api.route('/accommodations', methods=['POST'])
def new_accommodation():

    data = request.json

    if not data: return jsonify({"msg": "Invalid JSON data"}), 400

    new_accommodation = Hotel(**data) #desempaquetado de diccionario y creación de una nueva instancia

    db.session.add(new_accommodation)

    try:
        db.session.commit()
        return jsonify({"msg": "Accommodation created successfully"}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


#Actualizar la información de un alojamiento existente
@api.route('/accommodation/<int:accommodation_id>', methods=['PUT'])
def update_accommodation(accommodation_id):

    data = request.get_json()
    if not data: return jsonify({"msg": "Invalid JSON data"}), 400
    
    hotel = Hotel.query.get(accommodation_id)
    if not hotel: return jsonify({"msg": "Hotel not found"}), 404

    if 'name' in data: hotel.name = data['name']
    if 'descripcion' in data: hotel.descripcion = data['descripcion']
    if 'duracion' in data: hotel.duracion = data['duracion']
    if 'precio' in data: hotel.precio = data['precio']

    try:
        db.session.commit()
        return jsonify({"msg": "Accommodation updated successfully"}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

#Eliminar un alojamiento existente
@api.route('/accommodation/<int:accommodation_id>', methods=['DELETE'])
def delete_accommodation(accommodation_id):

    selected_hotel = Hotel.query.get(accommodation_id)

    if selected_hotel:
        db.session.delete(selected_hotel)
        db.session.commit()
        return jsonify({"msg": f"Hotel {selected_hotel} has been successfully deleted"}), 200
    else:
        return jsonify({"msg": "Hotel not found"}), 404




# AQUI ESTARN LOS ENDPOINTS DE PAQUETES

@api.route('/paquetes', methods=['GET']) # pedir todos los paquetes
def get_all_paquetes():

    todos_los_paquetes = Paquete.query.all()
    response_body = [item.serialize() for item in todos_los_paquetes]
    return jsonify(response_body), 200


@api.route('/paquete/<int:paquete_id>', methods=['GET']) #pedir un paquete en especifico
def get_paquete(paquete_id):
    un_paquete = Paquete.query.get(paquete_id)
    if un_paquete :
        return jsonify(un_paquete.serialize()), 200
    else :
        return jsonify({'msg': 'paquete no encontrado'}), 404
    

@api.route('/paquete', methods=['POST']) #crear un paquete
def crear_paquete():
    data = request.json

    if not data :
        return jsonify({"msg": "formato invalido"}), 400
    nuevo_paquete = Paquete(**data)

    db.session.add(nuevo_paquete)

    try: 
        db.session.commit()
        return jsonify({"msg": "se ha creado un nuevo paquete"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500


@api.route('/paquete/<int:paquete_id>', methods=['PUT']) #modificar un paquete en especifico
def modificar_paquete(paquete_id):
    modificar_pq = Paquete.query.get(paquete_id)
    data = request.get_json()
    if not data :
        return jsonify({"msg": "paquete no encontrado"}), 400
    
    if 'name' in data: modificar_pq.name = data['name']
    if 'destino' in data: modificar_pq.destino = data['destino']
    if 'descripcion' in data: modificar_pq.descripcion = data['descripcion']
    if 'duracion' in data: modificar_pq.duracion = data['duracion']
    if 'precio' in data: modificar_pq.precio = data['precio']

    try:
        db.session.commit()
        return jsonify({"msg": "actualizacion exitosa"}), 200
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@api.route('/paquete/<int:paquete_id>', methods=['DELETE']) # Borrar paquete
def eliminar_paquete(paquete_id):
    paquete = Paquete.query.get(paquete_id)
    if paquete :
        db.session.delete(paquete)
        db.session.commit()
        return jsonify({"msg": "se elimino el paquete"}), 200
    else : 
        return jsonify({"msg": "no se encontro el paquete"}), 404

#FINAL DE ENDPOINT PAQUETES

# @api.route('/reservas', methods=['GET']) # obtener todas las reservas
# def get_reservas():
#     reservas = Reserva.query.all()
#     response_body = [item.serialize() for item in reservas]
#     return jsonify(response_body), 200


# @api.route('/reservas', methods=['GET'])

#











