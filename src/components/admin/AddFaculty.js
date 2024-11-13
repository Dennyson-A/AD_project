import React from 'react';
import './style.css';

function AddFaculty() {
  const handleFileUpload = (e) => {
    alert('Faculty data uploaded successfully');
    e.target.value = null; // Reset file input
  };

  return (
    <div className="form-container">
      <h2>Add Faculty</h2>
      <input type="file" onChange={handleFileUpload} />
      <button type="submit">Add Department</button>
    </div>
  );
}

export default AddFaculty;
