import axios from 'axios'

export async function getRoutesFromApi(startCity, destination,user) {
    const baseURL = "http://localhost:9091/rest/api/reservation/addReservation/"+startCity+"/"+destination+"/"+user;
    let incoming = await axios.get(baseURL)
    return incoming
}