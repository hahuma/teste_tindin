const { Router } = require("express")
const routes = Router()

const controllers = require("./implementations")


//Classes Routes 
routes.get('/classes', controllers.listClasses)
.post('/classes', controllers.createClass)
.get('/classes/:id', controllers.listOneClass)
.put('/classes', controllers.updateClass)
.delete('/classes/:id', controllers.deleteClass)

//Comments Routes
routes.get('/classes/comment', controllers.listComments)
.post('/classes/comment', controllers.createComment)
.delete('/classes/comment/:id', controllers.deleteComment)

module.exports = routes