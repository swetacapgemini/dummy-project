import React, { Component } from 'react';
import RouteService from '../Route/RouteService';
import { Link } from "react-router-dom";

class ViewRoute extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            route: {}
            
        }
    }

    componentDidMount(){
RouteService.getRouteById(this.state.id).then( res=>{
    this.setState({route:res.data});
})

    }
    render() {
        return (
            <div>
                <li className="nav-item">
            <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
            </li>
                <div className="card" col-md-6 offset-md-3> 
                <h3 className="text-center">VIEW ROUTE DETAILS </h3>
                <div className="card-body">
                <div className="row" >
                <label> Route ID   :</label>
                    <div>{this.state.route.routeId}</div>
                    </div>
                    
                    <div className="row">
                < label> Route From :</label>
                    <div> {this.state.route.routeFrom}</div>
                    </div>
                    <div className="row">
                    <label> Route to :</label>
                    <div> {this.state.route.routeTo}</div>
                    </div>
                        <div className="row">
                    <label> Distance:</label>
                        <div> {this.state.route.distance}</div>
                        <Link to={'/route/viewallroute'}><button className="btn btn-success" >Back</button></Link>
                        </div>
                       
                    </div>
                    </div>
                
            </div>
        );
    }
}

export default ViewRoute;