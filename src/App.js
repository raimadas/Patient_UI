import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import PatientList from "./Components/PatientList";
import AddPatient from "./Components/AddPatient";
import UpdatePatient from './Components/UpdatePatient';


function App() {
    return(
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<PatientList />} />
                <Route path="/" element={<PatientList />}></Route>
                <Route path="/patientList" element={<PatientList />} />
                <Route path="/addPatient" element={<AddPatient />}></Route>
                <Route path="/editPatient/:patientId" element={<UpdatePatient />}></Route>
            </Routes>
            </BrowserRouter>

           
        </div>
        
    );
  
}

export default App;
