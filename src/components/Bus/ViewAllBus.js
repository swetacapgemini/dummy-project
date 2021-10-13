import React, { Component } from 'react';
import BusService from './BusService';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



class ViewAllBus extends Component {
    constructor(props){
        super(props)
        this.state={
            buses:[]
    }
    this.addBus=this.addBus.bind(this);
    this.updateBus=this.updateBus.bind(this);
    this.deleteBus=this.deleteBus.bind(this);
    this.viewBus=this.viewBus.bind(this);
    this.gotoRoute=this.gotoRoute.bind(this);
    this.gotoReservation=this.gotoReservation.bind(this);
    this.gotoFeedback=this.gotoFeedback.bind(this);
    this.gotoUser=this.gotoUser.bind(this);

    }
    
    componentDidMount(){
        BusService.getBuses().then((res)=>{
this.setState({buses: res.data});

        });
    }
    deleteBus(busId){
        BusService.deleteBus(busId).then( res=>{
            this.setState({buses:this.state.buses.filter(bus => bus.busId!==busId)});
        })
    }
    updateBus(busId){
        this.props.history.push(`/bus/addbus/${busId}`);
    }
    viewBus(busId){
        this.props.history.push(`/bus/viewbus/${busId}`);
    }
    addBus(){
        this.props.history.push('/bus/addbus/_add');
    }
    gotoRoute(){
        this.props.history.push('/route/viewallroute');
    }
    gotoReservation(){
        this.props.history.push('/rest/api/reservation/viewallreservation')
    }
    gotoFeedback(){
        this.props.history.push('/rest/api/feedback/viewallfeedback')
    }
    gotoUser(){
        this.props.history.push('/rest/api/user/viewalluser')
    }
    

    render() {
        return (
           
            <div>
            <li className="nav-item">
            <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
            </li>
              <h2 className="text-center">Bus List </h2> 
              <Link to={'/admin'}><button className="btn btn-success" >Back</button></Link> 
              <div className="container">
              <div className="row">
              <button className="btn btn-primary" onClick={this.addBus}> ADD BUS</button>
              
              <hr></hr>
              <div className="">
              <Box mx="auto" bgcolor="background.paper" p={1}>
             <Grid>
             <TableContainer component={Paper}>
                <Table border="2" bgcolor="#fffff1" class="table  table-bordered table-hover">
               <TableHead className="thead-dark">
                <TableRow >
                <StyledTableCell>busId</StyledTableCell>
                <StyledTableCell>busName</StyledTableCell>
                <StyledTableCell>busType</StyledTableCell>
                <StyledTableCell>driverName</StyledTableCell>
                <StyledTableCell>depatureTime</StyledTableCell>
                 <StyledTableCell>arrivalTime</StyledTableCell>
                 <StyledTableCell>availableSeats</StyledTableCell>
                 <StyledTableCell>seats</StyledTableCell>
                 <StyledTableCell>routeFrom</StyledTableCell>
                 <StyledTableCell>routeTo</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

{
    this.state.buses.map(
        bus=>
        <tr key={bus.busId}>
        <td>{bus.busId}</td>
        <td>{bus.busName}</td>
        <td>{bus.driverName}</td>
        <td>{bus.busType}</td>
        <td>{bus.routeFrom}</td>
        <td>{bus.routeTo}</td>
        <td>{bus.arrivalTime}</td>
        <td>{bus.departureTime}</td>
        <td>{bus.seats}</td>
        <td>{bus.avaiableSeats}</td>
       <td>
           <button onClick={()=>this.updateBus(bus.busId)} className="btn btn-info">UPDATE</button>
           
           <button onClick={()=>this.deleteBus(bus.busId)} className="btn btn-danger">DELETE</button>

           <button onClick={()=>this.viewBus(bus.busId)} className="btn btn-info">VIEW</button>
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
            </div>
            </div>
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

export default ViewAllBus;