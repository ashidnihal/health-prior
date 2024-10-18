import React, { useState, useEffect } from 'react';
import PatientList from './PatientList';
import SearchFilter from './SearchFilter';
import PatientDetail from './PatientDetail';
import { IoFilter } from "react-icons/io5";
import { fetchPatientsAPI } from '../Services/allAPIs'; // Import your API function
import '../components/styles/PatientDashboard.css';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [patientsPerPage] = useState(5);

   
        const getPatients = async () => {
            try {
                if(sessionStorage.getItem('token')){
                    const token=sessionStorage.getItem('token')
                    const reqHeader={
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+ token  
                    }
                    const response = await fetchPatientsAPI(reqHeader);
                    setPatients(response.data);
                }
               
            } catch (error) {
                console.error("Failed to fetch patients:", error);
            }
        };
        useEffect(() => {
        getPatients();
    }, []);

    const handlePatientSelect = (patient) => {
        setSelectedPatient(patient);
    };

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination Logic
    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

    const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container patient-dashboard bg-light mt-5 p-5">
            <h1 className="mb-4">Patient Dashboard</h1>
            <div className="row mb-3 ">
                <div className="col-md-4">
                    <SearchFilter 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm} 
                    />
                </div>
                <div className="col-md-8 text-end">
                    <Link to={`/authorization-requests`}>
                    <button className="btn btn-primary" disabled><IoFilter /> View Prior Authorization Requests</button>
                    </Link>
                </div>
            </div>
            <PatientList 
                patients={currentPatients} 
                onSelect={handlePatientSelect} 
            />
            {selectedPatient && <PatientDetail patient={selectedPatient} />}

            {/* Pagination Controls */}
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default PatientDashboard;

// import React, { useState } from 'react';
// import PatientList from './PatientList';
// import SearchFilter from './SearchFilter';
// import PatientDetail from './PatientDetail'; // Ensure this is imported if you're using it
// import { IoFilter } from "react-icons/io5";
// import '../components/styles/PatientDashboard.css'
// const PatientDashboard = () => {
//     // Static patient data for demo
//     const patientData = [
//         { id: 1, name: "Dr. Iqbal Chowdhury", age: 45, condition: "Diabetes" },
//         { id: 2, name: "Alice Smith", age: 30, condition: "Hypertension" },
//         { id: 3, name: "John Doe", age: 38, condition: "Asthma" },
//         { id: 4, name: "Jane Doe", age: 50, condition: "Heart Disease" },
//         { id: 5, name: "Mike Johnson", age: 62, condition: "Arthritis" },
//         { id: 6, name: "Emily Davis", age: 27, condition: "Migraine" },
//         { id: 7, name: "Chris Brown", age: 33, condition: "Allergy" },
//         { id: 8, name: "Kate Wilson", age: 29, condition: "Cholesterol" },
//         { id: 9, name: "Tom Harris", age: 55, condition: "Depression" },
//         { id: 10, name: "Sara Conner", age: 40, condition: "Anemia" },
//         // Add more static patients as needed
//     ];

//     const [patients] = useState(patientData);
//     const [selectedPatient, setSelectedPatient] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [patientsPerPage] = useState(5); // Change this value to set how many patients per page

//     const handlePatientSelect = (patient) => {
//         setSelectedPatient(patient);
//     };

//     const filteredPatients = patients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     // Pagination Logic
//     const indexOfLastPatient = currentPage * patientsPerPage;
//     const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
//     const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

//     const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div className="container patient-dashboard bg-light mt-5 p-5">
//             <h1 className="mb-4">Patient Dashboard</h1>
//             <>
//                 <div className="row mb-3 ">
//                     <div className="col-md-4">
//                         <SearchFilter 
//                             searchTerm={searchTerm} 
//                             setSearchTerm={setSearchTerm} 
                            
//                         />
//                     </div>
//                     <div className="col-md-8 text-end">
//                         <button className="btn btn-primary" disabled><IoFilter /> Filter</button> {/* Disabled for demo */}
//                     </div>
//                 </div>
//                 <PatientList 
//                     patients={currentPatients} 
//                     onSelect={handlePatientSelect} 
//                 />
//                 {selectedPatient && <PatientDetail patient={selectedPatient} />}

//                 {/* Pagination Controls */}
//                 <nav>
//                     <ul className="pagination justify-content-center">
//                         {Array.from({ length: totalPages }, (_, index) => (
//                             <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                                 <button className="page-link" onClick={() => handlePageChange(index + 1)}>
//                                     {index + 1}
//                                 </button>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//             </>
//         </div>
//     );
// };

// export default PatientDashboard;




// import React, { useState } from 'react';
// import PatientList from './PatientList'; // Assuming PatientList is a separate component
// import SearchFilter from './SearchFilter';

// const PatientDashboard = () => {
//     const [patients] = useState([
//         { id: 1, name: 'John Doe', age: 30, condition: 'Flu' },
//         { id: 2, name: 'Jane Smith', age: 25, condition: 'Cold' },
//         // Add more mock patients here for design purposes
//     ]);
//     const [searchTerm, setSearchTerm] = useState('');

//     // Simulated filtered patients for design
//     const filteredPatients = patients.filter(patient =>
//         patient.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="container mt-4">
//             <h1 className="mb-4">Patient Dashboard</h1>
//             <SearchFilter 
//                 searchTerm={searchTerm} 
//                 setSearchTerm={setSearchTerm} 
//             />
//             <PatientList 
//                 patients={filteredPatients} 
//             />
//         </div>
//     );
// };

// export default PatientDashboard;
