import axios from 'axios';

const API_URL = 'http://localhost:3000/student';



export const getAllStudents = () =>{
    return axios.get(API_URL)
}

export const postStudent = (student) =>{
    return axios.post(API_URL,student)
}

export const updateStudent = (id,student) =>{
    return axios.put(`${API_URL}/${id}`,student);

}

export const deleteStudent = (id,student) =>{
    return axios.delete(`${API_URL}/${id}`,student);
}


