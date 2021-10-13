import React, { Component } from 'react';

import FeedbackService from './FeedbackService';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';


class ViewAllFeedback extends Component {
    constructor(props){
        super(props)
        this.state={
            feedbacks:[]
    }
    this.deleteFeedback=this.deleteFeedback.bind(this);
    this.viewFeedback=this.viewFeedback.bind(this);
    }
    componentDidMount(){
        FeedbackService.getFeedbacks().then((res)=>{
this.setState({feedbacks: res.data});

        });
    }
    viewFeedback(feedBackId){
        this.props.history.push(`/rest/api/feedback/viewfeedback/${feedBackId}`);
    }
    
    deleteFeedback(feedBackId){
        FeedbackService.deleteFeedback(feedBackId).then( res=>{
            this.setState({feedbacks:this.state.feedbacks.filter(feedback => feedback.feedBackId!==feedBackId)});
        })
    }

    render() {
        return (
            <div>
                <li className="nav-item">
               <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
               </li>
              <h2 className="text-center">Feedback List </h2>  
              <Link to={'/admin'}><button className="btn btn-success" >Back</button></Link>
              <div className="row">
              
              <div className="">
      
      <Box mx="auto" bgcolor="background.paper" p={1}>
      <Grid>
        <TableContainer component={Paper}>
          <Table border="2" bgcolor="#fffff1" class="table  table-bordered table-hover">
            <TableHead className="thead-dark">
              <TableRow >
                <StyledTableCell> FeedbackId</StyledTableCell>
                <StyledTableCell>Driver Rating</StyledTableCell>
                <StyledTableCell>Service Rating</StyledTableCell>
                <StyledTableCell>Overall Rating</StyledTableCell>
                <StyledTableCell>Comments</StyledTableCell>
                 <StyledTableCell>Feedback date</StyledTableCell>
                 <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

{
    this.state.feedbacks.map(
        feedback=>
        <tr key={feedback.feedBackId}>
        <td>{feedback.driverRating}</td>
        <td>{feedback.serviceRating}</td>
        <td>{feedback.overallRating}</td>
        <td>{feedback.comments}</td>
        <td>{feedback.feedbackdate}</td>
        

       <td>
       <button onClick={()=>this.viewFeedback(feedback.feedBackId)} className="btn btn-info">VIEW</button>
           <button onClick={()=>this.deleteFeedback(feedback.feedBackId)} className="btn btn-danger">DELETE</button>
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

export default ViewAllFeedback;