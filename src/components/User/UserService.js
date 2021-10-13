import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:9091/rest/api/user";
class UserService{
  getUsers(){

    return axios.get( USER_API_BASE_URL+'/viewalluser');
    
  }
  getUserById(userLoginId){

    return axios.get(USER_API_BASE_URL+'/viewuser/'+userLoginId);
    
  }
  
  
}

export default new UserService()