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
    └── .eslintrc.cjs
    └── .gitignore
    └── index.html
    └── package-lock.json
    └── package.json
    └── 📁public
        └── vite.svg
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
                        └── form.jsx
            └── 📁notFound
                └── index.js
                └── 📁ui
                    └── page.jsx
            └── 📁tent
                └── index.js
                └── 📁ui
                    └── page.jsx
                    └── 📁widgets
                        └── bookingList.jsx
                        └── emptyPreview.jsx
                        └── header.jsx
                        └── index.js
                        └── uploadTents.jsx
        └── 📁shared
            └── 📁api
                └── axios.js
                └── index.js
            └── constants.js
            └── 📁hooks
                └── index.js
                └── usePost.js
            └── 📁ui
                └── 📁alert
                    └── alert.jsx
                    └── index.js
                └── 📁form
                    └── 📁fields
                        └── input.jsx
                    └── form.jsx
                    └── index.js
                └── 📁head
                    └── head.jsx
                    └── index.js
    └── vite.config.js
```

### server-app
```
└── 📁server-app
    └── .env.common
    └── .env.local
    └── .env.prod
    └── .eslintrc.json
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── 📁public
        └── 📁tmp
            └── .gitkeep
            └── 1706388528245-bokkings2.csv
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
    └── todo.txt
```

## Requirement
- [node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Project Structure

## How To Use
From your command line, first clone the repository into your local machine:
```bash
    # Clone this repository
    $ git clone https://github.com/MezianeKhalil/Tent-Booking-App
    # Go to the project directory
    $ cd Tent-Booking-App
    # Go to the server-app
    $ cd server-app
    # Then install dependencies of server-app
    $ npm install
    # Then go back to root project
    # And go to the client-app
    $ cd client-app
    # Then install dependencies of client-app
    $ npm install
```
Next step is run apps

```bash
    # Go to the server-app
    $ cd server-app
    # Then run app in dev mode
    $ npm run start:dev
    # to run app in production mode
    $ npm run start:prod
    # Then in new terminal tab go to the client-app
    $ cd client-app
    # run client-app
    $ npm run dev
```