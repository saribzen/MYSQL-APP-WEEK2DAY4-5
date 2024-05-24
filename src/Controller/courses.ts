import { Response, Request } from "express";
const courseService = require('../Service/courses.service')
const { v4: uuidv4 } = require('uuid');


interface Course {
    id: String,
    name: String,
    description: String
}


const getCourses = async (req : Request, res : Response) => {
    const data = await courseService.getAllCourses()
    res.json(data);
}

const addCourse = async (req : Request, res : Response) => {
    const { Cname, description} = req.body;

    const courseNew : Course = {
        id: uuidv4(),
        name: Cname,
        description: description
    }

    const rows : JSON = await courseService.createCourse(courseNew);
    
    res.status(200).json(rows);
}

const deleteCourseById = async (req : Request, res : Response) => {
    const {id} = req.params;
    const rows : JSON = await courseService.deleteCourse(id);
    
    res.status(200).json(rows);
}

const updateCourseById = async (req : Request, res : Response) => {
    const { name, description} = req.body;
    const {id } = req.params;

    const courseNew : Course = {
        id: id,
        name: name,
        description: description
    }

    const rows : JSON = await courseService.putCourse(courseNew);
    
    res.status(200).json(rows);
}


module.exports = {
    addCourse,
    getCourses,
    deleteCourseById,
    updateCourseById
}