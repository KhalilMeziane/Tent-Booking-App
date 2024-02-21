# Tent-Booking-App

## Table of Contents
1. [Introduction](#introduction)
2. [Technical Details](#technical-details)
3. [Installation](#installation)
4. [API Documentation](#api-documentation)
5. [User Access Credentials](#user-access-credentials)

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
- JavaScript - The programming language used for building the app.
- Node.js: Node.js is a JavaScript runtime environment that allows developers to run JavaScript on the server-side.
- Express.js: Express.js is a lightweight and flexible Node.js web application framework.
- RESTful APIs: REST stands for Representational State Transfer, which is an architectural style for building web services.
- JWT: is a compact URL-safe means of representing claims to be transferred between two parties.

## Installation
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

## API Documentation

API documentation is available through Swagger UI, providing interactive documentation for exploring and testing our endpoints.

To access the API documentation:

1. **Development Environment:**
   - Visit [Swagger UI](http://localhost:4000/api/documentation).

2. **Authentication:**
   - If your API requires authentication, make sure to authenticate using the appropriate credentials before accessing the endpoints.

## User Access Credentials
```
    email = "root@root.com"
    password = "root" 
```
