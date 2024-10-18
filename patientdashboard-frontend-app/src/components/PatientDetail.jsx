import React, { useEffect, useState } from 'react';
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { fetchApatientAPI } from '../Services/allAPIs'; 
import '../components/styles/PatientDetail.css';


const PatientDetail = () => {
    const { id } = useParams(); 
    const [patient, setPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPatient = async () => {
            try {
                if (sessionStorage.getItem('token')) {
                    const token = sessionStorage.getItem('token');
                    const reqHeader = {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    };
                    const response = await fetchApatientAPI(id, reqHeader); 
                    if (response.data) {
                        setPatient(response.data);
                    } else {
                        setError("Patient not found.");
                    }
                } else {
                    setError("No authentication token found.");
                }
            } catch (error) {
                setError("Failed to fetch patient data.");
                console.error("Failed to fetch patient:", error);
            } finally {
                setLoading(false);
            }
        };

        getPatient();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!patient) return <div>No patient found.</div>;

    return (
        <div className="container mt-4 patient-detail bg-light p-5">
            <h2>Patient Profile</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-3">
                        <div className="card-body patient-head">
                            <h4>{patient.name}</h4>
                            <h6 className="contacts-header">Contacts:</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <span className="contact-type"><CiPhone className="phone-icon" /></span> {patient.phone}
                                </li>
                                <li>
                                    <span className="contact-type"><IoLocationOutline /></span> {patient.address}
                                </li>
                                <li>
                                    <span className="contact-type"><MdOutlineEmail /></span> {patient.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="overview-header">Overview:</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="gender">Gender: <br /> {patient.gender}</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="dob">Date of Birth: <br /> {new Date(patient.dateOfBirth).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="city">City: <br /> {patient.city}</p>
                                </div>
                                <div className="col-md-6">
                                    <p className="register-date">Register Date: <br /> {new Date(patient.registerDate).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5 mb-4'>
                        <Link to={`/prior-authorization/${patient._id}`} className="btn btn-primary">Request Prior Authorization</Link>
                        
                    </div>
                    
                </div>

                <div className="col-md-8">
                    <h5 className="treatments-header">Past Treatments:</h5>
                    <ul className="list-group mb-3">
                        {patient.treatments && patient.treatments.length > 0 ? (
                            patient.treatments.map((treatment, index) => (
                                <li key={index} className="list-group-item">{treatment}</li>
                            ))
                        ) : (
                            <li className="list-group-item">No past treatments available.</li>
                        )}
                    </ul>

                    <h5 className="medication-history-header">Medication History:</h5>
                    <ul className="list-group mb-3">
                        {patient.medicationHistory && patient.medicationHistory.length > 0 ? (
                            patient.medicationHistory.map((medication, index) => (
                                <li key={index} className="list-group-item">{medication}</li>
                            ))
                        ) : (
                            <li className="list-group-item">No medication history available.</li>
                        )}
                    </ul>

                    <h5 className="lab-results-header">Lab Results:</h5>
                    <ul className="list-group">
                        {patient.labResults && patient.labResults.length > 0 ? (
                            patient.labResults.map(result => (
                                <li key={result._id} className="list-group-item d-flex justify-content-between align-items-center">
                                    {result.testName} <span>{result.result}</span>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">No lab results available.</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
