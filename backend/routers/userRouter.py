from fastapi import APIRouter
from models.userModel import UserModel
from schemas.userSchema import UserBase
from services.user_service import create_user, get_user, get_users, update_user, delete_user

router = APIRouter(prefix="/users", tags=["Users"])

@router.post("/", response_model=UserBase)
async def create_new_user(user: UserBase):
    return create_user(user)

@router.get("/{user_id}", response_model=UserBase)
async def get_single_user(user_id: int):
    return get_user(user_id)

@router.get("/", response_model=list[UserBase])
async def get_all_users(skip: int = 0, limit: int = 100):
    return get_users(skip, limit)

@router.put("/{user_id}", response_model=UserBase)
async def update_single_user(user_id: int, user: UserBase):
    return update_user(user_id, user)

@router.delete("/{user_id}", response_model=int)
async def delete_single_user(user_id: int):
    return delete_user(user_id)

