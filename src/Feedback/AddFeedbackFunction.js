import axios from 'axios'

export function registerFeedback(newFeedback){
    let apiUrl = 'http://localhost:9091/addfeedback'
    return axios.post(apiUrl,newFeedback,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}