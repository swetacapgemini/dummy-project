import axios from 'axios';


const BUS_API_BASE_URL = "http://localhost:9091/bus";
class BusService{
  getBuses(){

    return axios.get(BUS_API_BASE_URL+'/viewallbus');
    
  }
  addBus(bus){

    return axios.post(BUS_API_BASE_URL +'/addbus/_add',bus);
  }
  updateBus(busId,bus){

    return axios.put(BUS_API_BASE_URL +'/addbus/'+busId,bus);
  }
  getBusById(busId){

    return axios.get(BUS_API_BASE_URL+'/viewbus/'+busId);
    
  }
  deleteBus(busId){

    return axios.delete(BUS_API_BASE_URL+'/deletebus/'+busId);
    
  }
}

export default new BusService()