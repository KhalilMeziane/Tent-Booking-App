exports.getTent = {
    tags: ['Tent'],
    description: 'Get Tent list',
    operationId: 'get_tents',
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        200: {
            description: 'OK',
            content: {
                'application/json': {
                    example: {
                        tents: [
                            {
                                id: '755',
                                status: 'available'
                            }
                        ]
                    }
                }
            }
        },
        401: {
            description: 'Unauthorized',
            content: {
                'application/json': {
                    example: {
                        error: {
                            status: 401,
                            message: 'Unauthorized'
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
