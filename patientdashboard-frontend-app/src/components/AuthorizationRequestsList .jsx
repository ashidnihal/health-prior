import React, { useEffect, useState } from 'react';
import { fetchAuthorizationRequestsAPI } from '../Services/allAPIs'; 
import'./styles/AuthorizationRequestsList.css'

const AuthorizationRequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (sessionStorage.getItem('token')) {
          const token = sessionStorage.getItem('token');
          const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
          };

          const response = await fetchAuthorizationRequestsAPI(reqHeader);
          setRequests(response.data);
        }
      } catch (error) {
        console.error('Error fetching authorization requests:', error);
        setError('Failed to fetch requests. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='container authorizationrequests bg-light mt-5 p-5'>
    <h2 className='mb-5'>Prior Authorization Requests</h2>
    
    <div className="table-responsive"> 
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Treatment Type</th>
            <th>Insurance Plan</th>
            <th>Date of Service</th>
            <th>Diagnosis Code</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((request) => (
              <tr key={request._id}>
                <td>{request.patientId.name}</td>
                <td>{request.treatmentType}</td>
                <td>{request.insurancePlan}</td>
                <td>{new Date(request.dateOfService).toLocaleDateString()}</td>
                <td>{request.diagnosisCode}</td>
                <td>{request.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No prior authorization requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  
  );
};

export default AuthorizationRequestsList;
