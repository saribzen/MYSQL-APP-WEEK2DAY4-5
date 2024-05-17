const db = require('../util/db')

interface user {
  id: String,
  name: string,
  email: String,
  pass: String,
  role: String
}

const getAllStudents = async () => {
  const rows = await db.qr(`SELECT * FROM students`);

  return rows;
}

const getStudentByID = async (id: String) => {
  const rows = await db.qr(`SELECT * FROM students WHERE id = ?`, id);

  return rows;
}

const getStudentByEmail = async (email: String) => {
  const rows = await db.qr(`SELECT * FROM students WHERE email = ?`, [email])

  return rows;
}

const createStudent = async (user: user) => {
  const rows = await db.qr(`INSERT INTO students(id, name, email, pass, role) VALUES(?, ?, ?, ?, ?)`, [user.id, user.name, user.email, user.pass, user.role])

  return rows;
}

const deleteStudentByID = async (id : String) => {
  const rows = await db.qr(`DELETE FROM students WHERE id = ?`, id)

  return rows;
}

module.exports = {
  getAllStudents,
  getStudentByID,
  createStudent,
  getStudentByEmail,
  deleteStudentByID
}

// 0d484210-1377-11ef-858d-d9d4066845bb