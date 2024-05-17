const teacherRouter = require('express').Router();
const teacherController = require('../Controller/teachers')

teacherRouter.route('/')
.get(teacherController.getTeachers)

teacherRouter.route('/:id')
.get(teacherController.getTeacherById)
.delete(teacherController.deleteTeacherById)

teacherRouter.post('/register', teacherController.registerTeacher)

teacherRouter.post('/login', teacherController.loginTeacher)


module.exports = teacherRouter;