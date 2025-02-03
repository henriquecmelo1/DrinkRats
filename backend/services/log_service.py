from sqlalchemy.orm import Session
from models.logModel import Log

#post
def create_log(db: Session, log: Log):
    db_log = Log(**log.dict())
    db.add(db_log)
    db.commit()
    db.refresh(db_log)
    return db_log

#get
def get_log(db: Session, log_id: int):
    return db.query(Log).filter(Log.id == log_id).first()

def get_logs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Log).offset(skip).limit(limit).all()

def get_log_by_name(db: Session, name: str):
    return db.query(Log).filter(Log.name == name).first()

#put
def update_log(db: Session, log_id: int, log: Log):
    db.query(Log).filter(Log.id == log_id).update(log)
    db.commit()
    return db.query(Log).filter(Log.id == log_id).first()

#delete
def delete_log(db: Session, log_id: int):
    db.query(Log).filter(Log.id == log_id).delete()
    db.commit()
    return log_id

