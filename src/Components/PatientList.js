import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import PatientService from "../Services/PatientService";
import Patient from "./Patient";


const PatientList =() =>{
    const navigate=useNavigate();

    const [loading, setLoading]=useState(true);
    const[patient, setPatient]=useState(null);

    useEffect(()=>{
        const fetchData=async() =>{
            setLoading(true);
            try{
                const response=await PatientService.getAllPatients();
                setPatient(response.data);
            }catch(error){
                setPatient([]);
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deletePatient=(e, patientId) =>{
        e.preventDefault();
        PatientService.deletePatient(patientId).then((res) =>{
            if(patient){
                setPatient((prevElement)=>{
                    return prevElement.filter((patient)=>patient.patientId !== patientId); 
                });
            }
        });
    };


    return(
        <div className="container mx-auto my-8">
            <div className="h-12">
                <button
                    onClick={() => navigate("/addPatient")}
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Patient
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                First Name
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Last Name
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Contact Details
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Medical History
                            </th>
                            <th className="text-left font-medium text-blue-500 uppercase tracking-wider py-3 px-6">
                                Insurance Details
                            </th>
                        </tr>
                    </thead>
                    {!loading &&(
                        <tbody className="bg-white">
                            {patient.map((patient)=>(
                                <Patient
                                    patient={patient}
                                    deletePatient={deletePatient}
                                    key={patient.patientId}>
                                </Patient>
                            ))}

                        </tbody>
                    )}
                </table>
            </div>
        </div>

    );
};

export default PatientList;