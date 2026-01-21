Q1. Why is db.json not suitable as a database for real projects?

db.json is a file-based storage, not a real database. It is okay only for small practice projects.

Performance issue:
When data becomes large, the whole file needs to be read and written again, which makes the app slow.

No concurrency support:
If many users try to access or update data at the same time, the file can get corrupted.

Poor scalability:
It cannot handle large data or high traffic like real-world applications.

Low reliability:
If the server crashes while writing the file, data can be lost.
So, db.json is good for learning and testing, but not for real production projects.

Q2. What are the ideal characteristics of a database system (apart from just storage)?

An ideal database system should have the following qualities:

Performance:
It should read and write data fast even when data size is large.

Concurrency:
Multiple users should be able to access and update data at the same time without conflicts.

Reliability:
Data should remain safe even if the system crashes.

Data Integrity:
Data should always be correct and consistent (no duplicate or wrong data).

Scalability:
The database should handle increasing users and data easily.

Fault Tolerance:
Even if some part of the system fails, the database should still work without losing data.

Q3. How many types of databases are there? What are their use cases?

Mainly, there are two types of databases:

1. Relational Databases
Store data in tables (rows and columns)
Use SQL
Have fixed structure

Use cases:
Banking systems
Student management systems
E-commerce orders and payments

Example: MySQL, PostgreSQL

2. Non-Relational (NoSQL) Databases
Store data in flexible formats (JSON, key-value, etc.)
Good for large and unstructured data

Use cases:
Social media apps
Chat applications
Real-time data and analytics

Example: MongoDB, Firebase

Conclusion:
Use Relational databases when data structure is fixed and consistency is important.
Use NoSQL databases when data is large, flexible, and needs fast access.