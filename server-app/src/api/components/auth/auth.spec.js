/* eslint-disable no-undef */
const request = require('supertest')

describe('Auth Module', () => {
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
                expect(res._body).toHaveProperty('message')
                expect(res._body.message).toBe('login successful')
                expect(res._body).toHaveProperty('accessToken')
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
                expect(res._body).toHaveProperty('error')
                expect(res._body.error).toHaveProperty('message')
                expect(res._body.error.message).toBe('Invalid Credentials')
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
                expect(res._body).toHaveProperty('error')
                expect(res._body.error).toHaveProperty('message')
                expect(res._body.error.message).toBe('Input validation failed')
                expect(res._body.error).toHaveProperty('errors')
                expect(res._body.error.errors).toHaveProperty('password')
                expect(res._body.error.errors.password).toBe('password field is required')
                expect(res._body.error.errors).toHaveProperty('email')
                expect(res._body.error.errors.email).toBe('email field is required')
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
