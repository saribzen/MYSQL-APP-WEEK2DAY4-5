import { Response, Request } from "express";
const studentService = require('../Service/students.service')
const studentAuthService = require('../Service/Auth.service')


const getStudents = async (req : Request, res : Response) => {
    const data = await studentService.getAllStudents()
    res.json(data);
}

const getStudentById = async (req : Request, res : Response) => {
    const data = await studentService.getStudentByID(req.params.id);
    res.json(data);
}

const registerStudent = async (req : Request, res : Response) => {
    const {name, email, pass, role} = req.body;
    const token : JSON = await studentAuthService.signUp(name, email, pass, role, true);
    
    res.status(200).json(token);
}

const loginStudent = async (req : Request, res : Response) => {
    const {email, pass} = req.body;
    const token : JSON = await studentAuthService.signIn(email, pass, true);
    
    if(!token) res.json("Wrong Credentials");

    res.status(200).json(token);
}

const deleteStudentById = async (req : Request, res : Response) => {
    const {id} = req.params;
    const token = await studentService.deleteStudentByID(id);

    res.status(200).json(token);
}

module.exports = {
    getStudents,
    getStudentById,
    registerStudent,
    loginStudent,
    deleteStudentById
}