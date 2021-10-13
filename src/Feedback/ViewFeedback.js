import React, { Component } from 'react';
import FeedbackService from './FeedbackService';
import { Link } from "react-router-dom";


class ViewFeedback extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            feedback: {}
            
        }
    }

    componentDidMount(){
FeedbackService.getFeedbackById(this.state.id).then( res=>{
    this.setState({feedback:res.data});
})

    }
    render() {
        return (
            <div>
                <li className="nav-item">
                <Link to={'/'}><button className="btn btn-primary" style={{position:'absolute',right:5,top:5,}}>LOG OUT</button></Link>
                 </li>
                <div className="card" col-md-6 offset-md-3> 
                <h3 className="text-center">VIEW FEEDBACK DETAILS </h3>
                <div className="card-body">
                <div className="row" >
                <label> Feedback ID :</label>
                    <div>{this.state.feedback.feedBackId}</div>
                    </div>
                    
                    <div className="row">
                < label> Driver rating :</label>
                    <div> {this.state.feedback.driverRating}</div>
                    </div>
                    <div className="row">
                    <label>Service rating :</label>
                    <div> {this.state.feedback.serviceRating}</div>
                    </div>
                        <div className="row">
                    <label> Overall rating :</label>
                        <div> {this.state.feedback.overallRating}</div>
                        </div>
                        <div className="row">
                        <label> Comments</label>
                        <div> {this.state.feedback.comments}</div>
                        </div>
                        <div className="row">
                        <label> Feedback date:</label>
                        <div> {this.state.feedback.feedbackdate}</div>
                        </div>
                        <Link to={'/rest/api/feedback/viewallfeedback'}><button className="btn btn-success" >Back</button></Link>
                  </div></div>
                  </div>

                
        
        );
    }
}

export default ViewFeedback;