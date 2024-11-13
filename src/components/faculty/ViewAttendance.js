// src/components/ViewAttendance.js
import React from 'react';

function ViewAttendance() {
  const containerStyle = {
    padding: '10px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px'
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: '10px' }}>
        <label>Select Date:</label>
        <input type="date" style={{ marginLeft: '10px' }} />
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Present</th>
            <th style={thTdStyle}>Absent</th>
            <th style={thTdStyle}>On-Duty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>Bella</td>
            <td style={thTdStyle}>10</td>
            <td style={thTdStyle}>2</td>
            <td style={thTdStyle}>1</td>
          </tr>
          <tr>
            <td style={thTdStyle}>Felix</td>
            <td style={thTdStyle}>8</td>
            <td style={thTdStyle}>4</td>
            <td style={thTdStyle}>1</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default ViewAttendance;
