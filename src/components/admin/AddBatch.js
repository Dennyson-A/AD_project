import React, { useState } from 'react';
import './style.css';

function AddBatch() {
  const [batchName, setBatchName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Batch "${batchName}" has been created.`);
    setBatchName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create New Batch</h2>
      <label>Batch Name:</label>
      <input
        type="text"
        value={batchName}
        onChange={(e) => setBatchName(e.target.value)}
      />
      <button type="submit">Add Batch</button>
    </form>
  );
}

export default AddBatch;
