import React from 'react';

// BillingCard Component to display each billing record
const BillingCard = ({ billing }) => {
    const { Billing_ID, room_charge, doctor_fees, medicine_Bill, billing_date } = billing;
  
    // Format the billing date to a more readable format
    const formattedDate = new Date(billing_date).toLocaleDateString();
  
    // Calculate total billing (if necessary)
    const totalBill = parseFloat(room_charge) + parseFloat(doctor_fees) + parseFloat(medicine_Bill);
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800">Billing ID: {Billing_ID}</h3>
        <p><strong>Billing Date:</strong> {formattedDate}</p>
        <p><strong>Room Charge:</strong> ${parseFloat(room_charge).toFixed(2)}</p>
        <p><strong>Doctor Fees:</strong> ${parseFloat(doctor_fees).toFixed(2)}</p>
        <p><strong>Medicine Bill:</strong> ${parseFloat(medicine_Bill).toFixed(2)}</p>
        <div className="mt-4">
          <p className="font-semibold">Total Bill: ${totalBill.toFixed(2)}</p>
        </div>
      </div>
    );
  };

  export default BillingCard;