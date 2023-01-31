# Store.id Backend
# Run Locally

Clone the project

https://github.com/alvinjamal/be-blanja.git

Go to the project directory

  cd be-blanja

Install dependencies

  npm install

Start the server

  npm run dev

Environment Variables

To run this project, you will need to add the following environment variables to your .env file Start the server

MAIL_USERNAME=
MAIL_PASSWORD=
OAUTH_CLIENTID=
OAUTH_CLIENT_SECRET=
OAUTH_REFRESH_TOKEN=

DB_USER=
DB_HOST=
DB_NAME=
DB_PASS=
DB_PORT=
JWT_KEY=
HOST=

PHOTO_NAME=
PHOTO_KEY=
PHOTO_SECRET=

#Users
Login

  POST /users/login

Body

#Seller
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id_user": "7b3aaf8b-e58f-424a-a9aa-b229e54da730",
        "name": "Alvin Azkya",
        "email": "alvin.jamalazkya@gmail.com",
        "phone": "082118470511",
        "role": "seller",
        "store": "Outfit",
        "date": "23 November 2001",
        "gender": "Laki-Laki",
        "address": "Tasikmalaya Jawa Barat",
        "photo": "http://res.cloudinary.com/diunwoak6/image/upload/v1675054535/toko/cdxgxysmfjwala6nws1y.jpg",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiN2IzYWFmOGItZTU4Zi00MjRhLWE5YWEtYjIyOWU1NGRhNzMwIiwiZW1haWwiOiJhbHZpbi5qYW1hbGF6a3lhQGdtYWlsLmNvbSIsInJvbGUiOiJzZWxsZXIiLCJpYXQiOjE2NzUxNDczMDYsImV4cCI6MTY3NTE1MDkwNn0.bZKVovYUmygQm2XZceHcL2SDPP6A9XTjZAoloZvD_F0"
    },
    "message": "Login Success"
}

#Customer
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id_user": "cd742b78-1135-42d5-8c5e-6dd4780e9757",
        "name": "Alvin Jamal Azkya",
        "email": "alvinjamalazkya@gmail.com",
        "phone": "08111",
        "role": "customer",
        "store": "undefined",
        "date": "23 November",
        "gender": "laki-laki",
        "address": "Tasikmalaya",
        "photo": null,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiY2Q3NDJiNzgtMTEzNS00MmQ1LThjNWUtNmRkNDc4MGU5NzU3IiwiZW1haWwiOiJhbHZpbmphbWFsYXpreWFAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc1MTQ3NTYyLCJleHAiOjE2NzUxNTExNjJ9.oxpFdfjPIv4EWYCkgrLPy3LKKOLAKgJj_0my8Mc5XVg"
    },
    "message": "Login Success"
}
