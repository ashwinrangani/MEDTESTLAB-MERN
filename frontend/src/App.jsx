import './App.css';
import Login from './Components/Login/Login';
import PatientInfo from './Components/PatientsInfo/Patientinfo';
import { Route, Routes } from 'react-router-dom'
import NewSidebar from './Components/Sidebar/NewSidebar';
import DrList from './Components/DrList/DrList';
import { DoctorListProvider } from './Components/context/DrListContext';

function App() {
  

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <NewSidebar />
              <DoctorListProvider>
                <Routes>
                <Route path='/drlist' element={<DrList />} />
                  <Route path="/patients" element={<PatientInfo />} />
                  
                  {/* Add more routes for other pages inside the patients section */}
                  
                </Routes>
                </DoctorListProvider>
            </>
          }
        />
      </Routes>
    </>
 
  )
}

export default App
