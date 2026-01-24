# Q2: Database Relationships

## What is a Database Relationship?

A database relationship means how two or more tables are connected with each other in a database.  
These relationships are created using keys like primary key and foreign key.

In simple words database relationship shows how data in one table is related to data in another table.

Example:  
In an e-commerce website a customer places orders so the customer table is related to the order table.


## Types of Database Relationships

There are mainly three types of database relationships:


### 1. One-to-One Relationship (1:1)

In one-to-one relationship one record in one table is connected to only one record in another table.

Example:  
One user has one profile.  
One employee has one ID card.

Explanation:  
Each user can have only one profile and each profile belongs to only one user.


### 2. One-to-Many Relationship (1:N)

In one-to-many relationship, one record in one table can be related to many records in another table but the second table record is related to only one record.

Example:  
One customer can place many orders.  
One category can have many products.

Explanation:  
A customer can order multiple times, but each order belongs to only one customer.


### 3. Many-to-Many Relationship (M:N)

In many-to-many relationship many records in one table are related to many records in another table.

Example:  
A customer can buy many products.  
A product can be bought by many customers.

Explanation:  
To handle this relationship a separate table is used like an order or order details table.


## E-Commerce Relationship Examples

One-to-One: User and User Profile  
One-to-Many: Customer and Orders  
Many-to-Many: Customers and Products  


