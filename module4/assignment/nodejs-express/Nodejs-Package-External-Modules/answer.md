a. Package Managers

What is a package manager?

A package manager is a tool that helps us install, update, and manage external libraries (packages) used in a project.

Why do we need a package manager in backend development?

We need a package manager because without a package manager, it is very difficult to run and manage Node.js and Express projects properly. Package manager helps us install required libraries easily. It automatically handles dependencies, manages versions, and gives us ready-made libraries to use in our backend project. Because of this, our work becomes easy and it saves a lot of time.

Problems faced if package managers are not used?

Without a package manager, we cannot properly run Node.js or Express projects. We have to download and handle libraries manually. Version conflicts can happen, a lot of time gets wasted, and the project becomes very hard to manage and share with others.

b. NPM (Node Package Manager)

What is NPM?

NPM is the default package manager of Node.js. It is used to install, update, and manage external packages and libraries needed in a Node.js application.

Why is NPM important for Node.js applications?

NPM is important because it helps us run and manage Node.js applications easily. It allows us to use ready-made libraries like Express, manage package versions, and handle project dependencies properly, which saves time and effort.

How does NPM help in managing dependencies?

NPM automatically installs required dependencies, stores them in the node_modules folder, keeps dependency details in package.json, and locks exact versions using package-lock.json so the project works the same on all systems.

c. Backend Project Initialization

What is the command used to initialize a backend (Node.js) project?

The command used to initialize a backend Node.js project is:
npm init

Explain what npm init and npm init -y do?

npm init is used to initialize a Node.js backend project by asking some basic questions and then creating a package.json file. npm init -y does the same work but without asking any questions; it directly creates the package.json file with default values and helps save time.

d. Files and Folders Created After Project Initialization

package.json

package.json is the main configuration file of the project. It stores project information, dependencies, scripts, and version details. It is very important for running and managing the backend project.

node_modules

node_modules is the folder where all installed packages and libraries are stored. It is automatically created by NPM and it is very large in size.

package-lock.json

package-lock.json stores the exact versions of all installed dependencies. It helps keep the project setup same on all systems and avoids version mismatch issues.

Which files/folders should not be pushed to GitHub and why?

node_modules should not be pushed to GitHub because it is very large and can be recreated anytime by running npm install.

Which files must be committed and why?

package.json must be committed because it tells which dependencies the project needs.
package-lock.json must be committed because it locks dependency versions and ensures the project works the same for everyone.