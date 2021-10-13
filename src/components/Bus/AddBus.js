import React, { Component } from 'react';
import BusService from './BusService';
import { Link } from "react-router-dom";

class AddBus extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            busId:"",
          busName:"",
          driverName:"",
          busType:"",
          routeFrom:"",
          routeTo:"",
          arrivalTime:"",
          departureTime:"",
          seats:"",
          avaiableSeats:"" 
    }
    this.changeBusIdHandler=this.changeBusIdHandler.bind(this);
    this.changeBusNameHandler=this.changeBusNameHandler.bind(this);
    this.changeDriverNameHandler=this.changeDriverNameHandler.bind(this);
    this.changeBustypeHandler=this.changeBustypeHandler.bind(this);
    this.changeRouteFromHandler=this.changeRouteFromHandler.bind(this);
    this.changeRouteToHandler=this.changeRouteToHandler.bind(this);
    this.changeArrivalTimeHandler=this.changeArrivalTimeHandler.bind(this);
    this.changeDepartureTimeHandler=this.changeDepartureTimeHandler.bind(this);
    this.changeSeatsHandler=this.changeSeatsHandler.bind(this);
    this.changeAvailableSeatsHandler=this.changeAvailableSeatsHandler.bind(this);
    this.saveOrUpdateBus=this.saveOrUpdateBus.bind(this);
}

componentDidMount(){
    if(this.state.id === '_add'){
        return
    }
    else{
        BusService.getBusById(this.state.id).then((res)=>{
            let bus= res.data;
            this.setState({busId:bus.busId, busName:bus.busName, driverName:bus.driverName,busType:bus.busType,routeFrom:bus.routeFrom, routeTo:bus.routeTo,arrivalTime:bus.arrivalTime, departureTime:bus.departureTime,seats:bus.seats,avaiableSeats:bus.avaiableSeats
            
        });
        });
        }
    }
    

    saveOrUpdateBus = (e) => {
        e.preventDefault();
        let bus = {busId: this.state.busId, busName: this.state.busName, driverName: this.state.driverName,busType:this.state.busType,routeFrom:this.state.routeFrom,routeTo:this.state.routeTo,arrivalTime:this.state.arrivalTime,departureTime:this.state.departureTime,seats:this.state.seats,avaiableSeats:this.state.avaiableSeats};
        console.log('bus => ' + JSON.stringify(bus));
        if(this.state.id === '_add'){
            BusService.addBus(bus).then(res =>{
                this.props.history.push('/bus/viewallbus');
            });
        }
        else{
            BusService.updateBus(this.state.id,bus ).then( res => {
                this.props.history.push('/bus/viewallbus');
            });
        }
    }
changeBusIdHandler= (event)=>{
    this.setState({busId:event.target.value});
}
changeBusNameHandler= (event)=>{
    this.setState({busName:event.target.value});
}
changeDriverNameHandler= (event)=>{
    this.setState({driverName:event.target.value});
}
   
changeBustypeHandler= (event)=>{
    this.setState({busType:event.target.value});
}
   
changeRouteFromHandler= (event)=>{
    this.setState({routeFrom:event.target.value});
}
   
changeRouteToHandler= (event)=>{
    this.setState({routeTo:event.target.value});
}
   
changeArrivalTimeHandler= (event)=>{
    this.setState({arrivalTime:event.target.value});
}
   
changeDepartureTimeHandler= (event)=>{
    this.setState({departureTime:event.target.value});
}
   
changeSeatsHandler= (event)=>{
    this.setState({seats:event.target.value});
}
   
changeAvailableSeatsHandler= (event)=>{
    this.setState({avaiableSeats:event.target.value});
}
cancel(){
    this.props.history.push('/bus/viewallbus');
}
getTitle(){
    if(this.state.id==='_add'){
        return  <h3 className="text-center">ADD BUS</h3>
    }
    else{
        return  <h3 className="text-center">UPDATE BUS</h3>
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
<label>Bus ID</label>
<input placeholder="Bus ID" name="busID" className="form-control" value={this.state.busId} onChange={this.changeBusIdHandler}/>
</div>
<div className="form-group">
<label>Bus Name</label>
<input placeholder="Bus Name" name="busName" className="form-control" value={this.state.busName} onChange={this.changeBusNameHandler}/>
</div>
<div className="form-group">
<label>Driver Name</label>
<input placeholder="Driver Name" name="driverName" className="form-control" value={this.state.driverName} onChange={this.changeDriverNameHandler}/>
</div>
<div className="form-group">
<label>Bus type</label>
<input placeholder="Bus Type" name="busType" className="form-control" value={this.state.busType} onChange={this.changeBustypeHandler}/>
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
<label>Arrival Time</label>
<input placeholder="Arrival Time" name="Arrival Time" className="form-control" value={this.state.arrivalTime} onChange={this.changeArrivalTimeHandler}/>
</div>
<div className="form-group">
<label>Departure Time</label>
<input placeholder="Departure Time " name="Departure Time" className="form-control" value={this.state.departureTime} onChange={this.changeDepartureTimeHandler}/>
</div>
<div className="form-group">
<label>Seats</label>
<input placeholder="Seats" name="Seats" className="form-control" value={this.state.seats} onChange={this.changeSeatsHandler}/>
</div>
<div className="form-group">
<label> Availableseats</label>
<input placeholder="Availableseats" name="Availableseats" className="form-control" value={this.state.avaiableSeats} onChange={this.changeAvailableSeatsHandler}/>
</div>

<button className="btn btn-success" onClick={this.saveOrUpdateBus}>Save</button>
 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

            </form>
            
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default AddBus