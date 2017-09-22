import User from './../../models/User'

export default {

  create: async (ctx) => {
    let user = new User(ctx.request.body)

    try {
      await user.save()
    } catch (e) {
      ctx.throw(404)
    }

    ctx.status = 200
    ctx.body = user
  },

  read: async (ctx, next) => {
    let user = []

    if (ctx.params.id) {
      try {
        user = await User.findById(ctx.params.id)
      } catch (e) {
        ctx.throw(404)
      }
    } else {
      user = await User.find()
      if (!user || !user.length) {
        ctx.throw(404)
      }
    }

    ctx.status = 200
    ctx.body = user
  },

  update: async (ctx) => {
    let user = {}

    try {
      user = await User.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    } catch (e) {
      ctx.throw(404)
    }

    ctx.status = 204
    ctx.body = user
  },

  delete: async (ctx) => {
    let user = {}

    try {
      user = await User.findByIdAndRemove(ctx.params.id)
    } catch (e) {
      ctx.throw(404)
    }

    ctx.status = 204
    ctx.body = user
  }
}
