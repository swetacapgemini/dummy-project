import React, { Component } from 'react';
import BusService from './BusService';
import { Link } from "react-router-dom";

class ViewBus extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            bus: {}
            
        }
    }

    componentDidMount(){
BusService.getBusById(this.state.id).then( res=>{
    this.setState({bus:res.data});
})

    }
    render() {
        return (
            <div>
                <li className="nav-item">
               <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
                </li>
                <div className="card" col-md-6 offset-md-3> 
                <h3 className="text-center">VIEW BUS DETAILS </h3>
                <div className="card-body">
                <div className="row" >
                <label> Bus ID   :</label>
                    <div>{this.state.bus.busId}</div>
                    </div>
                    <div className="row">
                <label> Bus Name   : </label>
                    <div> {this.state.bus.busName}</div>
                    </div>
                    <div className="row">
                <label> Driver Name  :</label>
                    <div> {this.state.bus.driverName}</div>
                        </div>
                    <div className="row">
                < label> Route From :</label>
                    <div> {this.state.bus.routeFrom}</div>
                    </div>
                    <div className="row">
                    <label> Route to :</label>
                    <div> {this.state.bus.routeTo}</div>
                    </div>
                <div className="row">
                <label> bus Type</label>
                    <div> {this.state.bus.busType}</div>
                    </div>
                <div className="row">
                <label> Arrival Time</label>
                    <div> {this.state.bus.arrivalTime}</div>
                    </div>
                <div className="row">
                <label> Departure Time</label>
                    <div> {this.state.bus.departureTime}</div>
                    </div>
                    <div className="row">
                    <label> Seats</label>
                        <div> {this.state.bus.seats}</div>
                        </div>
                        <div className="row">
                    <label> Available Seats</label>
                        <div> {this.state.bus.avaiableSeats}</div>
                        </div>
                        <Link to={'/bus/viewallbus'}><button className="btn btn-success" >Back</button></Link>
                    </div>
                    </div>
            </div>
        );
    }
}

export default ViewBus;