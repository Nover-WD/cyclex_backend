import bcrypt from "bcryptjs";


const users = [
    {
        "name": "Admin Admin",
        "email": "admin@gmail.com",
        "password": bcrypt.hashSync("admin", 10),
        "isAdmin": true
    },
    {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "password": bcrypt.hashSync("johndoe", 10),
        "isAdmin": false
    },
    {
        "name": "Jane Doe",
        "email": "janedoe@gmail.com",
        "password": bcrypt.hashSync("janedoe", 10),
        "isAdmin": false
    }
]

export default users;