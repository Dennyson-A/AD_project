// src/components/MarkAttendance.js
import React, { useState } from 'react';

function MarkAttendance() {
  const students = ["BElla", "Felix", "Edward", "Renesme"];
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (student, hour, status) => {
    setAttendance(prev => ({
      ...prev,
      [student]: { ...prev[student], [hour]: status },
    }));
  };

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
        <input type="date" style={{ marginLeft: '10px', marginRight: '10px' }} />
        <label>Working/Holiday:</label>
        <select style={{ marginLeft: '10px' }}>
          <option value="working">Working</option>
          <option value="holiday">Holiday</option>
        </select>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Name</th>
            {[1, 2, 3, 4].map(hour => (
              <th key={hour} style={thTdStyle}>Hour {hour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student}>
              <td style={thTdStyle}>{student}</td>
              {[1, 2, 3, 4].map((hour) => (
                <td key={hour} style={thTdStyle}>
                  <select
                    onChange={(e) =>
                      handleAttendanceChange(student, hour, e.target.value)
                    }
                  >
                    <option value="P">P</option>
                    <option value="A">A</option>
                    <option value="OD">OD</option>
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarkAttendance;
