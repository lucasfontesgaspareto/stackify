import request from 'supertest'

import db from './../dist/db'
import app from './../dist/app'

const server = request(app.listen())

let response = {}
let docId = ''

describe('User endpoints test', () => {
  test('Initialize database', async () => {
    response = await db()
    expect(response._readyState).toBe(1)
  }, 10000)
  test('POST /user', async () => {
    response = await server.post('/user').send({
      username: 'lucas',
      password: 'lucas'
    })
    /* set id for using bellow */
    docId = response.body._id
    expect(response.statusCode).toBe(200)
  })
  test('GET /user', async () => {
    response = await server.get('/user')
    expect(response.statusCode).toBe(200)
  })
  test('GET /user/:id', async () => {
    response = await server.get(`/user/${docId}`)
    expect(response.statusCode).toBe(200)
  })
  test('PATCH /user/:id', async () => {
    response = await server.patch(`/user/${docId}`).send({
      username: 'gaspareto',
      password: '12345'
    })
    expect(response.statusCode).toBe(204)
  })
  test('DELETE /user/:id', async () => {
    response = await server.delete(`/user/${docId}`)
    expect(response.statusCode).toBe(204)
  })
})
