import React, { useState, useEffect } from "react";

function App() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/scholarships")
      .then((response) => response.json())
      .then((data) => setScholarships(data));
  }, []);

  return (
    <div>
      <h1>Breaking Financial Barriers to Education</h1>
      <h2>Available Scholarships</h2>
      <ul>
        {scholarships.map((scholarship, index) => (
          <li key={index}>{scholarship.name} - {scholarship.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
