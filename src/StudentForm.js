// StudentForm.js

import React, { useState } from 'react';

function StudentForm() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here, like sending it to a server
    console.log('Student Name:', studentName);
    console.log('Student Email:', studentEmail);
    console.log('Student Phone:', studentPhone);
    // Clear the form fields after submission
    setStudentName('');
    setStudentEmail('');
    setStudentPhone('');
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  };

  const submitButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="studentName">1. Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="studentEmail">2. Student Email:</label>
          <input
            type="text"
            id="studentEmail"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="studentPhone">3. Student Phone:</label>
          <input
            type="text"
            id="studentPhone"
            value={studentPhone}
            onChange={(e) => setStudentPhone(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input type="submit" value="Submit" style={submitButtonStyle} />
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
