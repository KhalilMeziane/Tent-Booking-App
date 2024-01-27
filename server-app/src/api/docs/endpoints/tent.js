exports.postTents = {
    tags: ['Tent'],
    description: 'Post Tent list',
    operationId: 'post_tents',
    requestBody: {
        content: {
            'multipart/form-data': {
                schema: {
                    $ref: '#/components/schemas/TentsBody'
                }
            }
        },
        required: true
    },
    security: [
        {
            bearerAuth: []
        }
    ],
    responses: {
        201: {
            description: 'Created',
            content: {
                'application/json': {
                    example: {
                        data: {
                            bookingList: [
                                {
                                    id: 'f18534',
                                    username: 'veronikaivy',
                                    bookingType: 'group'
                                },
                                {
                                    id: 'a5a5a1',
                                    username: 'eusebiadorn',
                                    bookingType: 'individual'
                                },
                                {
                                    id: '85b391',
                                    username: 'maricelaangulo',
                                    bookingType: 'individual'
                                }
                            ],
                            tents: 2
                        }
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
                            message: 'Unauthorized'
                        }
                    }
                }
            }
        },
        400: {
            description: 'Bad Request',
            content: {
                'application/json': {
                    schema: {
                        oneOf: [
                            {
                                $ref: '#/components/schemas/EmptyFile'
                            },
                            {
                                $ref: '#/components/schemas/CsvHeaders'
                            },
                            {
                                $ref: '#/components/schemas/NoFile'
                            }
                        ]
                    }
                }
            }
        },
        415: {
            description: 'Unsupported Media Type',
            content: {
                'application/json': {
                    example: {
                        error: {
                            message: 'File Format Not Supported, only CSV files are supported for upload'
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

exports.TentsBody = {
    type: 'object',
    properties: {
        booking: {
            type: 'string',
            format: 'binary'
        }
    }
}

exports.NoFile = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'No file was uploaded. Please ensure you include a CSV file in your request'
        }
    }
}

exports.EmptyFile = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: 'The uploaded CSV file is empty. Please ensure the file contains data'
        }
    }
}

exports.CsvHeaders = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
            example: "The uploaded CSV file must contain headers: 'id', 'user name', and 'booking type'. Please ensure the file structure is correct."
        }
    }
}
