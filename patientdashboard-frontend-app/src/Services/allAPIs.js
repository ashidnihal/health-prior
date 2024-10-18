import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPIs";


// register api call

export const registerAPI =async(user)=>{
    return await commonAPI("post",`${serverURL}/register`,user,"")
}
// login api call

export const loginAPI =async(user)=>{
    return await commonAPI("post",`${serverURL}/login`,user,"")
}

// patient list
export const fetchPatientsAPI =async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/patientslist`,"",reqHeader)
}
// get a patient
export const fetchApatientAPI=async(patientId,reqHeader)=>{
    return await commonAPI("get",`${serverURL}/patients/${patientId}`,"",reqHeader)
}


export const priorAuthorizationAPI = async (patientId, reqBody, reqHeader) => {
    return await commonAPI("post", `${serverURL}/patients/${patientId}/authorization`, reqBody, reqHeader);
};

export const fetchAuthorizationRequestsAPI =async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/patients/prior/requests-list`,"",reqHeader)
}