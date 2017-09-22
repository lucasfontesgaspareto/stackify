import stack from './stack'
import user from './user'

export default (router) => {
  router
    .post('/stack', stack.create)
    .get('/stack', stack.read)
    .get('/stack/:id', stack.read)
    .patch('/stack/:id', stack.update)
    .del('/stack/:id', stack.delete)
    // user
    .post('/user', user.create)
    .get('/user', user.read)
    .get('/user/:id', user.read)
    .patch('/user/:id', user.update)
    .del('/user/:id', user.delete)
}
