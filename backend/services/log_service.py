from sqlalchemy.orm import Session
from models.logModel import LogModel

#post
def create_log(db: Session, log: LogModel):
    db_log = LogModel(**log.dict())
    db.add(db_log)
    db.commit()
    db.refresh(db_log)
    return db_log

#get
def get_log(db: Session, log_id: int):
    return db.query(LogModel).filter(LogModel.id == log_id).first()

def get_logs(db: Session):
    return db.query(LogModel).all()

def get_log_by_name(db: Session, name: str):
    return db.query(LogModel).filter(LogModel.name == name).first()

#put
def update_log(db: Session, log_id: int, log: LogModel):
    db.query(LogModel).filter(LogModel.id == log_id).update(log.dict())
    db.commit()
    return db.query(LogModel).filter(LogModel.id == log_id).first()

#delete
def delete_log(db: Session, log_id: int):
    db.query(LogModel).filter(LogModel.id == log_id).delete()
    db.commit()
    return "O registro " + str(log_id) + " foi deletado com sucesso!"

