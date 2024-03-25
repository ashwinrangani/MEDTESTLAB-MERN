import React from 'react';

const Dashboard = () => {
  return (
    <div className="mx-4 sm:mx-0 sm:ml-52 h-screen flex flex-col justify-center items-center bg-sky-50">
      <h1 className="mt-0 text-3xl font-bold text-center text-gray-900">Welcome to LabCare</h1>
      <p className="mt-2 text-lg font-medium text-center text-gray-700">Your Pathology Laboratory Management Solution</p>
      <div className="max-w-md w-full mx-auto mt-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">Features:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li className="mb-2">Instant Medical Report Generation</li>
          <li className="mb-2">Patient Data Management</li>
          <li className="mb-2">Doctor Referral Tracking</li>
          <li className="mb-2">Payment Management</li>
        </ul>
        <p className="mb-4">To get started:</p>
        <ol className="list-disc pl-5">
          <li className="mb-2">Create a patient record to generate a medical report.</li>
          <li className="mb-2">Clicking PDF button will create pdf file with barcode included.</li>
          <li className="mb-2">Manage doctor referrals and track payments from the Accounts.</li>
          <li className="mb-2">View collection of todays or any given date range.</li>
        </ol>
      </div>
    </div>
  );
};

export default Dashboard;
