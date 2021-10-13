import axios from 'axios'

export function AdminLoginFun(newUser) {
    let apiUrl = "http://localhost:9091//admin/login";
    console.log(apiUrl);
    return axios.post(apiUrl, newUser,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}