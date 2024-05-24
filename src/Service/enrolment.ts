const dbe = require('../util/db')

interface Enrol {
    id: String,
    Studentid: string,
    Teacherid: string,
    Courseid: string,
}

const getAllEnrolment = async () => {
    const rows = await dbe.qr(`SELECT enrolments.id, Tname, Sname, Cname FROM enrolments 
    INNER JOIN courses ON Courseid = courses.id 
    INNER JOIN teachers ON Teacherid = teachers.id 
    INNER JOIN students ON Studentid = students.id`);
  
    return rows;
}

const InsertEnrolment = async (enrol : Enrol) => {
    const rows = await dbe.qr(`INSERT INTO enrolments (id, Studentid, Teacherid, Courseid) VALUES(?, ?, ?, ?);`, [enrol.id, enrol.Studentid, enrol.Teacherid, enrol.Courseid]);

    return rows;
}

module.exports = {
    getAllEnrolment,
    InsertEnrolment,
}

// 2f13149e-e3f5-46e2-8659-bfa6a3f95f69 course

// 0b6b2c7a-4586-4c98-bccc-7e492a2a99a8 Teacher

// 420258c9-2d1f-4272-ae28-90f2a1893853 Student