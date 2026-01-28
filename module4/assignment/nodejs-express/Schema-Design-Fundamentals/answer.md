## 1. What is schema design and what does a database schema represent?
Schema design means planning the database before actually creating it. In schema design, we decide what tables are needed, what columns each table will have, what type of data will be stored in each column, and how tables are related to each other. A database schema represents the complete structure of the database. It shows how data is organized so that it is easy to store, search, and manage. In simple words, schema design is like making a proper plan so the database works smoothly and data remains clean and organized.

## 2. Why is schema design required before writing backend code?
Schema design is required before writing backend code because backend logic depends on the database structure. If tables and columns are not defined properly, backend code may fail or need frequent changes. A well-designed schema helps developers write clean backend code, reduces errors, and saves time during development.

## 3. How does poor schema design impact data consistency, maintenance, and scalability?
Poor schema design can cause data inconsistency because the same data may be stored in multiple places. It makes maintenance difficult since even small changes require updating many tables. It also affects scalability because as data grows, poorly designed tables become slow and hard to manage.

## 4. What are validations in schema design and why do databases enforce them? (NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)
Validations are rules that control what type of data can be stored in a table. NOT NULL ensures a column cannot be empty, UNIQUE prevents duplicate values, DEFAULT assigns a value automatically, and PRIMARY KEY uniquely identifies each record. Databases enforce these validations to maintain data accuracy, integrity, and reliability.

## 5. What is the difference between a database schema and a database table?
A database schema is the overall structure or design that contains tables and rules, while a database table is where actual data is stored in rows and columns. In simple words, schema is the plan and table is the place where data lives.

## 6. Why should a table represent only one entity?
A table should represent only one entity to avoid data duplication and confusion. If multiple entities are stored in one table, it becomes difficult to update and manage data. Keeping one entity per table makes the database clean, simple, and easy to maintain.

## 7. Why should redundant or derived data be avoided in table design?
Redundant data means storing the same data multiple times, and derived data means storing data that can be calculated. This should be avoided because it wastes storage and can cause inconsistency. For example, storing age instead of calculating it from date of birth can lead to incorrect data later.

## 8. What is the importance of choosing correct data types while designing tables?
Choosing correct data types is important because it improves data accuracy, performance, and storage efficiency. Using proper data types like INTEGER for numbers and DATE for dates helps prevent invalid data and makes the database work faster and more reliably.