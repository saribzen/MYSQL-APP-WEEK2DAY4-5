import { Response, Request } from "express";
const teacherService = require('../Service/teachers.service')
const teacherAuthService = require('../Service/Auth.service')


const getTeachers = async (req : Request , res : Response) => {
    const data = await teacherService.getAllTeachers()
    res.json(data);
}

const getTeacherById = async (req : Request, res : Response) => {
    const data = await teacherService.getTeacherByID(req.params.id);
    res.json(data);
}

const registerTeacher = async (req : Request, res : Response) => {
    const {name, email, pass, role} = req.body;
    const token : JSON = await teacherAuthService.signUp(name, email, pass, role, false);
    
    res.status(200).json(token);
}

const loginTeacher = async (req : Request, res : Response) => {
    const {email, pass} = req.body;
    const token : JSON = await teacherAuthService.signIn(email, pass, false);
    
    if(!token) res.json("Wrong Credentials");

    res.status(200).json(token);
}

const deleteTeacherById = async (req : Request, res : Response) => {
    const {id} = req.params;
    const token = await teacherService.deleteTeacherByID(id);

    res.status(200).json(token);
}

module.exports = {
    getTeachers,
    getTeacherById,
    registerTeacher,
    loginTeacher,
    deleteTeacherById
}