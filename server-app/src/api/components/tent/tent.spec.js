/* eslint-disable no-undef */
const request = require('supertest')
const { resolve } = require('path')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvb3RAcm9vdC5jb20iLCJpYXQiOjE3MDY0NzE2NDcsImV4cCI6MTcwOTA2MzY0N30.17L6OfTTdCB9WuUWNXTAebtYgDnvk_03tgOhUFx6sgQ'

describe('Tent Module', () => {
    it('should return: successful with tents data', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/validBookings.csv'))
            .expect('Content-Type', /json/)
            .expect(201)
            .then((res) => {
                expect(res.statusCode).toBe(201)
                expect(res._body).toHaveProperty('data')
                expect(res._body.data).toHaveProperty('bookingList')
                expect(res._body.data).toHaveProperty('tents')
            })
    })

    it('should return: No file was uploaded', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res._body).toHaveProperty('error')
                expect(res._body.error).toHaveProperty('message')
                expect(res._body.error.message).toBe('No file was uploaded. Please ensure you include a CSV file in your request')
            })
    })

    it('The uploaded CSV file is missing the following headers', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/invalidHeaderBookings.csv'))
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res._body).toHaveProperty('error')
                expect(res._body.error).toHaveProperty('message')
                expect(res._body.error.message).toBe('The uploaded CSV file is missing the following headers: username, bookingtype. Please ensure the file structure is correct.')
            })
    })

    it('The uploaded CSV file is empty', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/emptyBookings.csv'))
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
                expect(res._body).toHaveProperty('error')
                expect(res._body.error).toHaveProperty('message')
                expect(res._body.error.message).toBe('The uploaded CSV file is empty. Please ensure the file contains data')
            })
    })

    it('File Format Not Supported, only CSV files are supported for upload', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/message.txt'))
            .expect('Content-Type', /json/)
            .expect(415)
            .then((res) => {
                expect(res.statusCode).toBe(415)
                expect(res._body).toHaveProperty('error')
                expect(res._body.error).toHaveProperty('message')
                expect(res._body.error.message).toBe('File Format Not Supported, only CSV files are supported for upload')
            })
    })
})
