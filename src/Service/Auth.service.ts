const studentService = require('./students.service')
const teacherService = require('./teachers.service')
const bcyrpt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jswUtil = require('../util/jsonwebtoken.service')

interface userType {
    id: String,
    name: string,
    email: String,
    pass: String,
    role: String
  }


// REGISTER FUNCTION

const signUp = async (name: string, email: String, pass: String, role: String, isStudent: boolean) => {

    const hashPass = await bcyrpt.hash(pass, 10);

    const user : userType = {
        id: uuidv4(),
        name: name,
        email: email, 
        pass: hashPass,
        role: role
    }

    if(isStudent) await studentService.createStudent(user);
    else await teacherService.createTeacher(user);

    const token = jswUtil.createToken(user.email, user.role);

    return {
        success: true,
        Userdata: { 
            token: token,
            id: user.id,
         },
    }
}


// LOGIN STUDENT FUNCTION

const signIn = async (email: String, pass : String, isStudent: boolean) => {
    let data;

    if(isStudent) data = await studentService.getStudentByEmail(email); 
    else data = await teacherService.getTeacherByEmail(email);

    const user : userType = data[0];

    if(!user) return;
    
    const isSame = await bcyrpt.compare(pass, user.pass);

    if(!isSame) return;

    const token = jswUtil.createToken(user.email, user.role);

    return {
        success: true,
        Userdata: { 
            token: token,
            id: data[0].id,
         },
    }
}

module.exports = {
    signUp,
    signIn
}