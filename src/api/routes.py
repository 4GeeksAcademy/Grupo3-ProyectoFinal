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
    # single_client=Client.query.get(body['id'])
    # single_client.name= body['name']
    db.session.commit()
    return jsonify({"msg": "Completado", "clients": serialized_clients}), 200

@api.route('/user/clients', methods=['POST'])
def post_client():
    body = request.get_json(silent=True)
    if body is None:
        raise APIException("Debes enviar información en el body", status_code=400)
    if "full_name" not in body:
        raise APIException("Debes enviar el nombre completo del cliente", status_code=400)
    if "email" not in body:
        raise APIException("Debes enviar el correo electrónico del cliente", status_code=400)
    if "phone" not in body:
        raise APIException("Debes enviar el número de teléfono del cliente", status_code=400)
    if "address" not in body:
        raise APIException("Debes enviar la dirección del cliente", status_code=400)
    if "company_name" not in body:
        raise APIException("Debes enviar el nombre de la empresa del cliente", status_code=400)
    new_client = Client(full_name = body['full_name'], email = body['email'], phone = body['phone'], address = body['address'], company_name = body['company_name'], is_active = True)
    db.session.add(new_client)
    db.session.commit()
    return jsonify({"msg": "Se ha creado el cliente", "new_client_info": new_client.serialize()})

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

@api.route('user/clients', methods=['DELETE'])
def delete_clients(client_id):
    single_client=Client.query.get(client_id)
    if single_client is None:
        raise APIException("El cliente no existe", status_code=400)
    db.session.delete(single_client)
    db.session.commit()
