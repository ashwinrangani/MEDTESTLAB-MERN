# LabCare

LabCare is a web application designed for pathology laboratory owners to manage patient data, generate medical reports, track doctor referrals, and manage payments. The application is built using modern web technologies, including Vite React for the frontend, Express.js and Node.js for the backend, and MongoDB for database storage.

## Features

- **Medical Report Generation**: Pathology laboratory owners can instantly generate medical reports for patients.
- **Patient Data Management**: LabCare allows users to keep track of patient data, including personal information, test results, and medical history.
- **Doctor Referral Tracking**: Users can monitor doctor-referred patients and track revenue generated from referrals.
- **Payment Management**: LabCare provides functionality to manage patient payments and track outstanding balances.

## Technologies Used

- **Frontend**:
  - Vite React: A fast, opinionated React framework for building modern web applications.
  - Tailwind CSS: A utility-first CSS framework for creating custom, responsive designs.
  - React Hook Form: A React library for building complex form systems with easy validation.
  - Flowbite React: A styled components library for adding pre-designed UI components to the application.
  - Axios: A promise-based HTTP client for making requests to backend APIs.
  - jsPDF: A library for generating PDF documents in JavaScript.
  - QRCode Library: A library for generating QR codes for patient identification.

- **Backend**:
  - Express.js: A minimalist web framework for Node.js used to build the backend server.
  - Node.js: A JavaScript runtime environment for executing server-side code.
  - MongoDB: A NoSQL database used for storing patient data and other application information.
  - Bcrypt: A library for password hashing to securely store user passwords.
  - Mongoose: An ORM (Object-Relational Mapping) library for MongoDB used for querying the database.

## Getting Started

To run the LabCare web application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd LabCare`
3. Install dependencies:
   - For the frontend: `cd frontend && npm install`
   - For the backend: `cd backend && npm install`
4. Start the backend server: `cd backend && npm start`
5. Start the frontend development server: `cd frontend && npm start`

By default, the frontend development server runs on `http://localhost:3000` and the backend server runs on `http://localhost:4000`.

## Contributing

If you would like to contribute to LabCare, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure the code passes linting checks.
3. Write tests to cover your changes if applicable.
4. Submit a pull request detailing the changes made and any relevant information.

## License

This project is licensed under the [MIT License](LICENSE).
