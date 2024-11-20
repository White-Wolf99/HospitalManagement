import React from 'react';

// EmployeeCard Component to display individual employee details
const EmployeeCard = ({ employee }) => {
  const {
    First_Name,
    Middle_Name,
    Last_Name,
    Salary,
    Shift,
    Street,
    Thana,
    House_Number
  } = employee;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800">
        {First_Name} {Middle_Name && `${Middle_Name} `}{Last_Name}
      </h3>
      <p><strong>Shift:</strong> {Shift}</p>
      <p><strong>Salary:</strong> ${Salary.toLocaleString()}</p>
      <div>
        <h4 className="font-semibold">Address:</h4>
        <p>{Street}, {House_Number}, {Thana}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;