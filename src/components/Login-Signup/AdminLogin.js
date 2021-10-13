import React, { useState } from 'react'
import * as AdminLoginFun from './AdminLoginFun'
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import './signup.css'
export default function AdminLogin({ history }) {

    let [newUser, setnewUser] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setnewUser({ ...newUser, [field]: fieldValue })
       
        }
    
    
    
    // submiting data to backend
    const submitData = e => {
        e.preventDefault()
        AdminLoginFun.AdminLoginFun(newUser)
            .then(response => response.data)
        console.log()
        history.push('/admin')
    }




    return (
        <div className="container">
            <div className="flex-container">
                <div className="row full">
                    <div className="col-md-12">
                        <div className="form-container">
                            <div className="form-container-in"></div>
                            <div className="row sgnUp ">
                                <div className="col-md-6 right-divider pdding">
                                    <h3 className="lead-text mn-txt">
                                        Join Us with Social
                                    </h3>
                                    <div className="icon-soc-fb">
                                        <FaFacebookF />
                                    </div>
                                    <div className="icon-soc-tw">
                                        <FaTwitterSquare />
                                    </div>
                                </div>
                                <div className="left-divider">
                                    <div className="col-md-6">
                                      <form onSubmit={e => submitData(e)}>
                                        <div className="form-group2">
                                                <label htmlFor="AdminUsername">AdminUsername:</label>
                                                <input id="AdminUsername" type="text" className="form-control sgnUp" pattern="^[Admin123]+$" onChange={e => handleChangeEvent(e, 'userLoginId')} />
                                            </div>
                                            
                                           
                                            <div class="form-group2">
                                                <label htmlFor="Adminpassword">AdminPassword :</label>
                                                <input required id="Adminpassword" type="password" className="form-control sgnUp" pattern="^[Admin@123]+$" onChange={e => handleChangeEvent(e, 'password')} />
                                            </div>
                                            <div class="form-group2">
                                                <input required type="submit" value="submit" className="btn-primary btnn form-submit sub-btn sgnUp" />
                                            </div>
                                           
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}