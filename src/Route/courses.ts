const coursesRouter = require('express').Router();
const coursesController = require('../Controller/courses')
const MiddleWare = require('../Middleware/coursesAuthorization');

// MiddleWare
coursesRouter.use(MiddleWare.verifyToken);

coursesRouter.route('/')
.get(coursesController.getCourses)
.post(coursesController.addCourse)

coursesRouter.route('/:id')
.delete(coursesController.deleteCourseById)
.put(coursesController.updateCourseById)

module.exports = coursesRouter;