// import React, { useState } from 'react'

// function PriorAuthorizationForm({ selectedPatient }) {
//     const [formData, setFormData] = useState({
//         treatmentType: '',
//         insurancePlan: '',
//         dateOfService: '',
//         diagnosisCode: ''
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.treatmentType) newErrors.treatmentType = 'Treatment Type is required.';
//         if (!formData.insurancePlan) newErrors.insurancePlan = 'Insurance Plan is required.';
//         if (!formData.dateOfService) newErrors.dateOfService = 'Date of Service is required.';
//         if (!formData.diagnosisCode) newErrors.diagnosisCode = 'Diagnosis Code is required.';
//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length === 0) {
//             // Submit the form data
//             console.log('Form submitted:', formData);
//             // Reset the form or perform other actions
//         } else {
//             setErrors(validationErrors);
//         }
//     };
//   return (
//     <div className="prior-authorization-form mt-4">
//     <h2>Prior Authorization Request for {selectedPatient.name}</h2>
//     <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//             <label htmlFor="treatmentType" className="form-label">Treatment Type</label>
//             <input
//                 type="text"
//                 className={`form-control ${errors.treatmentType ? 'is-invalid' : ''}`}
//                 id="treatmentType"
//                 name="treatmentType"
//                 value={formData.treatmentType}
//                 onChange={handleChange}
//             />
//             {errors.treatmentType && <div className="invalid-feedback">{errors.treatmentType}</div>}
//         </div>

//         <div className="mb-3">
//             <label htmlFor="insurancePlan" className="form-label">Insurance Plan</label>
//             <input
//                 type="text"
//                 className={`form-control ${errors.insurancePlan ? 'is-invalid' : ''}`}
//                 id="insurancePlan"
//                 name="insurancePlan"
//                 value={formData.insurancePlan}
//                 onChange={handleChange}
//             />
//             {errors.insurancePlan && <div className="invalid-feedback">{errors.insurancePlan}</div>}
//         </div>

//         <div className="mb-3">
//             <label htmlFor="dateOfService" className="form-label">Date of Service</label>
//             <input
//                 type="date"
//                 className={`form-control ${errors.dateOfService ? 'is-invalid' : ''}`}
//                 id="dateOfService"
//                 name="dateOfService"
//                 value={formData.dateOfService}
//                 onChange={handleChange}
//             />
//             {errors.dateOfService && <div className="invalid-feedback">{errors.dateOfService}</div>}
//         </div>

//         <div className="mb-3">
//             <label htmlFor="diagnosisCode" className="form-label">Diagnosis Code</label>
//             <input
//                 type="text"
//                 className={`form-control ${errors.diagnosisCode ? 'is-invalid' : ''}`}
//                 id="diagnosisCode"
//                 name="diagnosisCode"
//                 value={formData.diagnosisCode}
//                 onChange={handleChange}
//             />
//             {errors.diagnosisCode && <div className="invalid-feedback">{errors.diagnosisCode}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Submit Request</button>
//     </form>
// </div>
//   )
// }

// export default PriorAuthorizationForm

// import React, { useState } from 'react';
// import '../components/styles/PriorAuthorizationForm.css'
// import { priorAuthorizationAPI } from '../Services/allAPIs';

// function PriorAuthorizationForm({ selectedPatient }) {
//     const [formData, setFormData] = useState({
//         treatmentType: '',
//         insurancePlan: '',
//         dateOfService: '',
//         diagnosisCode: ''
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.treatmentType) newErrors.treatmentType = 'Treatment Type is required.';
//         if (!formData.insurancePlan) newErrors.insurancePlan = 'Insurance Plan is required.';
//         if (!formData.dateOfService) newErrors.dateOfService = 'Date of Service is required.';
//         if (!formData.diagnosisCode) newErrors.diagnosisCode = 'Diagnosis Code is required.';
//         return newErrors;
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const validationErrors = validateForm();
//         if (Object.keys(validationErrors).length === 0) {
//             try {
//                 if (sessionStorage.getItem('token')) {
//                     const token = sessionStorage.getItem('token');
//                     const reqHeader = {
//                         "Content-Type": "application/json",
//                         "Authorization": "Bearer " + token
//                     };
//            // prior authorization
//            const patientId = selectedPatient._id; // Get patient ID from selectedPatient
//            const response = await priorAuthorizationAPI(patientId, { ...reqHeader, body: JSON.stringify(formData) });
// }
//                 setSuccessMessage('Authorization request submitted successfully!');
//                 setFormData({
//                     treatmentType: '',
//                     insurancePlan: '',
//                     dateOfService: '',
//                     diagnosisCode: ''
//                 });
//             } catch (error) {
//                 setErrorMessage('Failed to submit the request. Please try again.');
//             }
//         } else {
//             setErrors(validationErrors);
//         }
//     };


//     return (
//         <div className="container prior-authorization-form mt-5 p-5 bg-light">
//             <h2>Prior Authorization Request for {selectedPatient ? selectedPatient.name : "Patient"}</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="treatmentType" className="form-label">Treatment Type</label>
//                     <input
//                         type="text"
//                         className={`form-control ${errors.treatmentType ? 'is-invalid' : ''}`}
//                         id="treatmentType"
//                         name="treatmentType"
//                         value={formData.treatmentType}
//                         onChange={handleChange}
//                     />
//                     {errors.treatmentType && <div className="invalid-feedback">{errors.treatmentType}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="insurancePlan" className="form-label">Insurance Plan</label>
//                     <input
//                         type="text"
//                         className={`form-control ${errors.insurancePlan ? 'is-invalid' : ''}`}
//                         id="insurancePlan"
//                         name="insurancePlan"
//                         value={formData.insurancePlan}
//                         onChange={handleChange}
//                     />
//                     {errors.insurancePlan && <div className="invalid-feedback">{errors.insurancePlan}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="dateOfService" className="form-label">Date of Service</label>
//                     <input
//                         type="date"
//                         className={`form-control ${errors.dateOfService ? 'is-invalid' : ''}`}
//                         id="dateOfService"
//                         name="dateOfService"
//                         value={formData.dateOfService}
//                         onChange={handleChange}
//                     />
//                     {errors.dateOfService && <div className="invalid-feedback">{errors.dateOfService}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="diagnosisCode" className="form-label">Diagnosis Code</label>
//                     <input
//                         type="text"
//                         className={`form-control ${errors.diagnosisCode ? 'is-invalid' : ''}`}
//                         id="diagnosisCode"
//                         name="diagnosisCode"
//                         value={formData.diagnosisCode}
//                         onChange={handleChange}
//                     />
//                     {errors.diagnosisCode && <div className="invalid-feedback">{errors.diagnosisCode}</div>}
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit Request</button>
//             </form>
//         </div>
//     );
// }

// export default PriorAuthorizationForm;

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams
// import '../components/styles/PriorAuthorizationForm.css';
// import { priorAuthorizationAPI } from '../Services/allAPIs';

// function PriorAuthorizationForm() {
//     const { patientId } = useParams(); // Get patientId from URL
//     console.log(patientId);
    
//     const [formData, setFormData] = useState({
//         treatmentType: '',
//         insurancePlan: '',
//         dateOfService: '',
//         diagnosisCode: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

    
//     const validateForm = () => {
//         const newErrors = {};
//         if (!formData.treatmentType) newErrors.treatmentType = 'Treatment Type is required.';
//         if (!formData.insurancePlan) newErrors.insurancePlan = 'Insurance Plan is required.';
//         if (!formData.dateOfService) newErrors.dateOfService = 'Date of Service is required.';
//         if (!formData.diagnosisCode) newErrors.diagnosisCode = 'Diagnosis Code is required.';
//         return newErrors;
//     };

// console.log(formData);

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//         try {
//             if (sessionStorage.getItem('token')) {
//                 const token = sessionStorage.getItem('token');
//                 const reqHeader = {
//                     "Authorization": "Bearer " + token
//                 };

//                 // Create FormData and append form fields
//                 const reqBody = new FormData();
//                 reqBody.append("treatmentType", formData.treatmentType);
//                 reqBody.append("insurancePlan", formData.insurancePlan);
//                 reqBody.append("dateOfService", formData.dateOfService);
//                 reqBody.append("diagnosisCode", formData.diagnosisCode);

//                 // Send the FormData with the API call
//                 const response = await priorAuthorizationAPI(reqBody, reqHeader);
//                 console.log(response);
                
//                 setSuccessMessage('Authorization request submitted successfully!');
//                 setFormData({
//                     treatmentType: '',
//                     insurancePlan: '',
//                     dateOfService: '',
//                     diagnosisCode: ''
//                 });
//                 setErrorMessage('');
//             }
//         } catch (error) {
//             setErrorMessage('Failed to submit the request. Please try again.');
//             setSuccessMessage('');
//         }
//     } else {
//         setErrors(validationErrors);
//     }
// };
// console.log(`Requesting: /patients/${patientId}/authorization`);
//     return (
//         <div className="container prior-authorization-form mt-5 p-5 bg-light">
//             <h5>Prior Authorization Request for Patient {patientId}</h5>
//             <form onSubmit={handleSubmit}>
//                 {/* Form fields remain unchanged */}
//                 <div className="mb-3">
//                     <label htmlFor="treatmentType" className="form-label">Treatment Type</label>
//                     <input
//                         type="text"
//                         className={`form-control ${errors.treatmentType ? 'is-invalid' : ''}`}
//                         id="treatmentType"
//                         name="treatmentType"
//                         value={formData.treatmentType}
//                         onChange={(e) => setFormData({ ...formData, treatmentType: e.target.value })}
//                     />
//                     {errors.treatmentType && <div className="invalid-feedback">{errors.treatmentType}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="insurancePlan" className="form-label">Insurance Plan</label>
//                     <input
//                         type="text"
//                         className={`form-control ${errors.insurancePlan ? 'is-invalid' : ''}`}
//                         id="insurancePlan"
//                         name="insurancePlan"
//                         value={formData.insurancePlan}
//                         onChange={(e) => setFormData({ ...formData, insurancePlan: e.target.value })}
//                     />
//                     {errors.insurancePlan && <div className="invalid-feedback">{errors.insurancePlan}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="dateOfService" className="form-label">Date of Service</label>
//                     <input
//                         type="date"
//                         className={`form-control ${errors.dateOfService ? 'is-invalid' : ''}`}
//                         id="dateOfService"
//                         name="dateOfService"
//                         value={formData.dateOfService}
//                         onChange={(e) => setFormData({ ...formData, dateOfService: e.target.value })}
//                     />
//                     {errors.dateOfService && <div className="invalid-feedback">{errors.dateOfService}</div>}
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="diagnosisCode" className="form-label">Diagnosis Code</label>
//                     <input
//                         type="text"
//                         className={`form-control ${errors.diagnosisCode ? 'is-invalid' : ''}`}
//                         id="diagnosisCode"
//                         name="diagnosisCode"
//                         value={formData.diagnosisCode}
//                         onChange={(e) => setFormData({ ...formData, diagnosisCode: e.target.value })}
//                     />
//                     {errors.diagnosisCode && <div className="invalid-feedback">{errors.diagnosisCode}</div>}
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit Request</button>
//                 {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
//                 {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//             </form>
//         </div>
//     );
// }

// export default PriorAuthorizationForm;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/styles/PriorAuthorizationForm.css';
import { priorAuthorizationAPI } from '../Services/allAPIs';

function PriorAuthorizationForm() {
    const { patientId } = useParams(); // Get patientId from URL
    const [formData, setFormData] = useState({
        treatmentType: '',
        insurancePlan: '',
        dateOfService: '',
        diagnosisCode: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.treatmentType) newErrors.treatmentType = 'Treatment Type is required.';
        if (!formData.insurancePlan) newErrors.insurancePlan = 'Insurance Plan is required.';
        if (!formData.dateOfService) newErrors.dateOfService = 'Date of Service is required.';
        if (!formData.diagnosisCode) newErrors.diagnosisCode = 'Diagnosis Code is required.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            try {
                if (sessionStorage.getItem('token')) {
                    const token = sessionStorage.getItem('token');
                    const reqHeader = {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    };

                    const reqBody = {
                        treatmentType: formData.treatmentType,
                        insurancePlan: formData.insurancePlan,
                        dateOfService: formData.dateOfService, // Ensure date is in YYYY-MM-DD format
                        diagnosisCode: formData.diagnosisCode
                    };

                    console.log('Request Body:', reqBody); // Log request body
                    const response = await priorAuthorizationAPI(patientId, reqBody, reqHeader);
                    console.log('Response:', response); // Log response

                    setSuccessMessage('Authorization request submitted successfully!');
                    setFormData({
                        treatmentType: '',
                        insurancePlan: '',
                        dateOfService: '',
                        diagnosisCode: ''
                    });
                    setErrorMessage('');
                }
            } catch (error) {
                console.error('Error submitting request:', error);
                setErrorMessage('Failed to submit the request. Please try again.');
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container prior-authorization-form mt-5 p-5 bg-light">
            <h5>Prior Authorization Request for Patient {patientId}</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="treatmentType" className="form-label">Treatment Type</label>
                    <input
                        type="text"
                        className={`form-control ${errors.treatmentType ? 'is-invalid' : ''}`}
                        id="treatmentType"
                        name="treatmentType"
                        value={formData.treatmentType}
                        onChange={handleChange}
                    />
                    {errors.treatmentType && <div className="invalid-feedback">{errors.treatmentType}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="insurancePlan" className="form-label">Insurance Plan</label>
                    <input
                        type="text"
                        className={`form-control ${errors.insurancePlan ? 'is-invalid' : ''}`}
                        id="insurancePlan"
                        name="insurancePlan"
                        value={formData.insurancePlan}
                        onChange={handleChange}
                    />
                    {errors.insurancePlan && <div className="invalid-feedback">{errors.insurancePlan}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="dateOfService" className="form-label">Date of Service</label>
                    <input
                        type="date"
                        className={`form-control ${errors.dateOfService ? 'is-invalid' : ''}`}
                        id="dateOfService"
                        name="dateOfService"
                        value={formData.dateOfService}
                        onChange={handleChange}
                    />
                    {errors.dateOfService && <div className="invalid-feedback">{errors.dateOfService}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="diagnosisCode" className="form-label">Diagnosis Code</label>
                    <input
                        type="text"
                        className={`form-control ${errors.diagnosisCode ? 'is-invalid' : ''}`}
                        id="diagnosisCode"
                        name="diagnosisCode"
                        value={formData.diagnosisCode}
                        onChange={handleChange}
                    />
                    {errors.diagnosisCode && <div className="invalid-feedback">{errors.diagnosisCode}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Submit Request</button>
                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default PriorAuthorizationForm;
