from sqlalchemy.orm import Session
from models.userModel import UserModel

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



