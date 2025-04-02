from sqlalchemy.orm import Session
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

def get_logs(db: Session):
    return db.query(LogModel).all()

def get_logs_per_user(db: Session, user_id: int):
    return db.query(LogModel).filter(LogModel.user_id == user_id).all()

def get_drinks_per_user(db: Session, user_id: int):
    logs = db.query(LogModel).filter(LogModel.user_id == user_id).all()
    drinks = db.query(DrinkModel).all()

    drink_counts = defaultdict(int)

    # Conta quantas vezes cada bebida aparece nos logs
    for log in logs:
        drink_counts[log.drink_id] += 1

    # Cria a resposta formatada
    result = [
        {
            "drink_name": drink.name,
            "drink_count": drink_counts[drink.id]  # Se não estiver nos logs, será 0
        }
        for drink in drinks
    ]

    # Ordena pelo número de consumos (descendente)
    result.sort(key=lambda x: x["drink_name"])

    return result


    
        

    


#put
def update_log(db: Session, log_id: int, log: LogModel):
    #Pegando o user para verificar se houve mudança
    temp = db.query(LogModel).filter(LogModel.id == log_id).first()
    old_user = temp.user_id

    #Atualizando o log
    db.query(LogModel).filter(LogModel.id == log_id).update(log.dict())
    db.commit()

    #Atualizando os pontos
    update_user_points(db, log.user_id)
    if old_user != log.user_id:
        update_user_points(db, old_user)

    return db.query(LogModel).filter(LogModel.id == log_id).first()

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
    update_user_points(db, log.user_id)

    return "O registro " + str(log_id) + " foi deletado com sucesso!"

