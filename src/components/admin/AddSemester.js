import React, { useState } from 'react';
import './style.css';

function AddSemester() {
  const [semester, setSemester] = useState('');
  const [batch, setBatch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Semester "${semester}" added to batch "${batch}".`);
    setSemester('');
    setBatch('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add Semester</h2>
      <label>Batch:</label>
      <input
        type="text"
        value={batch}
        onChange={(e) => setBatch(e.target.value)}
      />
      <label>Semester:</label>
      <input
        type="text"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />
      <button type="submit">Add Semester</button>
    </form>
  );
}

export default AddSemester;
