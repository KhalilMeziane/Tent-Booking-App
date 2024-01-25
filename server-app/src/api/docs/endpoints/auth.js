exports.login = {
    tags: ['Auth'],
    description: 'login to the system',
    operationId: 'login',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/loginBody'
                }
            }
        },
        required: true
    },
    responses: {
        200: {
            description: 'Ok',
            content: {
                'application/json': {
                    example: {
                        message: 'login successful',
                        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkOWMwYTU2OC0wMjQ3LTQ5ZDQtOTNiOC04ZGNlODNhOTk3MTkiLCJlbWFpbCI6ImtoYWxpbDQ1OUBnbWFpbC5jb20iLCJpYXQiOjE3MDMwNjA2MTYsImV4cCI6MTcwNTY1MjYxNn0.9ajhZxZudUlMh_LcwCoZ1NM__mmZMSwa6wZ20AJ-p1Q'
                    }
                }
            }
        },
        400: {
            description: 'Bad Request',
            content: {
                'application/json': {
                    example: {
                        error: {
                            status: 400,
                            message: 'Input validation failed',
                            errors: {
                                email: 'email field is required',
                                password: 'password field is required'
                            }
                        }
                    }
                }
            }
        },
        500: {
            description: 'Internal Server Error',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                                example: 'Internal Server Error'
                            }
                        }
                    }
                }
            }
        }
    }
}

exports.loginBody = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            example: 'john.snow@email.com'
        },
        password: {
            type: 'string',
            example: '!1234aWe1Ro3$#'
        }
    }
}
