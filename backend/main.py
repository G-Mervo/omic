import uvicorn
from models import User as ModelUser
from schema import User as SchemaUser
from app import app
from db import db

# from database.users import user

# user.Base.metadata.create_all(bind=engine)

# app = FastAPI()
@app.post("/user/")
async def create_user(user: SchemaUser):
    user_id = await ModelUser.create(**user.dict())
    return {"user_id": user_id}

@app.get("/phonecontact/", response_model=SchemaUser)
async def get_all_user():
    user = await ModelUser.get()
    return SchemaUser(**user).dict()

@app.get("/phonecontact/{id}", response_model=SchemaUser)
async def get_user(id: int):
    user = await ModelUser.get(id)
    return SchemaUser(**user).dict()


# @app.get('/phonebook')
# def get_users():
#     phonebook_names ={
#         "first name": "First Name",
#         "second name": "Second Name"
#     }

    