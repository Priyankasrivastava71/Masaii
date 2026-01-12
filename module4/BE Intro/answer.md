Role of Frontend (FE):

The Frontend (FE) is the part of a web application that users can see and use.

User Interface (UI):
User interface means the website’s design. It includes buttons, text, headings, input fields, navbar,  colors, layout, and overall look of the website. User interface includes everything which is visible on the screen.

User Interaction:
When the user clicks on buttons, types in an input box, or performs any action on the website ,user interaction happens. Frontend changes are UI according to these actions.

Communication with Backend:
Frontend is like a client and the backend is like a server. When a user clicks a button or perform any action on the website, the frontend sends a request to the backend through an API. The backend then processes the request and sends a response back through the API, and the frontend shows that response to the user.


Role of Backend (BE):

The Backend (BE) is the part of a web application that users cannot see. It works behind the scenes and handles the main logic, data, and security of the application.

Server-side Processing:
Server-side processing means the backend receives requests from the frontend and sends responses back. It works on the client–server model. When the backend receives a request from the frontend, it processes the request, handles the main logic, and gives a response based on the type of request.

Database Handling:
The backend is responsible for database handling. It stores data, retrieves data, updates data, and deletes data from the database. For example, saving user details, login information, addresses, and e-commerce website data or other application data.

Security and Authentication:
The backend manages the security of the application. When a user logs in, the backend checks the user’s information with the data stored in the database. If the information matches, the user is given access; otherwise, an error or alert is shown. The backend also handles authentication and authorization and makes sure that only valid users can access the data.


Business Logic:

Business logic means the deciding part of a web application. When a user clicks a button or sends a request from the frontend, the business logic decides what data should be shown to the user and what response should be given based on that request.
Business logic defines how a web application works and what should happen when a user performs an action. It controls how data is processed, validated, and handled according to business rules. Business logic is usually written in the backend.

Real-World Examples of Business Logic
Login System:
When a user enters an email and password (or username), the business logic checks whether the user information is correct. If it matches the data stored in the database, the user is allowed to log in. If it does not match, an error message or alert is shown.

E-commerce Website:
When a user adds products and places an order, the business logic checks product availability, calculates the total price, applies discounts and taxes, and then confirms the order.

Food Ordering Application:
When a user adds food items to the cart, the business logic checks food availability, calculates the total price, and verifies the delivery address. Based on this information, the order is placed successfully.


Client–Server Model:

The Client–Server Model is a way of communication between the frontend (client) and the backend (server). In this model, the client sends requests and the server sends responses.

Who is the Client:
The client is the frontend part of the application that the user can see and use. It can be a web browser, mobile app, or website. When a user clicks a button, types in an input box, or submits a form, the client sends an HTTP request to the server.

Who is the Server:
The server is the backend part of the application. It receives requests from the client. First, it checks what kind of request it is, then processes the request, applies business logic, accesses the database if needed, and sends a response back to the client.

How Communication Happens:
Communication happens through APIs using HTTP methods. The client sends a request to the server through an API. The server understands the HTTP request, processes it, and returns a response. The client then displays the response to the user.


Three-Tier Architecture:

Three-Tier Architecture is a web application structure where the application is divided into three separate layers. Each layer has its own responsibility, which makes the application easier to manage and maintain.

1. Presentation Layer
The presentation layer is the frontend part of the application that users can see and interact with. It includes buttons, input fields, text, colors, layout, and all user interface elements. In simple words, it is the UI of the application. This layer is important because an attractive and easy-to-use interface helps in better user engagement.

2. Application (Business) Layer
The application layer is the backend logic layer. It receives requests from the presentation layer through APIs. Based on the request, it processes the data, applies business logic, and decides what response should be sent back. This layer acts as a bridge between the frontend and the database.

3. Data Layer
The data layer is responsible for storing and managing data. It includes databases where data is stored, retrieved, updated, and deleted. This layer only handles data-related operations.
Why Three-Tier Architecture Is Used
It separates responsibilities of each layer
It makes the application easier to manage and maintain
It improves security by keeping data separate from the frontend
It provides a clear and organized structure for the application


JavaScript as a Backend Language:

JavaScript is used as a backend language because it can run on the server using an environment like Node.js. Node.js uses the V8 engine from Chrome and libuv to handle asynchronous operations. Because of this, JavaScript backend applications are fast, flexible, and scalable, and JavaScript is widely used for building modern web applications.

Performance:
JavaScript follows an event-driven and non-blocking model. It is single-threaded, but it can handle multiple requests at the same time using asynchronous operations. This makes backend applications fast and efficient, especially for real-time applications.

Ecosystem:
JavaScript has a large ecosystem with many libraries and packages available through npm (Node Package Manager). These packages help developers build backend applications quickly and easily.

Popular Backend Frameworks:
JavaScript has many popular backend frameworks such as Express.js, NestJS, and Fastify. These frameworks make backend development simpler by providing tools for routing, middleware, and API creation.