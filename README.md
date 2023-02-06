# Store.id Backend

<p align='center'>
<img height="150" src="https://github.com/alvinjamal/be-blanja/blob/main/ss/toko.png" />
</p>

# Run Locally

Clone the project

git clone : https://github.com/alvinjamal/be-blanja.git

Go to the project directory

cd be-blanja

Install dependencies

npm install

Start the server

npm run dev

Environment Variables

To run this project, you will need to add the following environment variables to your .env file Start the server
```
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
```
## Users

### Login

POST /users/login

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": {
        "id_user": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
        "name": "Alvin jamal",
        "email": "alvinjamalazkya@gmail.com",
        "phone": "0838161767374",
        "role": "Customer",
        "store": "Vin",
        "date": "23 November 2001",
        "gender": "Laki-Laki",
        "address": "Kp. Godebag Tasikmalaya",
        "photo": "http://res.cloudinary.com/diunwoak6/image/upload/v1675573936/toko/rfjizx1trnapxyq1kj2b.jpg",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiYzI5ZjRhNjgtODg1ZS00NjBmLWE3ZjktNTUyNWZlOWE3M2E5IiwiZW1haWwiOiJhbHZpbmphbWFsYXpreWFAZ21haWwuY29tIiwicm9sZSI6IkN1c3RvbWVyIiwiaWF0IjoxNjc1NTc2Njg3LCJleHAiOjE2NzU1ODAyODd9.kdmoMRj-uAz5Kufb2tMBPg-2X0kmh5YubY7DBLb9h_o"
    },
    "message": "Login Success"
}
```

### Register Seller

```
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
```

### Register Customer

POST /users/register/:role

Body

```
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
```

### Verification Otp

POST /users/verif

Body

```
{
"success": true,
"statusCode": 200,
"data": {
"command": "UPDATE",
"rowCount": 1,
"oid": null,
"rows": [],
"fields": [],
"RowCtor": null,
"rowAsArray": false
},
"message": " verification email success"
}
```

### Forgot

POST /users/forgot

Body

```
{
"success": true,
"statusCode": 200,
"data": {
"email":"alvinjamalazkya@gmail.com",
}
"message": "send email success"
}
```

### Change Password

POST /users/forgort/:token

```Body
{
"success": true,
"statusCode": 200,
"data": {
"email": "alvinjamalazkya@gmail.com",
"password": "$2a$10$MoPh1smj0zZssB2JTyKrhOlmiS2T4Nvvxzkp/XbZeNFa7fCIcpfe".
}
"message": "change password success"
}
```

### Get All User

GET /users/all

```Body
"success": true,
"statusCode": 200,
"data": [
{
   "id_user": "7b3aaf8b-e58f-424a-a9aa-b229e54da730",
   "name": "Alvin Azkya",
   "email": "alvinjamal.azkya@gmail.com",
   "phone": "0852",
   "password": "$2a$10$tSwilP24WkMPwkqSj5jmT.iZPt9Y9U9rqw9pq00njnX.G0yC5qrDa",
   "role": "seller",
   "store": "Outfit Store",
   "date": "23 November 2001",
   "gender": "Laki-Laki",
   "address": "Tasikmalaya Jawa Barat",
   "verif": "1",
   "otp": "666953",
   "photo": "http://res.cloudinary.com/diunwoak6/image/upload/v1675220846/toko/abagjphwujq4twtsa16h.jpg"
},
  {
   "id_user": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
   "name": "Alvin jamal",
   "email": "alvinjamalazkya@gmail.com",
   "phone": "083816767374",
   "password": "$2a$10$MoPh1smj0zZssB2JTyKrhOlmiS2T4Nvvxzkp/XbZeNFa7fCIcpfe.",
   "role": "Customer",
   "store": "undefined",
   "date": "23 November 2001",
   "gender": "Laki-Laki",
   "address": "Kp. Godebag Tasikmalaya",
   "verif": "1",
   "otp": "011197",
   "photo": "http://res.cloudinary.com/diunwoak6/image/upload/v1675220694/toko/r3w7arumtefj8zb1tcz9.png"
  }
 ],
"message": "Success Get User"
}
```

### Get By Id

GET /users/user/:id_user

```
body
{
"success": true,
"statusCode": 200,
"data": [
{
"id_user": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
"name": "Alvin jamal",
"email": "alvinjamalazkya@gmail.com",
"phone": "083816767374",
"password": "$2a$10$MoPh1smj0zZssB2JTyKrhOlmiS2T4Nvvxzkp/XbZeNFa7fCIcpfe.",
"role": "Customer",
"store": "undefined",
"date": "23 November 2001",
"gender": "Laki-Laki",
"address": "Kp. Godebag Tasikmalaya",
"verif": "1",
"otp": "011197",
"photo": "http://res.cloudinary.com/diunwoak6/image/upload/v1675220694/toko/r3w7arumtefj8zb1tcz9.png"
}
],
"message": "Success Get User By Token"
}
```

### Update Profile Customer

PUT /users/profile

Body

```
{
"success": true,
"statusCode": 200,
"data": {
"id_user": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
"name": "Alvin Jamal Azkya",
"email": "alvinjamalazkya@gmail.com",
"phone": "0838161767374",
"gender": "Laki-Laki",
"date": "23 November 2001",
"address": "Tasikmalaya, Jawa Barat"
},
"message": "update data success"
}
```

### Update Profile Seller

PUT /users/seller

Body

```
{
"success": true,
"statusCode": 200,
"data": {
"id_user": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
"store": "Vin",
"email": "alvinjamalazkya@gmail.com",
"phone": "0838161767374"
},
"message": "update data success"
}
```

### Update Photo

PUT /users/edit

Body

```
{
"success": true,
"statusCode": 200,
"data": [
{
"photo": "http://res.cloudinary.com/diunwoak6/image/upload/v1675220694/toko/r3w7arumtefj8zb1tcz9.png"
},
]
"message": "Update Photo Success"
}
```

### Delete User

DELETE /users/:id_user

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": "Delete user success",
    "message": null
}
```

## Products

### Get All

GET /products/

Body

```
{
"success": true,
"statusCode": 200,
"data": [
{
"id_product": 2,
"name_product": "3Second",
"stock": 72,
"price": 65000,
"brand": "Outfit",
"category": "3Second",
"photo": "http://localhost:3500/img/photo-1675290678147.png"
},
{
"id_product": 4,
"name_product": "3Second Black",
"stock": 60,
"price": 65000,
"brand": "Outfit",
"category": "3Second",
"photo": "http://localhost:3500/img/photo-1675783827259.png"
},
{
"id_product": 3,
"name_product": "Baju Polos",
"stock": 26,
"price": 55000,
"brand": "Outfit",
"category": "Baju",
"photo": "http://localhost:3500/img/photo-1675893351454.png"
},
{
"id_product": 6,
"name_product": "Kemeja",
"stock": 60,
"price": 70000,
"brand": "Outfit",
"category": "Baju",
"photo": "http://localhost:3500/img/photo-1675648123729.png"
},
{
"id_product": 17,
"name_product": "Celana Jeans",
"stock": 40,
"price": 70000,
"brand": "Outfit",
"category": "Baju",
"photo": "http://localhost:3500/img/photo-1676208772179.png"
},
{
"id_product": 1,
"name_product": "Baju T-shirt",
"stock": 55,
"price": 75000,
"brand": "Outfit",
"category": "T-shirt",
"photo": "http://localhost:3500/img/photo-1675915194483.png"
}
],
"message": "Get Data Success"
}
```

### Get By Id

GET /products/:id_products

Body

```
{
"success": true,
"statusCode": 200,
"data": [
{
"id_product": 6,
"name_product": "Kemeja",
"stock": 60,
"price": 70000,
"brand": "Outfit",
"category": "Baju",
"photo": "http://localhost:3500/img/photo-1675648123729.png"
}
],
"message": "Get data success"
}
```

### Get By Category

GET /products/:category_id

Body

```
{
"success": true,
"statusCode": 200,
"data": [
{
"id_product": 2,
"name_product": "3Second",
"stock": 72,
"price": 65000,
"brand": "Outfit",
"category": "3Second",
"photo": "http://localhost:3500/img/photo-1675290678147.png"
},
{
"id_product": 4,
"name_product": "3Second Black",
"stock": 60,
"price": 65000,
"brand": "Outfit",
"category": "3Second",
"photo": "http://localhost:3500/img/photo-1675783827259.png"
}
],
"message": "Get Product by Category success"
}
```

### Add Product

POST /products/add

Body

```
{
"success": true,
"statusCode": 200,
"data": {
"name_product": "Hoodie",
"stock": 60,
"price": 90000,
"category_id": "3",
"brand": "Outfit",
"photo": "http://localhost:3500/img/photo-1675782354037.png"
},
"message": "Insert data success"
}
```

### Delete Product

DELETE /products/:id_product

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": "Delete product success",
    "message": null
}
```

## Transactions

### Get All

GET /transaction/

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_transaction": 39,
            "product_id": 4,
            "qty": 2,
            "total": 130000,
            "user_id": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
            "name_product": "3Second Black",
            "photo": "http://localhost:3500/img/photo-1675783827259.png",
            "brand": "Outfit",
            "price": 65000
        }
    ],
    "message": "Get All Transaction Success"
}
```

### Get By Id

GET /transaction/:id_transaction

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_transaction": 39,
            "product_id": 4,
            "qty": 2,
            "total": 130000,
            "user_id": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
            "name_product": "3Second Black",
            "photo": "http://localhost:3500/img/photo-1675783827259.png",
            "brand": "Outfit",
            "price": 65000
        }
    ],
    "message": "Get detail transaction success"
}
```

### Add Transaction

POST /transaction/add

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": {
        "product_id": 1,
        "qty": 2,
        "total": 60000,
        "status": 1
    },
    "message": "Input transaction success"
}
```

### Delete transaction

DELETE /transaction/:id_transaction

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": "Delete Transaction success",
    "message": null
}
```

## Category

### Get All

GET /category/

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_category": 5,
            "name": "Baju",
            "photo": "http://localhost:3500/img/photo-1675537789104.png"
        },
        {
            "id_category": 3,
            "name": "3Second",
            "photo": "http://localhost:3500/img/photo-1674964838093.png"
        },
        {
            "id_category": 4,
            "name": "T-shirt",
            "photo": "http://localhost:3500/img/photo-1675389827181.png"
        }
    ],
    "message": "Get category success"
}
```

### Get By Id

GET /category/:id_category

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_category": 3,
            "name": "3Second",
            "photo": "http://localhost:3500/img/photo-1674964838093.png"
        }
    ],
    "message": "Get detail category success"
}
```

### Add Category

POST /category/add

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_category": 3,
            "name": "3Second",
            "photo": "http://localhost:3500/img/photo-1674964838093.png"
        }
    ],
    "message": "Insert Data Success"
}
```

### Delete Category

DELETE /category/:id_category

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": "Delete Category success",
    "message": null
}
```

## Status

### Get Status

GET /status/

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_status": 1,
            "name_status": "Shipping"
        },
        {
            "id_status": 2,
            "name_status": "Delivery"
        }
    ],
    "message": "Get All Status Success"
}
```

### Add Status

POST /status/add

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_status": 1,
            "name_status": "Shipping"
        }
    ]
    "message":"Insert status success"
}
```

## Checkout

### Get All

GET /checkout/all

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_checkout": 24,
            "transaction_id": 39,
            "product_id": 4,
            "status_id": 2,
            "user_id": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
            "qty": 2,
            "total": 130000,
            "name_product": "3Second Black",
            "price": 65000,
            "photo": "http://localhost:3500/img/photo-1675783827259.png",
            "name_status": "Delivery",
            "name": "Alvin jamal",
            "address": "Kp. Godebag Tasikmalaya"
        }
    ],
    "message": "Get checkout success"
}
```

### Get Chekout Done

GET /checkout/done

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_checkout": 24,
            "transaction_id": 39,
            "product_id": 4,
            "status_id": 2,
            "user_id": "c29f4a68-885e-460f-a7f9-5525fe9a73a9",
            "qty": 2,
            "total": 130000,
            "name_product": "3Second Black",
            "price": 65000,
            "photo": "http://localhost:3500/img/photo-1675783827259.png",
            "name_status": "Delivery",
            "name": "Alvin jamal",
            "address": "Kp. Godebag Tasikmalaya"
        }
    ],
    "message": "Get checkout success"
}
```

### GEt By Id

GET /checkout/:id_checkout

Body

```
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "get checkout success"
}
```

### Add Checkout

POST /checkout/post

Body

```

```
