import React, { Component } from 'react';
import ReservationService from '../Reservation/ReservationService';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


class ViewAllReservation extends Component {
    constructor(props){
        super(props)
        this.state={
            reservations:[]
    }
    this.deleteReservation=this.deleteReservation.bind(this);
    this.viewReservation=this.viewReservation.bind(this);
    }
    componentDidMount(){
        ReservationService.getReservations().then((res)=>{
this.setState({reservations: res.data});

        });
    }
    viewReservation(reservationId){
        this.props.history.push(`/rest/api/reservation/viewreservation/${reservationId}`);
    }
    
    deleteReservation(reservationId){
        ReservationService.deleteReservation(reservationId).then( res=>{
            this.setState({reservations:this.state.reservations.filter(reservation => reservation.reservationId!==reservationId)});
        })
    }

    render() {
        return (
            
            
            <div className="">
            <li className="nav-item">
            <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
            </li>
             <h3 className="text-center">RESERVATION DETAILS </h3>
             <Link to={'/admin'}><button className="btn btn-success">Back</button></Link>
            
      
      <Box mx="auto" bgcolor="background.paper" p={1}>
      <Grid>
        <TableContainer component={Paper}>
          <Table border="2" bgcolor="#fffff1" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow >
                <StyledTableCell>Reservation Id</StyledTableCell>
                <StyledTableCell>Source</StyledTableCell>
                <StyledTableCell>Destination</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                 <StyledTableCell>Status</StyledTableCell>
                 <StyledTableCell>Type</StyledTableCell>
                 <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
{
    this.state.reservations.map(
        reservation=>
        <tr key={reservation.reservationId}>
        <td>{reservation.source}</td>
        <td>{reservation.destination}</td>
        <td>{reservation.reservationDate}</td>
        <td>{reservation.reservationTime}</td>
        <td>{reservation.reservationStatus}</td>
        <td>{reservation.reservationType}</td>

       <td>
       <button onClick={()=>this.viewReservation(reservation.reservationId)} className="btn btn-info">VIEW</button>
           <button onClick={()=>this.deleteReservation(reservation.reservationId)} className="btn btn-danger">DELETE</button>
       </td>
        </tr>
        
    )
}

        </TableBody>
          </Table>
        </TableContainer>
          </Grid>
         </Box>
        
        </div>
            
            
        );
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
  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign:"center"
    
    },
    body: {
      fontSize: 8,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
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

export default ViewAllReservation;