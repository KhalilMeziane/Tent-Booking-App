/* eslint-disable no-undef */
const request = require('supertest')

describe('POST /api/auth/login', () => {
    it('should return login successful', async () => {
        return request('http://localhost:4000')
            .post('/api/auth/login')
            .send({
                email: 'root@root.com',
                password: 'root'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200)
            })
    })

    it('invalid credentials', async () => {
        return request('http://localhost:4000')
            .post('/api/auth/login')
            .send({
                email: 'root1@root.com',
                password: 'root1'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
            })
    })

    it('Input validation failed', async () => {
        return request('http://localhost:4000')
            .post('/api/auth/login')
            .send({
                email: '',
                password: ''
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400)
            .then((res) => {
                expect(res.statusCode).toBe(400)
            })
    })

    it('404 route notfound', async () => {
        return request('http://localhost:4000')
            .post('/api/auth/logins')
            .send({
                email: 'root1@root.com',
                password: 'root1'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .then((res) => {
                expect(res.statusCode).toBe(404)
            })
    })
})
