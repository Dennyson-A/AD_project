import React, { useState } from 'react';
import './style.css';

function AddDepartment() {
  const [batch, setBatch] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [facultyIncharge, setFacultyIncharge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Department "${departmentName}" for batch "${batch}" has been created with ${facultyIncharge} as the incharge.`);
    setBatch('');
    setDepartmentName('');
    setFacultyIncharge('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create Department</h2>
      <label>Batch:</label>
      <input
        type="text"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />
      <label>Department Name:</label>
      <input
        type="text"
        value={departmentName}
        onChange={(e) => setDepartmentName(e.target.value)}
      />
      <label>Faculty Incharge:</label>
      <input
        type="text"
        value={facultyIncharge}
        onChange={(e) => setFacultyIncharge(e.target.value)}
      />
      <button type="submit">Add Department</button>
    </form>
  );
}

export default AddDepartment;
