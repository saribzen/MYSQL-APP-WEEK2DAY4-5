const dbc = require('../util/db')

interface Course {
    id: String,
    name: String,
    description: String
}

const getAllCourses = async () => {
    const rows = await dbc.qr(`SELECT * FROM courses`);
  
    return rows;
  }
  
  const deleteCourse = async (id : String) => {
    const rows = await dbc.qr(`DELETE FROM courses WHERE id = ?`, id);
  
    return rows;
  }
  
  const createCourse = async (course : Course) => {
    const rows = await dbc.qr(`INSERT INTO courses(id, name, description) VALUES(?, ?, ?);`, [course.id, course.name, course.description])
  
    return rows;
  }

  const putCourse = async (course : Course) => {
    const rows = await dbc.qr(`UPDATE courses SET name=?, description=? WHERE id=?;`, [course.name, course.description, course.id])
  
    return rows;
  }

module.exports = {
    getAllCourses,
    deleteCourse,
    createCourse,
    putCourse
}