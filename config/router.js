const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.get('/', controller.homepage)

router.all('/add-message', controller.postNewMessage)

router.get('/message/:id', controller.showOneMessage)

router.all('/edit-message/:id', controller.updateOneMessage)

router.get('/delete-message/:id', controller.deleteOneMessage)



module.exports = router
