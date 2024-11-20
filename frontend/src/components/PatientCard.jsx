import React from 'react';

// PatientCard Component to display individual patient details
const PatientCard = ({ patient }) => {
  const {
    patient_id,
    fullname,
    gender,
    date_of_birth,
    admission_date,
    street,
    city,
    thana,
    house_no,
    ward_number,
    floor_number
  } = patient;

  // Convert date from string to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Format as per user's locale
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">{fullname}</h3>
      <p><strong>Id:</strong> {patient_id}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Date of Birth:</strong> {formatDate(date_of_birth)}</p>
      <p><strong>Admission Date:</strong> {formatDate(admission_date)}</p>
      <div>
        <h4 className="font-semibold">Address:</h4>
        <p>{street}, {house_no}, {thana}, {city}</p>
        <p><strong>Ward:</strong> {ward_number}, <strong>Floor:</strong> {floor_number}</p>
      </div>
    </div>
  );
};

export default PatientCard;


