import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export default () => {
  return mongoose.connect('mongodb://admin:admin@ds133964.mlab.com:33964/lucasfontesgaspareto', {
    useMongoClient: true
  })
}
