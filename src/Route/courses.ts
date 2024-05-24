const coursesRouter = require('express').Router();
const coursesController = require('../Controller/courses')
const MiddleWare = require('../Middleware/coursesAuthorization');

coursesRouter.route('/')
.post(coursesController.addCourse)
.get(coursesController.getCourses)

// MiddleWare
coursesRouter.use(MiddleWare.verifyToken);

coursesRouter.route('/:id')
.delete(coursesController.deleteCourseById)
.put(coursesController.updateCourseById)

module.exports = coursesRouter;