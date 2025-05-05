from sqlalchemy.orm import Session
from models.drinkModel import DrinkModel
from .user_service import update_all_user_points

#post
def create_drink(db: Session, drink: DrinkModel):
    db_drink = DrinkModel(**drink.dict())
    db.add(db_drink)
    db.commit()
    db.refresh(db_drink)
    return db_drink

#get
def get_drinks(db: Session):
    return db.query(DrinkModel).all()


#put
def update_drink(db: Session, drink_id: int, drink: DrinkModel):
    db.query(DrinkModel).filter(DrinkModel.id == drink_id).update(drink.dict())
    db.commit()
    update_all_user_points(db)
    return db.query(DrinkModel).filter(DrinkModel.id == drink_id).first()

#delete
def delete_drink(db: Session, drink_id: int):
    drink = db.query(DrinkModel).filter(DrinkModel.id == drink_id).first().name
    db.query(DrinkModel).filter(DrinkModel.id == drink_id).delete()
    db.commit()
    return "O drink " + drink + " foi deletado com sucesso!"
