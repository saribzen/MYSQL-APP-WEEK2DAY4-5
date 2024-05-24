const enrolmentController = require('../Controller/enrolments')
const enrolmentRouter = require('express').Router();

enrolmentRouter.route('/')
.get(enrolmentController.getEnrolments)
.post(enrolmentController.createEnrolment)


module.exports = enrolmentRouter;