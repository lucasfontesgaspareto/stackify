import 'babel-polyfill'

import app from './app'
import db from './db'

const boot = async () => {
  try {
    await db()
    console.log('database connected')
    await app.listen(3000)
    console.log('server connected')
  } catch (e) {
    throw new Error(e)
  }
}

boot()

process.on('SIGINT', () => {
  console.log('server disconnected')
  process.exit()
})

export default app
