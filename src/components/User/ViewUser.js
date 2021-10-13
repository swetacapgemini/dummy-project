import React, { Component } from 'react';
import UserService from './UserService';
import { Link } from "react-router-dom";


class ViewUser extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            user: {}
            
        }
    }

    componentDidMount(){
UserService.getUserById(this.state.id).then( res=>{
    this.setState({user:res.data});
})

    }
    render() {
        return (
            <div>
                <li className="nav-item">
            <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
            </li>
                <div className="card" col-md-6 offset-md-3> 
                <h3 className="text-center">VIEW USER DETAILS </h3>
                <div className="card-body">
                <div className="row" >
                <label> UserLoginId :</label>
                    <div>{this.state.user.userLoginId}</div>
                    </div>
                    
                    <div className="row">
                < label> User Name :</label>
                    <div> {this.state.user.userName}</div>
                    </div>
                    <div className="row">
                    <label>Password :</label>
                    <div> {this.state.user.password}</div>
                    </div>
                        <div className="row">
                    <label> First Name :</label>
                        <div> {this.state.user.firstName}</div>
                        </div>
                        <div className="row">
                        <label> Last Name</label>
                        <div> {this.state.user.lastName}</div>
                        </div>
                        <div className="row">
                        <label> Contact:</label>
                        <div> {this.state.user.contact}</div>
                        </div>
                        <div className="row">
                        <label> Email:</label>
                        <div> {this.state.user.email}</div>
                        </div>
                        <Link to={'/rest/api/user/viewalluser'}><button className="btn btn-success" >Back</button></Link>
                  </div></div>
                  </div>

                
        
        );
    }
}

export default ViewUser;