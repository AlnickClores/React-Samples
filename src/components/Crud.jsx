import { useState } from "react";

const RegistrationForm = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: 0,
    name: "",
    email: "",
    program: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setNewStudent({
      id: newStudent.id + 1,
      name: "",
      email: "",
      program: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={newStudent.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Program:{" "}
          <input
            type="text"
            name="program"
            value={newStudent.program}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => setStudents([])}>Reset</button>
      <StudentTable students={students} setStudents={setStudents} />
    </>
  );
};

const StudentTable = ({ students, setStudents }) => {
  const [editedStudentId, setEditedStudentId] = useState(null);
  const [editedStudent, setEditedStudent] = useState({
    id: null,
    name: "",
    email: "",
    program: "",
  });

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleEdit = (student) => {
    setEditedStudentId(student.id);
    setEditedStudent({ ...student });
  };

  const handleSave = () => {
    // Find the index of the edited student in the students array
    const index = students.findIndex(
      (student) => student.id === editedStudent.id
    );
    // Update the students array with the edited student information
    const updatedStudents = [...students];
    updatedStudents[index] = editedStudent;
    // Update the state with the updated students array and reset the editing state
    setStudents(updatedStudents);
    setEditedStudentId(null);
    setEditedStudent({
      id: null,
      name: "",
      email: "",
      program: "",
    });
  };

  return (
    <>
      {students &&
        students.map((student) => (
          <div
            key={student.id}
            style={{
              backgroundColor: "#5A5A5A",
              fontColor: "#ffffff",
              margin: "15px",
              padding: "15px",
              borderRadius: "15px",
            }}
          >
            <h2>Student List</h2>
            <p>Student #{student.id}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Program</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {editedStudentId === student.id ? (
                    <>
                      <td>
                        <input
                          type="text"
                          style={{ width: "7rem" }}
                          name="name"
                          value={editedStudent.name}
                          onChange={(e) =>
                            setEditedStudent({
                              ...editedStudent,
                              name: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          style={{ width: "7rem" }}
                          name="email"
                          value={editedStudent.email}
                          onChange={(e) =>
                            setEditedStudent({
                              ...editedStudent,
                              email: e.target.value,
                            })
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          style={{ width: "7rem" }}
                          name="program"
                          value={editedStudent.program}
                          onChange={(e) =>
                            setEditedStudent({
                              ...editedStudent,
                              program: e.target.value,
                            })
                          }
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.program}</td>
                    </>
                  )}
                  <td>
                    {editedStudentId === student.id ? (
                      <button onClick={handleSave}>Save</button>
                    ) : (
                      <button onClick={() => handleEdit(student)}>Edit</button>
                    )}
                    <button onClick={() => handleDelete(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </>
  );
};

export default function Crud() {
  return (
    <>
      <h1>Students Registration</h1>
      <RegistrationForm />
    </>
  );
}
