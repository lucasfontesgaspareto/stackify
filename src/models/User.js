import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const UserSchema = mongoose.Schema({
  username: String,
  password: String
})

export default mongoose.model('User', UserSchema)
