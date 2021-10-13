import axios from 'axios';


const RES_API_BASE_URL = "http://localhost:9091/rest/api/reservation";
class ReservationService{
  getReservations(){

    return axios.get(RES_API_BASE_URL+'/viewallreservation');
    
  }
  getReservationById(reservationId){

    return axios.get(RES_API_BASE_URL+'/viewreservation/'+reservationId);
    
  }
  
  deleteReservation(reservationId){

    return axios.delete(RES_API_BASE_URL+'/deletereservation/'+reservationId);
    
  }
}

export default new ReservationService()