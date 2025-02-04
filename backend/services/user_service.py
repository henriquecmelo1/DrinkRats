from sqlalchemy.orm import Session
from sqlalchemy import func
from models import UserModel, DrinkModel, LogModel

#post
def create_user(db: Session, user: UserModel):
    db_user = UserModel(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

#get
def get_user(db: Session, user_id: int):
    return db.query(UserModel).filter(UserModel.id == user_id).first()

def get_users(db: Session):
    return db.query(UserModel).all()

def get_user_by_name(db: Session, name: str):
    return db.query(UserModel).filter(UserModel.name == name).first()

#put
def update_user(db: Session, user_id: int, user: UserModel):
    db.query(UserModel).filter(UserModel.id == user_id).update(user.dict())
    db.commit()
    return db.query(UserModel).filter(UserModel.id == user_id).first()

#delete
def delete_user(db: Session, user_id: int):
    name = db.query(UserModel).filter(UserModel.id == user_id).first().name
    db.query(UserModel).filter(UserModel.id == user_id).delete()
    db.commit()
    return "O jogador " + name + " foi deletado com sucesso!"




def update_user_points(db: Session, user_id: int):
    
    total_points = (
        db.query(func.sum(DrinkModel.points)).join(LogModel).filter(LogModel.user_id == user_id).scalar()
    ) or 0

    user = db.query(UserModel).filter(UserModel.id == user_id).first()
    if user:
        user.points = total_points
        db.commit()

