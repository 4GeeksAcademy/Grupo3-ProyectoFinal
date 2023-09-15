"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Quotation, Client, Task
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

@api.route('/quotation/get', methods=['GET'])
def get_quotations():

    quotations = Quotation.query.all()
    serilized_quotations = list(map(lambda quotation: quotation.serialize(),quotations))
    return jsonify ({"msg":"Completado","quotations":serilized_quotations}),200
    
    # dummy_data = [
    #     {
    #         "name": "Tienda virtual",
    #         "date": "2023-09-10",
    #         "lead_name": "Lead 1",
    #         "total": 100.50
    #     },
    #     {
    #         "name": "Tienda virtual",
    #         "date": "2023-09-11",
    #         "lead_name": "Lead 2",
    #         "total": 200.50
    #     },
    #     {
    #         "name": "Tienda virtual",
    #         "date": "2023-09-12",
    #         "lead_name": "Lead 3",
    #         "total": 150.75
    #     },
    #     {
    #         "name": "Tienda virtual",
    #         "date": "2023-09-13",
    #         "lead_name": "Lead 4",
    #         "total": 220.10
    #     },
    #     {
    #         "name": "Tienda virtual",
    #         "date": "2023-09-14",
    #         "lead_name": "Lead 5",
    #         "total": 300.20
    #     },
    #     {
    #         "name": "Tienda virtual",
    #         "date": "2023-09-15",
    #         "lead_name": "Lead 6",
    #         "total": 400.30
    #     }
    # # ]
    
    # return jsonify({"results": dummy_data}), 200


@api.route('/quation/create', methods=['POST'])
def create_quotation():

    # TODO: Reemplazar con la lógica de autenticación cuando esté disponible
    user_id = 1


    body = request.get_json(silent=True)
    
    if body is None:
        return jsonify({"error": "Se esperaba un objeto JSON en la solicitud"}), 400
    
    if "tasks" not in body:
         return jsonify({"error": "El campo tasks es requerido"}), 400
    
    if "project_proposal_name" not in body:
         return jsonify({"error": "El campo project_proposal es requerido"}), 400
    
    if "lead_name" not in body:
         return jsonify({"error": "El campo lead_name es requerido"}), 400
    
    if "total" not in body:
         return jsonify({"error": "El campo total es requerido"}), 400
    
    try:
        quotation = Quotation(
            project_proposal_name = body["project_proposal_name"],
            lead_name = body["lead_name"],
            total = body["total"],
            user_id = user_id
        )
        
        db.session.add(quotation)  
        db.session.commit()
        tareas = body["tasks"]
        print(tareas)

        for task in body["tasks"]:
            time_object = time(hour=int(task["time"]))
            new_task = Task(
                name = task["name"],
                time = time_object,
                user_id = user_id,
                quotation_id = quotation.id
            ) 
            
            db.session.add(new_task)
            db.session.commit() 

        
        return jsonify({"message": "Operaciones realizadas con éxito"}), 200
    
    except IntegrityError as ie:
        db.session.rollback()
        return jsonify({"error": "La clave foránea no coincide. Asegúrate de que el cliente y el usuario existan en sus respectivas tablas."}), 400

    except Exception as error:
        db.session.rollback()
        return jsonify({"error": "Error de servidor"}), 500

   

   