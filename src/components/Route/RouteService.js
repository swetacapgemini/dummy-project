import axios from 'axios';


const ROUTE_API_BASE_URL = "http://localhost:9091/route";
class RouteService{
  getRoutes(){

    return axios.get(ROUTE_API_BASE_URL+'/viewallroute');
    
  }
  addRoute(route){

    return axios.post(ROUTE_API_BASE_URL +'/addroute/_add',route);
  }
  updateRoute(routeId,route){

    return axios.put(ROUTE_API_BASE_URL +'/addroute/'+routeId,route);
  }
  getRouteById(routeId){

    return axios.get(ROUTE_API_BASE_URL+'/viewroute/'+routeId);
    
  }
  deleteRoute(routeId){

    return axios.delete(ROUTE_API_BASE_URL+'/deleteroute/'+routeId);
    
  }
}

export default new RouteService()