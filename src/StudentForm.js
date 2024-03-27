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

  return (
    <div>
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Hello Adios! Student Name:</label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />

        <label htmlFor="studentEmail">Student Email:</label>
        <input
          type="text"
          id="studentEmail"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
          required
        />

        <label htmlFor="studentPhone">Student Phone:</label>
        <input
          type="text"
          id="studentPhone"
          value={studentPhone}
          onChange={(e) => setStudentPhone(e.target.value)}
          required
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default StudentForm;

//hello