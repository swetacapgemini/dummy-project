import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import './Admin.css'

class Admin extends Component {

    render() {
        return (
            <div> 
            <div class="topnav">
              
            <a href="#news">Admin Dashboad</a>
            
             <div class="topnav-right">
               
</div>

            <li className="nav-item">
            <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
            </li>
            <Container> 
      
                          <Link to={`/bus/viewallbus`}><Button style={style}>Bus Details </Button></Link>
                          <br></br>
                          <br></br>
                          <Link to={`/rest/api/reservation/viewallreservation`}><Button style={style}>Reservation Details </Button></Link>
                          <br></br>
                          <br></br>
                          <Link to={`route/viewallroute`}><Button style={style}>Route Details </Button></Link>
                          <br></br>
                          <br></br>
                          <Link to={`/rest/api/feedback/viewallfeedback`}><Button style={style}>FeedBack Details</Button></Link>
                          <br></br>
                          <br></br>
                          <Link to={`/rest/api/user/viewalluser`}><Button style={style}>User Details</Button></Link>
                          
                         </Container>
                         </div>
                         </div>
                       
                       
                                                                            
        )
    }
}
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



const style = {
        background: 'linear-gradient(45deg, #05716c 30%, #1fbfb8 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 50px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        marginLeft: "20px",
};
const errorStyle = {
    color: 'red'
};
export default Admin;