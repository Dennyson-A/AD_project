import React, { useState } from 'react';
import Header from '../components/Header.js';
import FacultyDetails from '../components/faculty/FacultyDetails.js';
import MarkAttendance from '../components/faculty/MarkAttendance.js';
import ViewAttendance from '../components/faculty/ViewAttendance';
import './facultypage.css';

function FacultyPage() {
  const [view, setView] = useState("mark");

  return (
    <div className="facultyPage">
      <Header />
      <FacultyDetails />
      <div className="attendance-options">
        <button onClick={() => setView("mark")}>Mark Attendance</button>
        <button onClick={() => setView("view")}>View Attendance</button>
      </div>
      {view === "mark" ? <MarkAttendance /> : <ViewAttendance />}
    </div>
  );
}

export default FacultyPage;
