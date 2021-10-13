import React, { useState } from 'react'
import * as AddfeedbackFunction from './AddFeedbackFunction'
import {withRouter} from 'react-router-dom'


export default withRouter (function Feedback({ history }){

    let [feedback, setnewFeedback] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setnewFeedback({ ...feedback, [field]: fieldValue })
    }
    
    
    // submiting data to backend
    const submitData = e => {
        e.preventDefault()
        AddfeedbackFunction.registerFeedback(feedback)
            .then(response => response.data)
        console.log(feedback)
        history.push('/routes')
    }




    return (
        
                                <div className="left-divider">
                                    <div className="col-md-6">
                                        <form onSubmit={e => submitData(e)}>
                                        <div className="form-group2">
                                                <label htmlFor="FeedbackId">Feedback Id:</label>
                                                <input id="feedbackId" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'feedbackId')} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="driverRating">driverRating:</label>
                                                <input id="driverRating" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'driverRating')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="serviceRating">serviceRating:</label>
                                                <input required id="serviceRating" type="serviceRating" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'serviceRating')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="overallrating">overallrating:</label>
                                                <input required id="overallrating" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'overallRating')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="comments">comments:</label>
                                                <input required id="comments" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'comments')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="feedbackDate">feedbackDate:</label>
                                                <input required id="feedbackDate" type="text" className="form-control sgnUp" onChange={e => handleChangeEvent(e, 'feedbackDate')} />
                                            </div>
                                
                                            <div class="form-group2">
                                                <input required type="submit" value="submit" className="btn-primary btnn form-submit sub-btn sgnUp" />
                                            </div>
                                            
                                        </form>
                                    </div></div>
    )
}
)
