const router = require('koa-router')()

router.prefix('/front')

router.get('/', async(ctx, next)=>{
  ctx.body = 'this is a users response!'
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
