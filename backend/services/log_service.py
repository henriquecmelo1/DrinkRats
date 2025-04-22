from sqlalchemy.orm import Session
from sqlalchemy import select, func
from collections import defaultdict
from models import *
from .user_service import update_user_points

#post
def create_log(db: Session, log: LogModel):
    db_log = LogModel(**log.dict())
    db.add(db_log)
    db.commit()
    db.refresh(db_log)
    update_user_points(db, log.user_id)
    return db_log

#get
def get_log(db: Session, log_id: int):
    return db.query(LogModel).filter(LogModel.id == log_id).first()


def get_logs_per_user(db: Session, user_id: int):
    consulta = select(DrinkModel.name, LogModel.date, LogModel.time, LogModel.id).join(LogModel).filter(LogModel.user_id == user_id).order_by(LogModel.date.desc(), LogModel.time.desc())
    resultado = db.execute(consulta).all()

    # Formata o resultado em uma lista de dicionários
    logs = []
    for row in resultado:
        logs.append({
            "drinkName": row[0],
            "date": row[1],
            "time": row[2],
            "id": row[3]
        })
    return logs


def get_drinks_per_user(db: Session, user_id: int):
    # todo: usar select para simplicar a consulta
    logs = db.query(LogModel).filter(LogModel.user_id == user_id).all()
    drinks = db.query(DrinkModel).all()

    drink_counts = defaultdict(int)

    # Conta quantas vezes cada bebida aparece nos logs
    for log in logs:
        drink_counts[log.drink_id] += 1

    # Cria a resposta formatada
    result = [
        {
            "drink_id": drink.id,
            "drink_name": drink.name,
            "drink_count": drink_counts[drink.id]  # Se não estiver nos logs, será 0
        }
        for drink in drinks
    ]


    return result



#delete
def delete_last_drink(db: Session, user_id: int, drink_id: int):
    #Pegando o ultimo log do user que o drink de drink_id
    log = db.query(LogModel).filter(LogModel.user_id == user_id).filter(LogModel.drink_id == drink_id).order_by(LogModel.date.desc()).first()
    log_id = log.id
    delete_log(db, log_id)
    return "O registro " + str(log_id) + " foi deletado com sucesso!"


def delete_log(db: Session, log_id: int):
    #Pegando user_id para atualizar os pontos
    log = db.query(LogModel).filter(LogModel.id == log_id).first()
    user_id = log.user_id

    #Deletando o log
    db.query(LogModel).filter(LogModel.id == log_id).delete()
    db.commit()

    #Atualizando os pontos
    update_user_points(db, user_id)

    return "O registro " + str(log_id) + " foi deletado com sucesso!"

