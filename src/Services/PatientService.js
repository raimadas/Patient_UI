import axios from "axios";

const PATIENT_API_BASE_URL="http://localhost:8102/patient";

class PatientService{

    addPatient(patient){
        return axios.post(`${PATIENT_API_BASE_URL}/add`, patient);
    }

    getPatient(patientId){
        return axios.get(`${PATIENT_API_BASE_URL}/get/${patientId}`);
 
    }

    getAllPatients(){
        return axios.get(`${PATIENT_API_BASE_URL}/getAll`);
    }

    deletePatient(patientId){
        return axios.delete(`${PATIENT_API_BASE_URL}/delete/${patientId}`);

    }

    updatePatient(patient, patientId){
        return axios.put(`${PATIENT_API_BASE_URL}/update/${patientId}`, patient);     

    }

}

export default new PatientService();

