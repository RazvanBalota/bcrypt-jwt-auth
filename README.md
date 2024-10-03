# bcrypt-jwt-auth

Simple authentication system using **bcrypt** for password hashing and **JWT** for secure token-based authentication.

## Description

This project implements a simple user authentication system that includes:

- **bcrypt**: For securely hashing and comparing user passwords.
- **JWT**: For issuing and verifying tokens for authenticated sessions.
- **Express**: As the web framework to handle routes and middleware.
- **File Storage**: User data is stored in a JSON file (`users.json`).

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/RazvanBalota/bcrypt-jwt-auth.git
cd bcrypt-jwt-auth
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Running the project

To start the project, run the following command in the terminal:

```bash
cd src
SECRET=<your secret> node app.js
```
Replace ```<your secret>``` with your desired secret key, which is used to sign and verify the JWT tokens.

### License
This project is licensed under the MIT License.