import React, { useState, useEffect } from 'react';
import EmployeeCard from '../components/EmployeeCard';
// Main Employee Component to render the list of employees
const Employee = () => {
  // Patient data
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define your API URL
    const apiUrl = 'http://localhost:5000/api/employee'; // Replace with your actual backend URL

    // Fetch data from the backend using fetch API
    fetch(apiUrl)
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body to JSON
      })
      .then((data) => {
        setEmployees(data); // Update state with the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error.message); // If there's an error, update state with the error message
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array ensures this runs only once on component mount

  // If data is loading, show loading message
  if (loading) return <div>Loading...</div>;

  // If there was an error, display the error message
  if (error) return <div>Error: {error}</div>;
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Employee Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard key={employee.Employee_id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Employee;
