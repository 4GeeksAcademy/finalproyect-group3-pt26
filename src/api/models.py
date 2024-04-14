from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship, declarative_base
from sqlalchemy import create_engine

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "username" : self.username,
            "email": self.email
        }
    
class Hotel(db.Model):
    __tablename__ = 'hotel'
    id= db.Column(db.Integer, primary_key = True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(250),nullable = False)
    duracion = db.Column(db.String(250),nullable = False)
    precio = db.Column(db.Float,nullable = False)

    def __init__(self,name,descripcion,duracion,precio):

        self.name = name
        self.descripcion = descripcion
        self.duracion = duracion
        self.precio = precio
        

    def __repr__(self):
        return f'<Hotel name: {self.name} >'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "descripcion" : self.descripcion,
            "duracion": self.duracion,
            "precio": self.precio
        }
    
class Tour(db.Model):
    __tablename__ = 'tour'
    id= db.Column(db.Integer, primary_key = True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    descripcion = db.Column(db.String(250),nullable = False)
    duracion = db.Column(db.String(250),nullable = False)
    precio = db.Column(db.Float,nullable = False)

    def __init__(self,name,descripcion,duracion,precio):
        self.name = name
        self.descripcion = descripcion
        self.duracion = duracion
        self.precio = precio
    
    def __repr__(self):
        return f'<Tour name:{self.name}>'
    
    def serialize(self):
        return{
            "id":self.id,
            "name": self.name,
            "descripcion": self.descripcion,
            "duracion": self.duracion,
            "precio": self.precio
        }
            
class Paquete(db.Model):
    __tablename__ = 'paquete'
    id= db.Column(db.Integer, primary_key = True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    destino = db.Column(db.String(120), nullable = False)
    descripcion = db.Column(db.String(250),nullable = False)
    duracion = db.Column(db.String(250),nullable = False)
    precio = db.Column(db.Float,nullable = False)
    
    def __init__(self,name,destino,descripcion,duracion,precio):
        self.name = name
        self.destino = destino
        self.descripcion = descripcion
        self.duracion = duracion
        self.precio = precio
    
    def __repr__(self):
        return f'<Paquete name:{self.name}>'
    
    def serialize(self):
        return{
            "id":self.id,
            "name": self.name,
            "destino" : self.destino,
            "descripcion": self.descripcion,
            "duracion": self.duracion,
            "precio": self.precio
        }

class Reservas(db.Model):
    __tablename__= 'reservas'
    id = db.Column(db.Integer,primary_key = True, autoincrement=True)
    fecha_inicio = db.Column(DateTime, nullable=False)
    fecha_final = db.Column(DateTime, nullable=False)

    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = relationship(User , backref = 'todas_reservas')

    id_tour = db.Column(db.Integer, db.ForeignKey('tour.id'))
    tour = relationship(Tour)

    id_paquete = db.Column(db.Integer, db.ForeignKey('paquete.id'))
    paquete = relationship(Paquete)

    id_hotel = db.Column(db.Integer, db.ForeignKey('hotel.id'))
    hotel = relationship(Hotel)

    def __init__(self,fecha_inicio,fecha_final):
        self.fecha_inicio = fecha_inicio
        self.fecha_final = fecha_final
    
    def __repr__(self):
        return f'<Reservas id:{self.id}>'
    
    def serialize(self):
        return{
            "id":self.id,
            "fecha_inicio": self.fecha_inicio,
            "fecha_final": self.fecha_final

        }
