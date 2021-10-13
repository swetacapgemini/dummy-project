import React, { Component } from 'react';
import ReservationService from '../Reservation/ReservationService';
import { Link } from "react-router-dom";

class ViewReservation extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            reservation: {}
            
        }
    }

    componentDidMount(){
ReservationService.getReservationById(this.state.id).then( res=>{
    this.setState({reservation:res.data});
})

    }
    render() {
        return (
            <div>
                <li className="nav-item">
                 <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
                 </li>
                <div className="card" col-md-6 offset-md-3> 
                <h3 className="text-center">RESERVATION DETAILS </h3>
                <div className="card-body">
                <div className="row" >
                <label> Reservation ID   :</label>
                    <div>{this.state.reservation.reservationId}</div>
                    </div>
                    
                    <div className="row">
                < label> Source :</label>
                    <div> {this.state.reservation.source}</div>
                    </div>
                    <div className="row">
                    <label> Destination :</label>
                    <div> {this.state.reservation.destination}</div>
                    </div>
                        <div className="row">
                    <label> Reservation Date:</label>
                        <div> {this.state.reservation.reservationDate}</div>
                        </div>
                        <div className="row">
                        <label> Time:</label>
                        <div> {this.state.reservation.reservationTime}</div>
                        </div>
                        <div className="row">
                        <label> Status:</label>
                        <div> {this.state.reservation.reservationStatus}</div>
                        </div>
                        <div className="row">
                        <label> Type:</label>
                        <div> {this.state.reservation.reservationType}</div>
                        </div>
                        <Link to={'/rest/api/reservation/viewallreservation'}><button className="btn btn-success">Back</button></Link>
                  </div></div>
                  </div>

                
        
        );
    }
}

export default ViewReservation;