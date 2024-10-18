import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDashboard from './components/PatientDashboard';
import PatientDetail from './components/PatientDetail'; // Import PatientDetail component
import PriorAuthorizationForm from './components/PriorAuthorizationForm';
import Login from './components/Login';
import AuthorizationRequestsList from './components/AuthorizationRequestsList ';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/patientdashboard" element={<PatientDashboard />} />
        <Route path="/patient/:id" element={<PatientDetail />} />
        <Route path='/prior-authorization/:patientId' element={<PriorAuthorizationForm/>}/>
        <Route path="/authorization-requests" element={<AuthorizationRequestsList />} />
      </Routes>
   

    </Router>
  );
}

export default App;
