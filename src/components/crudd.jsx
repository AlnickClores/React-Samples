import React, { useState } from "react";

const Crudd = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    id: 0,
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setNewStudent({
      id: newStudent.id + 1,
      name: "",
      email: "",
    });
  };

  return (
    <div>
      <h1>CRUD PAGE</h1>
      <div>
        <h2>CREATE</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <button type="submit" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
      <div>
        <h2>READ</h2>
        {students.map((student) => (
          <div key={student.id}>
            <p>Name: {student.name}</p>
            <p>Email: {student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crudd;
