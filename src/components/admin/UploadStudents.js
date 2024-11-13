import React from 'react';
import './style.css';

function UploadStudents() {
  const handleFileUpload = (e) => {
    alert('Student data uploaded successfully');
    e.target.value = null;
  };

  return (
    <div className="form-container">
      <h2>Upload Students</h2>
      <input type="file" onChange={handleFileUpload} />
      <button type="submit">Add Department</button>
    </div>
  );
}

export default UploadStudents;
