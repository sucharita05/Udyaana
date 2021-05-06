import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ram Sharma',
        email: 'ram@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Mia Mishra',
        email: 'mishra.mia@yahoo.com',
        password: bcrypt.hashSync('123456', 10)
    }
]


export default users