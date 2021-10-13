import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'http://localhost:9091/addUser'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
