import stack from './stack'

export default (router) => {
  router
    .post('/stack', stack.create)
    .get('/stack', stack.read)
    .get('/stack/:id', stack.read)
    .patch('/stack/:id', stack.update)
    .del('/stack/:id', stack.delete)
}
