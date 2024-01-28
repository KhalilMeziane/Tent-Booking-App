# Tent-Booking-App

## Introduction
Tent-Booking-App is full-stack application with a secure JWT login page, CSV file upload for tent bookings, and logic to distribute individual and group bookings to tents. Store bookings with unique tent IDs and calculate the number of tents needed for all sample file bookings.

## Technical Details
### Technology Stack for client-app
- JavaScript - The programming language used for building the app.
- ReactJS - The primary JavaScript library for building user interfaces.
- Vite - A modern front-end build tool that is faster and more efficient compared to traditional build tools like Webpack.
- Chakra-ui - A  react library for ui components.

### Technology Stack for backend-app
Here is a list of the technology stack for a server-app:
- JavaScript: JavaScript is a programming language that is widely used for building web applications. It is the primary language used for writing the backend logic in an Express.js application.
- Node.js: Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side. It provides a number of built-in modules that can be used to build web applications.
- Express.js: Express.js is a lightweight and flexible Node.js web application framework. It provides a simple interface for building web applications and APIs.
- RESTful APIs: Express.js is commonly used to build RESTful APIs. REST stands for Representational State Transfer, which is an architectural style for building web services.
- JWT: JWT (JSON Web Token) is a compact and self-contained mechanism for securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in web applications.

## Folder structure
### client-app
```
└── 📁client-app
    └── index.html
    └── package.json
    └── 📁public
    └── README.md
    └── 📁src
        └── 📁app
            └── App.jsx
            └── 📁providers
                └── index.js
                └── withHelmet.jsx
                └── withRouter.jsx
                └── withUi.jsx
            └── 📁router
                └── index.jsx
                └── protectedRoute.jsx
                └── publicRoute.jsx
        └── main.jsx
        └── 📁pages
            └── 📁login
                └── index.js
                └── 📁ui
                    └── page.jsx
                    └── 📁widgets
            └── 📁notFound
                └── index.js
                └── 📁ui
                    └── page.jsx
            └── 📁tent
                └── index.js
                └── 📁ui
                    └── page.jsx
                    └── 📁widgets
        └── 📁shared
            └── 📁api
            └── constants.js
            └── 📁hooks
            └── 📁ui
    └── vite.config.js
```

### server-app
```
└── 📁server-app
    └── .dockerignore
    └── .env
    └── .eslintrc.json
    └── .gitignore
    └── docker-compose.dev.yaml
    └── docker-compose.prod.yaml
    └── docker-compose.yaml
    └── Dockerfile
    └── package-lock.json
    └── package.json
    └── 📁public
        └── 📁tmp
            └── .gitkeep
    └── 📁src
        └── 📁api
            └── app.js
            └── 📁components
                └── 📁auth
                    └── controller.js
                    └── route.js
                    └── service.js
                └── 📁tent
                    └── controller.js
                    └── route.js
                    └── service.js
            └── 📁docs
                └── apiDoc.js
                └── 📁endpoints
                    └── auth.js
                    └── tent.js
            └── 📁middlewares
                └── auth.js
            └── routes.js
        └── 📁config
            └── index.js
            └── logger.js
            └── storage.js
        └── 📁helpers
            └── hash.js
            └── index.js
            └── jwt.js
        └── main.js
        └── 📁utils
            └── index.js
            └── parseValidationErrors.js
```

## Requirement
- [node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Environment Variables for server-app
```bash
    $ ROOT_EMAIL
    $ ROOT_PASSWORD 
    $ ACCESS_TOKEN_SECRET
    $ ACCESS_TOKEN_EXPIRES_IN
    $ PORT
```

## Project Structure

## How To Use
From your command line, first clone the repository into your local machine:
```bash
    # Clone this repository
    $ git clone https://github.com/MezianeKhalil/Tent-Booking-App
    # Go to the project directory
    $ cd Tent-Booking-App
```

Second run server application using docker:
```bash
    # Go to the server-app folder
    $ cd server-app
    # run app container in development mode
    $ docker-compose -f .\docker-compose.yaml -f .\docker-compose.dev.yaml up -d
    # Or run app container in production mode
    $ docker-compose -f .\docker-compose.yaml -f .\docker-compose.prod.yaml up -d
```
> When updating application's codebase and deploying changes and running server application for Production environment to ensure that the new changes are built and deployed correctly use following command:
```bash
    $ docker-compose -f .\docker-compose.yaml -f .\docker-compose.prod.yaml up -d --build
```

Third run client application:
```bash
    # go to the client-app
    $ cd client-app
    # Then install dependencies of client-app
    $ npm install
    # run client-app
    $ npm run dev
```

# API Documentation

API documentation is available through Swagger UI, providing interactive documentation for exploring and testing our endpoints.

To access the API documentation:

1. **Development Environment:**
   - Visit [Swagger UI](http://localhost:4000/api/documentation).

2. **Production Environment:**
   - Visit [Swagger UI](https://tents.com/api/documentation).

3. **Authentication:**
   - If your API requires authentication, make sure to authenticate using the appropriate credentials before accessing the endpoints.
