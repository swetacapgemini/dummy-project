import React, { Component } from 'react';
import RouteService from '../Route/RouteService';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


class ViewAllRoute extends Component {
    constructor(props){
        super(props)
        this.state={
            routes:[]
    }
    this.addRoute=this.addRoute.bind(this);
    this.updateRoute=this.updateRoute.bind(this);
    this.deleteRoute=this.deleteRoute.bind(this);
    this.viewRoute=this.viewRoute.bind(this);
    }
    componentDidMount(){
        RouteService.getRoutes().then((res)=>{
this.setState({routes: res.data});

        });
    }
    deleteRoute(routeId){
        RouteService.deleteRoute(routeId).then( res=>{
            this.setState({routes:this.state.routes.filter(route => route.routeId!==routeId)});
        })
    }
    updateRoute(routeId){
        this.props.history.push(`/route/addroute/${routeId}`);
    }
    viewRoute(routeId){
        this.props.history.push(`/route/viewroute/${routeId}`);
    }
    addRoute(){
        this.props.history.push('/route/addroute/_add');
    }

    render() {
        return (
            <div>
                <li className="nav-item">
               <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
                 </li>
              <h2 className="text-center">Route List </h2>  
              <Link to={'/admin'}><button className="btn btn-success">Back</button></Link>
              <div className="row">
              <button className="btn btn-primary" onClick={this.addRoute}> ADD ROUTE</button>
              <hr></hr>
              
              <div className="">
      
      <Box mx="auto" bgcolor="background.paper" p={1}>
      <Grid>
        <TableContainer component={Paper}>
          <Table border="2" bgcolor="#fffff1" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow >
                <StyledTableCell>Route ID</StyledTableCell>
                <StyledTableCell>Route From</StyledTableCell>
                <StyledTableCell>Route To</StyledTableCell>
                <StyledTableCell>Distance</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

{
    this.state.routes.map(
        route=>
        <tr key={route.routeId}>
        <td>{route.routeId}</td>
        <td>{route.routeFrom}</td>
        <td>{route.routeTo}</td>
        <td>{route.distance}</td>
       <td>
           <button onClick={()=>this.updateRoute(route.routeId)} className="btn btn-info">UPDATE</button>
           
           <button onClick={()=>this.deleteRoute(route.routeId)} className="btn btn-danger">DELETE</button>

           <button onClick={()=>this.viewRoute(route.routeId)} className="btn btn-info">VIEW</button>
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

export default ViewAllRoute;