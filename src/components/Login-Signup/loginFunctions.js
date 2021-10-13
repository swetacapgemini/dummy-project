import axios from 'axios'

export function logUserIn(userCredentials) {
    let apiUrl = "http://localhost:9091/login/"+userCredentials.email+"/"+userCredentials.password;
    console.log(apiUrl);
    return axios.get(apiUrl, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
}


export function loadRoutes(){
    const authToken = sessionStorage.getItem('authToken' || '')
    let apiUrl = `http://localhost:8080/user/profile`
    return axios.get(apiUrl)
}

export function getCurrentUserDetails(authToken){
    const token =  authToken
    let apiUrl = `http://localhost:8080/user/profile`
    return axios.get(apiUrl)
}