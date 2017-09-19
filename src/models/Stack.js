import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const StackSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ['backend', 'frontend']
  },
  languages: [String],
  framworks: [String],
  test: [String],
  rank: Number
})

export default mongoose.model('Stack', StackSchema)
