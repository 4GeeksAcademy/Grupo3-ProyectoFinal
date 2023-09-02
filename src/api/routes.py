"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Quotation
from api.utils import generate_sitemap, APIException
import datetime
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user/quation', methods=['POST'])
def create_quotation():
    user_id = 1
    body = request.get_json(silent=True)

    if body is None:
        return jsonify({
            "msg": "La petición requiere que envíes un Json"
        })
    if "task_name" not in body:
        return jsonify({
            "msg": "El campo task_name es requerido"
        })
    
    if "estimated_time" not in body:
        return jsonify({
            "msg": "El campo estimated_time es requerido"
        })
    if "client_id" not in body:
        return jsonify({
            "msg": "El campo client_id es requerido"
        })

    try:

        quotation = Quotation(task_name=body["task_name"],
                            estimated_time=datetime.time(body["estimated_time"]),
                            client_id=body["client_id"],
                                user_id = user_id)

        db.session.add(quotation)
        db.session.commit()

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500 #Hubo un error del lado del servidor

    return jsonify({
        "msg": "Se ha creado la cotización"
    })