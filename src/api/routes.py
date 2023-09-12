"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Quotation
from api.utils import generate_sitemap, APIException
from datetime import time
from sqlalchemy.exc import IntegrityError
api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
def handle_hello():

    
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user/client/quation/create', methods=['POST'])
def create_quotation():

    # TODO: Reemplazar con la lógica de autenticación cuando esté disponible
    user_id = 1

    body = request.get_json(silent=True)
    print(body)
    if body is None:
        return jsonify({"error": "Se esperaba un objeto JSON en la solicitud"}), 400

    if not isinstance(body, list):
        return jsonify({"error": "Se esperaba una lista"}), 400
    
    try:
        for item in body:
            if "id" in item:
                quotation = Quotation.query.get(item["id"])
                if quotation:
                    db.session.delete(quotation)
            else:
                new_quotation = Quotation(
                    task_name=item['task_name'],
                   estimated_time=time(hour=int(item['estimated_time']), minute=0, second=0),
                    user_id=user_id,  
                    client_id=item['client_id']
                )
                print("creando cotizacion")
                db.session.add(new_quotation)
                
        
        db.session.commit()
        return jsonify({"message": "Operaciones realizadas con éxito"}), 200
    
    except IntegrityError as ie:
        db.session.rollback()
        return jsonify({"error": "La clave foránea no coincide. Asegúrate de que el cliente y el usuario existan en sus respectivas tablas."}), 400

    except Exception as error:
        db.session.rollback()
        return jsonify(error), 500


   

   