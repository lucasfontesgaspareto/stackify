import Stack from './../../models/Stack'

export default {

  create: async (ctx) => {
    let stack = new Stack(ctx.request.body)

    try {
      await stack.save()
    } catch (e) {
      ctx.throw(404)
    }

    ctx.status = 200
    ctx.body = stack
  },

  read: async (ctx, next) => {
    let stack = []

    if (ctx.params.id) {
      try {
        stack = await Stack.findById(ctx.params.id)
      } catch (e) {
        ctx.throw(404)
      }
    } else {
      stack = await Stack.find()
      if (!stack || !stack.length) {
        ctx.throw(404)
      }
    }

    ctx.status = 200
    ctx.body = stack
  },

  update: async (ctx) => {
    let stack = {}

    try {
      stack = await Stack.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    } catch (e) {
      ctx.throw(404)
    }

    ctx.status = 204
  },

  delete: async (ctx) => {
    let stack = {}

    try {
      stack = await Stack.findByIdAndRemove(ctx.params.id)
    } catch (e) {
      ctx.throw(404)
    }

    ctx.status = 204
  }
}
