import { Response, Request } from "express";
const enrolmentService = require('../Service/enrolment')
const { v4: uuidv4 } = require('uuid');

interface Enrol {
    id: String,
    Studentid: string,
    Teacherid: string,
    Courseid: string,
}

const getEnrolments = async (req : Request, res : Response) => {
    const data = await enrolmentService.getAllEnrolment()
    res.json(data);
}

const createEnrolment = async (req : Request, res : Response) => {
    const { id, Studentid, Teacherid, Courseid } = req.body;

    const enrol : Enrol = {
        id: uuidv4(),
        Studentid: Studentid,
        Teacherid: Teacherid,
        Courseid: Courseid,
    }

    const data = await enrolmentService.InsertEnrolment(enrol);
    res.json(data);
}


module.exports = {
    getEnrolments,
    createEnrolment
}