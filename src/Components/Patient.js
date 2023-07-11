import React from "react";
import {useNavigate} from "react-router-dom";

const Patient=({patient, deletePatient}) =>{
    const navigate=useNavigate();
    const editPatient=(e, patientId) =>{
        e.preventDefault();
        navigate(`/editPatient/${patientId}`);
    };


    return(
        <tr key={patient.patientId}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    {patient.firstName}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    {patient.lastName}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    {patient.contactDetails}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    {patient.medicalHistory}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                    {patient.insuranceDetails}
                </div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                <a
                    onClick={(e, patientId) => editPatient(e, patient.patientId)}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
                >
                Edit
                </a>

                <a
                    onClick={(e, patientId) => deletePatient(e, patient.patientId)}
                    className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
                >
                Delete
                </a>

            </td>
            
        </tr>

    );
};

export default Patient;