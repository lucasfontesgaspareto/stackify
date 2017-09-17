import Koa from 'koa'
import logger from 'koa-logger'
import cors from 'kcors'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import routes from './routes'

const app = new Koa()
const router = new Router()

// middlewares to be before routers
app.use(logger())
app.use(cors({
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}))
app.use(bodyParser())

// load modules
routes(router)

app.use(router.routes())
app.use(router.allowedMethods())

export default app
