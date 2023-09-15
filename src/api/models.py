from flask_sqlalchemy import SQLAlchemy
from datetime import date
db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(20), unique=True, nullable=False)
    name = db.Column(db.String(50), unique=False, nullable=False)
    last_name = db.Column(db.String(50), unique=False, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=True)
    country = db.Column(db.String(15), unique=False, nullable=True)
    about_me = db.Column(db.String(250), unique=False, nullable=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "last_name": self.last_name,
            "phone": self.phone,
            "country": self.country,
            "about_me": self.about_me,

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
    name = db.Column(db.String(20), unique=False, nullable=False)
    description = db.Column(db.String(200), unique=False)
    Date = db.Column(db.Date, unique=False, nullable=False)
    deadline = db.Column(db.Date, unique=False)
    hour_price = db.Column(db.Numeric, unique=False, nullable=False)

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

class Quotation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_proposal_name = db.Column(db.String(50), unique = False, nullable = False)
    lead_name = db.Column(db.String(50), unique = False, nullable = False)
    date = db.Column(db.Date, unique = False, nullable = False, default=date.today())
    total = db.Column(db.String(10),unique = False, nullable = False)
    # relationships (user)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")

    def serialize(self):
        return {
            "id": self.id,
            "project_proposal_name": self.project_proposal_name,
            "lead_name": self.lead_name,
            "date": self.date,
            "total": self.total,
            "user_id": self.user_id,
        }

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique = False, nullable = False)
    time = db.Column(db.Time, unique = False, nullable = False)
     # relationships (user)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    user = db.relationship("User")

    quotation_id = db.Column(db.Integer, db.ForeignKey("quotation.id"))
    quotation = db.relationship("Quotation")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "time": self.time,
            "user_id": self.user_id,
        }