"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Quotation, Client, Task, Project
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

 
@api.route('projects', methods=['GET'])
def get_projects():
    try:
        projects = Project.query.all()
        serialized_projects = [project.serialize() for project in projects]

    except Exception as error:
        return jsonify({"msg": f"Error al recuperar proyectos: {error}"}), 500

    response = {
        "msg": "Completado",
        "projects": serialized_projects
    }

    return jsonify(response), 200


@api.route('/project/<int:project_id>', methods=['GET'])
def get_project_details(project_id):
    try:
        project = Project.query.get(project_id)
        if not project:
            return jsonify({"msg": "El proyecto no se encontró"}), 404
        return jsonify({"project": project.serialize()}), 200
    except Exception as error:
        return jsonify({"msg": f"Error al recuperar el proyecto: {error}"}), 500


@api.route('/project/create', methods=['POST'])
def create_project():
    body = request.get_json(silent=True)

    if body is None:
        return jsonify({
            "msg": "La petición requiere que envíes un Json"
        })
    required_fields = ["client_id", "name",
                       "description", "Date", "deadline", "hour_price"]
    for field in required_fields:
        if field not in body:
            return jsonify({"msg": f"El campo {field} es requerido"})

    try:
        project = Project(
            name=body["name"],
            description=body["description"],
            Date=datetime.date.fromisoformat(body["Date"]),
            deadline=datetime.date.fromisoformat(
                body["deadline"]) if body.get("deadline") else None,
            hour_price=body["hour_price"]
        )
        db.session.add(project)
        db.session.commit()

        return jsonify({
            "msg": "Se ha creado el proyecto con éxito",
            "project_id": project.id
        })

    except Exception as error:
        db.session.rollback()
        return jsonify(error.args), 500


@api.route('/project/<int:project_id>', methods=['DELETE'])
def delete_project(project_id):
    try:
        project = Project.query.get(project_id)

        if not project:
            return jsonify({"msg": "El proyecto no se encontró"}), 404

        db.session.delete(project)
        db.session.commit()

    except Exception as error:
        db.session.rollback()
        return jsonify({"msg": f"Error al eliminar el proyecto: {error}"}), 500

    return jsonify({"msg": "Proyecto eliminado con éxito"}), 200


@api.route('/project/<int:project_id>', methods=['PUT'])
def edit_project(project_id):
    body = request.get_json(silent=True)

    if body is None:
        return jsonify({
            "msg": "La petición requiere que envíes un Json"
        }), 400

    project = Project.query.get(project_id)
    if not project:
        return jsonify({
            "msg": "El proyecto no existe"
        }), 404

    def parse_date_inline(date_str):
        try:
            return datetime.datetime.strptime(date_str, '%a, %d %b %Y %H:%M:%S %Z').date()
        except ValueError:
            return datetime.datetime.strptime(date_str, '%Y-%m-%d').date()

    fields_to_update = ["client_id", "name",
                        "description", "Date", "deadline", "hour_price"]
    for field in fields_to_update:
        if field in body:
            if field == "Date" or field == "deadline":
                date_value = parse_date_inline(body[field])
                setattr(project, field, date_value)
            else:
                setattr(project, field, body[field])

    try:
        db.session.commit()
        return jsonify({
            "msg": "El proyecto ha sido actualizado con éxito"
        }), 200

    except Exception as error:
        db.session.rollback()
        return jsonify({"msg": f"Error al actualizar el proyecto: {error}"}), 500
