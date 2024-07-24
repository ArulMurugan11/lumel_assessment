#Sales app

*Install the node modules by using npm install or yarn

*Start the server by using yarn start or npm start command
*Make sure to define database details in .env file

for Example .env

HOST=localhost
PORT=4000
DB_NAME=your db Name
DB_USR_NAME=db userName
DB_PASS=db password
DB_PORT=db port
DATABASE_DIALECT=mysql
---------------------------------------------------------------------------------------
DATABASE SCHEMA

Tables:
1.Customer
FIELDS---------
        customer_id
        customerName
        customer_email
        customer_address

2.Order
FIELDS---------
        order_id
        date_of_sale
        shipping_cost
        Payment_method
        customer_id
        product_id


3.Product
FIELDS---------
        product_id
        product_name
        category
        region
        quantity_sold
        unit_price
        discount

-----------------------------------------------------------------------------------------------
API DETAILS


Step 1. Load the csv file to Database, firt you have to call http://localhost:4000/csv/load_file
Step 2. You can test all Other API's With the Base URL of,
http://localhost:4000/customer
http://localhost:4000/product
http://localhost:4000/order
http://localhost:4000/csv