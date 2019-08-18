const router = require('express').Router()
const controller = require('./controller')

router
  .route('/order')
  .get(controller.get)
  .post(controller.post)

router
  .route('/order/:_id')
  .delete(controller.delete)
  .put(controller.put)

router
  .route('/username')
  .get(controller.getUsername)

  module.exports = router