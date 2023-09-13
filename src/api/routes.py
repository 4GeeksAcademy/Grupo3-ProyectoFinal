"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Client
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Cliente

@api.route('/user/clients', methods = ['GET'])
def get_clients():
    clients = Client.query.all()
    serialized_clients= list(map(lambda x: x.serialize(), clients))
    return jsonify({"msg": "Completado", "clients": serialized_clients}), 200

@api.route('/user/clients', methods=['POST'])
def create_client():
    body = request.get_json(silent=True)

    if body is None:
        return jsonify({"msg": "La petición requiere que envíes un Json"})
    if "full_name" not in body:
        return jsonify({"msg": "El campo full_name es requerido"})
    if "email" not in body:
        return jsonify({"msg": "El campo email es requerido"})
    if "phone" not in body:
        return jsonify({"msg": "El campo phone es requerido"})

    try:
        client = Client(full_name=body["full_name"],
                            email=(body["email"]),
                            phone=body["phone"],
                                user_id = "user_id")

        db.session.add(client)
        db.session.commit()

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 #Hubo un error del lado del servidor

    return jsonify({"msg": "Se ha creado el cliente"})

@api.route('/user/clients', methods=['PUT'])
def modify_clients():
    body = request.get_json(silent = True)
    if "full_name" not in body:
        raise APIException("Debes enviar el nombre completo del cliente a modificar", status_code=400)
    if "email" not in body:
        raise APIException("Debes enviar el correo electrónico del cliente a modificar", status_code=400)
    if "phone" not in body:
        raise APIException("Debes enviar el número de teléfono del cliente a modificar", status_code=400)
    if "address" not in body:
        raise APIException("Debes enviar la dirección del cliente a modificar", status_code=400)
    if "company_name" not in body:
        raise APIException("Debes enviar el nombre de la empresa del cliente a modificar", status_code=400)
    return jsonify({"msg": 'Completed'})