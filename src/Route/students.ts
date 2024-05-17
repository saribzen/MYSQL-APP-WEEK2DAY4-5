const studentRouter = require('express').Router();
const studentController = require('../Controller/students')

studentRouter.route('/')
.get(studentController.getStudents)

studentRouter.route('/:id')
.get(studentController.getStudentById)
.delete(studentController.deleteStudentById)

studentRouter.post('/register', studentController.registerStudent)

studentRouter.post('/login', studentController.loginStudent)

module.exports = studentRouter;