/* eslint-disable no-undef */
const request = require('supertest')
const { resolve } = require('path')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvb3RAcm9vdC5jb20iLCJpYXQiOjE3MDY0NzE2NDcsImV4cCI6MTcwOTA2MzY0N30.17L6OfTTdCB9WuUWNXTAebtYgDnvk_03tgOhUFx6sgQ'

describe('Tent Module', () => {
    it('should return successful with tents data', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/validBookings.csv'))
            .expect('Content-Type', /json/)
            .expect(201)
            .then((res) => {
                expect(res.statusCode).toBe(201)
            })
    })

    it('should return No file was uploaded', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
            })
    })

    it('The uploaded CSV file is missing the following headers', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/invalidHeaderBookings.csv'))
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
            })
    })

    it('The uploaded CSV file is empty', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/emptyBookings.csv'))
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
            })
    })

    it('File Format Not Supported, only CSV files are supported for upload', async () => {
        return request('http://localhost:4000')
            .post('/api/tent')
            .set('Authorization', `Bearer ${token}`)
            .attach('booking', resolve(__dirname, './mock/message.txt'))
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(415)
            .then((res) => {
                expect(res.statusCode).toBe(415)
            })
    })
})
