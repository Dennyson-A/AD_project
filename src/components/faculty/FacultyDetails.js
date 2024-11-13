import React from 'react';

function FacultyDetails() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    backgroundColor:'lightyellow'
  };

  const profileStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={profileStyle}>
        <div style={{fontSize:'130px'}}>👤</div>
        <div>
          <p><strong>Name:</strong> Dennyson</p>
          <p><strong>Role:</strong> Faculty</p>
          <p><strong>Class:</strong> CSE-A</p>
          <p><strong>No. of Students:</strong> 85</p>
        </div>
      </div>
    </div>
  );
}

export default FacultyDetails;
