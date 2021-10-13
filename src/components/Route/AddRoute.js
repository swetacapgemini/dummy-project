import React, { Component } from 'react';
import RouteService from '../Route/RouteService';
import { Link } from "react-router-dom";

class AddRoute extends Component {
    constructor(props){
        super(props)
        this.state={
          id:this.props.match.params.id,
          routeId:"",
          routeFrom:"",
          routeTo:"",
          distance:"" 
    }
    this.changeRouteIdHandler=this.changeRouteIdHandler.bind(this);
    this.changeRouteFromHandler=this.changeRouteFromHandler.bind(this);
    this.changeRouteToHandler=this.changeRouteToHandler.bind(this);
    this.changeDistanceHandler=this.changeDistanceHandler.bind(this);
    this.saveorUpdateRoute=this.saveorUpdateRoute.bind(this);
}

componentDidMount(){
    if(this.state.id === '_add'){
        return
    }
    else{
        RouteService.getRouteById(this.state.id).then((res)=>{
            let route= res.data;
            this.setState({routeId:route.routeId,routeFrom:route.routeFrom, routeTo:route.routeTo,distance:route.distance,
            
        });
        });
        }
    }
    
saveorUpdateRoute= (e) => {
    e.preventDefault();
    let route={routeId:this.state.routeId,routeFrom:this.state.routeFrom, routeTo:this.state.routeTo,distance:this.state.distance};
    console.log('route=> '+ JSON.stringify(route));
    if(this.state.id === '_add'){
        RouteService.addRoute(route).then(res=>{
            this.props.history.push('/route/viewAllroute');
                });
    }
    else{
   RouteService.updateRoute(this.state.id,route).then( res=>{
       this.props.history.push('/route/viewAllroute');
   });
}
}
changeRouteIdHandler= (event)=>{
    this.setState({routeId:event.target.value});
}
   
changeRouteFromHandler= (event)=>{
    this.setState({routeFrom:event.target.value});
}
   
changeRouteToHandler= (event)=>{
    this.setState({routeTo:event.target.value});
}
   
changeDistanceHandler= (event)=>{
    this.setState({distance:event.target.value});
}
cancel(){
    this.props.history.push('/route/viewAllroute');
}
getTitle(){
    if(this.state.routeId===-1){
        return  <h3 className="text-center">ADD ROUTE</h3>
    }
    else{
        return  <h3 className="text-center">UPDATE ROUTE</h3>
    }
}
    render() {
        return (
            <div>
                <li className="nav-item">
            <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
            </li>
            <div className="container">
            <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
           {
               this.getTitle()
        }
            <div className="card-body">
            <form>
            <div className="form-group">
<label>ROUTE ID</label>
<input placeholder="Route ID" name="routeID" className="form-control" value={this.state.routeId} onChange={this.changeRouteIdHandler}/>
</div>

<div className="form-group">
<label>Route from</label>
<input placeholder="Route from" name="routefrom" className="form-control" value={this.state.routeFrom} onChange={this.changeRouteFromHandler}/>
</div>
<div className="form-group">
<label>Route To</label>
<input placeholder="Route to" name="route to" className="form-control" value={this.state.routeTo} onChange={this.changeRouteToHandler}/>
</div>
<div className="form-group">
<label> Distance</label>
<input placeholder="Distance" name="distance" className="form-control" value={this.state.distance} onChange={this.changeDistanceHandler}/>
</div>

<button className="btn btn-success" onClick={this.saveorUpdateRoute}>Save</button>
<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

            </form>
            
            </div>
            </div>
            </div>
            </div>
            <Link to={'route/viewallroute'}><button className="btn btn-success" >Back</button></Link>
            </div>
        )
    }
}

export default AddRoute