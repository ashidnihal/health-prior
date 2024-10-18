import React from 'react';
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';
const PatientList = ({ patients }) => {
    return (
        <div className="table-responsive">
        <table className="table  table-striped mt-3">
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Condition</th>
                    <th  className='text-center'>View</th>
                </tr>
            </thead>
            <tbody>
                {patients.length > 0 ? (
                    patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.condition}</td>
                            <td className='text-center'><Link to={`/patient/${patient._id}`}>
                                    <MdRemoveRedEye />
                                </Link></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="text-center">
                            No patients found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    );
};

export default PatientList;
