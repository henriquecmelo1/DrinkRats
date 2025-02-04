from fastapi import APIRouter, Depends
from schemas.userSchema import UserBase, User
from services.user_service import create_user, get_user, get_users, update_user, delete_user
from sqlalchemy.orm import Session
from db.database import get_db

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/", response_model=User)
async def create_new_user(user: UserBase, db: Session = Depends(get_db)):
    return create_user(db=db, user=user)

@router.get("/{user_id}", response_model=User)
async def get_single_user(user_id: int, db: Session = Depends(get_db)):
    return get_user(db=db, user_id=user_id)

@router.get("/", response_model=list[User])
async def get_all_users(db: Session = Depends(get_db)):
    return get_users(db=db)

@router.put("/{user_id}", response_model=User)
async def update_single_user(user_id: int, user: UserBase, db: Session = Depends(get_db)):
    return update_user(db=db, user_id=user_id, user=user)

@router.delete("/{user_id}", response_model=str)
async def delete_single_user(user_id: int, db: Session = Depends(get_db)):
    return delete_user(db=db, user_id=user_id)

