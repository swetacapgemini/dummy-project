import axios from 'axios';


const FB_API_BASE_URL = "http://localhost:9091/rest/api/feedback";
class FeedbackService{
  getFeedbacks(){

    return axios.get(FB_API_BASE_URL+'/viewallfeedback');
    
  }
  getFeedbackById(feedBackId){

    return axios.get(FB_API_BASE_URL+'/viewfeedback/'+feedBackId);
    
  }
  
  deleteFeedback(feedBackId){

    return axios.delete(FB_API_BASE_URL+'/deletefeedback/'+feedBackId);
    
  }
}

export default new FeedbackService()