exports.login = {
    tags: ['Auth'],
    description: 'login to the system',
    operationId: 'login',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/schemas/LoginBody'
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
                        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvb3RAcm9vdC5jb20iLCJpYXQiOjE3MDYzNzg3NDYsImV4cCI6MTcwODk3MDc0Nn0.FPOd4_gAf6xh2GF86zy_-kJElbRE9m1AIb4heaWUQXI'
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

exports.LoginBody = {
    type: 'object',
    properties: {
        email: {
            type: 'string',
            example: 'root@root.com'
        },
        password: {
            type: 'string',
            example: 'root'
        }
    }
}
