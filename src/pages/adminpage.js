import React, { useState } from 'react';
import AddBatch from '../components/admin/AddBatch';
import AddDepartment from '../components/admin/AddDepartment';
import AddFaculty from '../components/admin/AddFaculty';
import UploadStudents from '../components/admin/UploadStudents';
import AddSemester from '../components/admin/AddSemester';
import './Admin.css';
import Header from '../components/Header';

function Admin() {
  const [currentForm, setCurrentForm] = useState('dashboard');

  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <div class='navbar'>
        <button onClick={() => setCurrentForm('batch')}>Create Batch</button>
        <button onClick={() => setCurrentForm('department')}>Create Department</button>
        <button onClick={() => setCurrentForm('faculty')}>Add Faculty</button>
        <button onClick={() => setCurrentForm('students')}>Upload Students</button>
        <button onClick={() => setCurrentForm('semester')}>Add Semester</button>
      </div>

      <div>
        {currentForm === 'batch' && <AddBatch />}
        {currentForm === 'department' && <AddDepartment />}
        {currentForm === 'faculty' && <AddFaculty />}
        {currentForm === 'students' && <UploadStudents />}
        {currentForm === 'semester' && <AddSemester />}
      </div>
    </div>
  );
}

export default Admin;
