from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(20), unique=True, nullable=False)
    full_name = db.Column(db.String(50), unique=False, nullable=False)
    password = db.Column(db.String(20), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    country= db.Column(db.String(15), unique=False, nullable=False)
    about_me= db.Column(db.String(250), unique=False, nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "is_active": self.is_active,

            # do not serialize the password, its a security breach
        }

class Client(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(20), unique=True, nullable=False)
    full_name = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=True)
    description = db.Column(db.String(200), unique=False)
    avatar = db.Column(db.String(200), unique=False)
    address = db.Column(db.String(200), unique=False)
    country = db.Column(db.String(20), unique=False, nullable=False)
    company_name = db.Column(db.String(20), unique=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "full_name": self.full_name,
            "phone": self.phone,
            "description": self.description,
            "avatar": self.avatar,
            "address": self.address,
            "country": self.country,
            "company_name": self.company_name,
            "user_id": self.user_id

            # do not serialize the password, its a security breach
        }
    
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique = False, nullable = False)
    description = db.Column(db.String(200), unique = False)
    Date = db.Column(db.Date, unique = False, nullable = False)
    deadline = db.Column(db.Date, unique = False)
    hour_price = db.Column(db.Numeric, unique = False, nullable = False)

     # relationships (user)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")
     # relationships (client)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
    client = db.relationship("Client")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "Date": self.Date,
            "deadline": self.deadline,
            "hour_price": self.hour_price,
            "user_id": self.user_id,
            "client_id": self.client_id
        }

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique = False, nullable = False)
    state = db.Column(db.String(20), unique = False)
    time = db.Column(db.Time, unique = False, nullable = False)
     # relationships (user)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")
     # relationships (project)
    project_id = db.Column(db.Integer, db.ForeignKey("project.id"))
    project = db.relationship("Project")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "time": self.time,
            "state": self.state,
            "user_id": self.user_id,
            "client_id": self.client_id
        }

class Quotation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task_name = db.Column(db.String(20), unique = False, nullable = False)
    estimated_time = db.Column(db.Time, unique = False, nullable = False)
    # relationships (user)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")

    client_id = db.Column(db.Integer, db.ForeignKey("client.id"))
    client = db.relationship("Client")

    def serialize(self):
        return {
            "id": self.id,
            "task_name": self.task_name,
            "estimated_time": self.estimated_time,
            "user_id": self.user_id,
            "client_id": self.client_id
        }