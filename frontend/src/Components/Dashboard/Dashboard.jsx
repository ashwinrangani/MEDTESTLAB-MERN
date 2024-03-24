import React from 'react';

const Dashboard = () => {
  return (
    <div className='ml-52 h-full flex flex-col justify-center items-center'>
      <h1 className='mt-20 text-4xl font-display'>LabCare</h1>
      <p className='mt-1 font-medium'>Your Pathology Laboratory Management Solution</p>
      <div className="max-w-lg mx-auto mt-6 text-lg text-center">
        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-item">
          <li>Instant Medical Report Generation</li>
          <li>Patient Data Management</li>
          <li>Doctor Referral Tracking</li>
          <li>Payment Management</li>
        </ul>
        <p className="mt-4">To get started:</p>
        <ol className="list-decimal pl-6">
          <li>Log in to your LabCare account.</li>
          <li>Create or select a patient record to generate a medical report.</li>
          <li>Manage doctor referrals and track payments from the dashboard.</li>
        </ol>
      </div>
    </div>
  );
};

export default Dashboard;
