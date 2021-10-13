import React, { useState } from 'react'
import * as signupFunc from './SignupFunctions'
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import './signup.css'
export default function Signup({ history }) {

    let [newUser, setnewUser] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setnewUser({ ...newUser, [field]: fieldValue })
        // if (field === 'email') {
        //     var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        //     if (fieldValue.match(mailformat)) {
        //         setnewUser({ ...newUser, [field]: fieldValue })
        //         return true
        //     } else {
        //         alert("You have entered an invalid email address!");
        //         return false
        //     }
        // } else if (field === 'password') {
        //     var passwordFormat = /^[A-Za-z]\w{7,14}$/;
        //     if (fieldValue.match(passwordFormat)) {
        //         setnewUser({ ...newUser, [field]: fieldValue })
        //         return true
        //     }else{
        //         alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
        //     }
        }
    
    // sign in
    const getToSignIn = e => {
        e.preventDefault()
        history.push('/login')
    }
    
    
    // submiting data to backend
    const submitData = e => {
        e.preventDefault()
        signupFunc.registerUser(newUser)
            .then(response => response.data)
        console.log(newUser)
        history.push('/login')
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
                                                <label htmlFor="userLoginId">Login Id:</label>
                                                <input id="userLoginId" type="text" className="form-control sgnUp"  pattern="([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])" onChange={e => handleChangeEvent(e, 'userLoginId')} />
                                            </div>
                                            <div className="form-group2">
                                                <label htmlFor="userName">Name:</label>
                                                <input id="userName" type="text" className="form-control sgnUp" pattern="^[A-Za-z]{3,15}$" onChange={e => handleChangeEvent(e, 'userName')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="email">Email-ID:</label>
                                                <input required id="email" type="email" className="form-control sgnUp" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" onChange={e => handleChangeEvent(e, 'email')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="contact">Mobile-No.:</label>
                                                <input required id="contact" type="text" className="form-control sgnUp" pattern="^[6-9]\d{9}$" onChange={e => handleChangeEvent(e, 'contact')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="firstName">First Name:</label>
                                                <input required id="firstName" type="text" className="form-control sgnUp" pattern="^[A-Za-z]{3,15}$" onChange={e => handleChangeEvent(e, 'firstName')} />
                                            </div>
                                            <div class="form-group2">
                                                <label htmlFor="lastName">Last Name:</label>
                                                <input required id="lastName" type="text" className="form-control sgnUp" pattern="^[A-Za-z]{3,15}$" onChange={e => handleChangeEvent(e, 'lastName')} />
                                            </div>
                                           
                                            <div class="form-group2">
                                                <label htmlFor="password">Password :</label>
                                                <input required id="password" type="password" className="form-control sgnUp" pattern="^[A-Za-z]{3,15}$" onChange={e => handleChangeEvent(e, 'password')} />
                                            </div>
                                            <div class="form-group2">
                                                <input required type="submit" value="submit" className="btn-primary btnn form-submit sub-btn sgnUp" />
                                            </div>
                                            <div>
                                                <small className="form-text text-muted link-text">Already a User?
                                            </small>
                                                <span className="signuptext"><a href="/#" onClick={(e) => getToSignIn(e)}>Sign-In</a></span>
                                                
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