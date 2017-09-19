import request from 'supertest'

import db from './../dist/db'
import app from './../dist/app'

const server = request(app.listen())

let response = {}
let docId = ''

describe('Stack endpoints test', () => {
  test('Initialize database', async () => {
    response = await db()
    expect(response._readyState).toBe(1)
  }, 10000)
  test('POST /stack', async () => {
    response = await server.post('/stack').send({
      type: 'backend',
      languages: ['javascript'],
      framworks: ['koajs']
    })
    /* set id for using bellow */
    docId = response.body._id
    expect(response.statusCode).toBe(200)
  })
  test('GET /stack', async () => {
    response = await server.get('/stack')
    expect(response.statusCode).toBe(200)
  })
  test('GET /stack/:id', async () => {
    response = await server.get(`/stack/${docId}`)
    expect(response.statusCode).toBe(200)
  })
  test('PATCH /stack/:id', async () => {
    response = await server.patch(`/stack/${docId}`).send({
      type: 'backend',
      languages: ['javascript'],
      framworks: ['koajs'],
      tests: ['jest'],
      rank: 2
    })
    expect(response.statusCode).toBe(204)
  })
  test('DELETE /stack/:id', async () => {
    response = await server.delete(`/stack/${docId}`)
    expect(response.statusCode).toBe(204)
  })
})
