const dbt = require('../util/db')

interface user {
  id: String,
  name: string,
  email: String,
  pass: String,
  role: String
}

const getAllTeachers = async () => {
  const rows = await dbt.qr(`SELECT * FROM teachers`);

  return rows;
}

const getTeacherByID = async (id: String) => {
  const rows = await dbt.qr(`SELECT * FROM teachers WHERE id = ?`, id);

  return rows;
}

const getTeacherByEmail = async (email: String) => {
  const rows = await dbt.qr(`SELECT * FROM teachers WHERE email = ?`, [email])

  return rows;
}

const createTeacher = async (user: user) => {
  const rows = await dbt.qr(`INSERT INTO teachers(id, name, email, pass, role) VALUES(?, ?, ?, ?, ?)`, [user.id, user.name, user.email, user.pass, user.role])

  return rows;
}

const deleteTeacherByID = async (id : String) => {
  const rows = await dbt.qr(`DELETE FROM teachers WHERE id = ?`, id)

  return rows;
}

module.exports = {
    getAllTeachers,
    getTeacherByID,
    createTeacher,
    getTeacherByEmail,
    deleteTeacherByID
}

// 0d484210-1377-11ef-858d-d9d4066845bb