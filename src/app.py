"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_mail import Mail, Message
from flask_cors import CORS, cross_origin
#Copiado desde la pag oficial
from flask_jwt_extended import JWTManager


# from models import Persona
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')

app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER']= 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = os.getenv("SMTP_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("SMTP_PASSWORD")
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

mail = Mail(app)

@app.route('/sendemail', methods=['POST'])
def send_email():
    # Obtener los datos del cuerpo de la solicitud
    data = request.json
    nombre = data.get('nombre')
    email = data.get('email')
    mensaje = data.get('mensaje')

    # Construir el correo electrónico personalizado
    sender = os.getenv("SMTP_USERNAME")
    msg = Message(
        subject='Mensaje de {}'.format(nombre),
        sender=sender,
        recipients=['traveloagency24@gmail.com']
    )
    html_body =f'''
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Correo electrónico HTML</title>
            </head>
            <body style="font-family: Arial, sans-serif;">
                <h1>New email from Travelo!</h1>
                <p style="margin-bottom: 10px;">Acabamos de recibir un mensaje de parte de {nombre}:</p>
                <p>{mensaje}</p>
                <p>Puedes responder a este correo electrónico para contactar a {nombre} a la dirección de correo electrónico {email}.</p>
            </body>
            </html>
    '''
    msg.html = html_body
    
    # Enviar el correo electrónico
    mail.send(msg)
    
    return "Message sent!", 200

#importado dsde la pag oficial
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)

app.url_map.strict_slashes = False


# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file


@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
