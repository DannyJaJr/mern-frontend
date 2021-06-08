// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
  //create react hooks
  const [name, setName ]= useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [redirect, setRedireect] = useState(false)


const handleName = (e) => {
    setName(e.target.value)
}

const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handlePassword = (e) => {
    setPassword(e.target.value)
}

const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
}



    const handleSubmit = (e) => {

    }
    
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <Form  onSubmit={handleSubmit}>
                        <div className="form-group">
                            <lable htmlFor="name">Name</lable>
                            <imput type="text" name="name" value={name} onChange={handleName} className="form-control" />
                        </div>


                        <div className="form-group">
                        <lable htmlFor="email">Email</lable>
                            <imput type="text" name="email" value={email} onChange={handleEmail} className="form-control" />
                        </div>

                        <div className="form-group">
                        <lable htmlFor="name">Password</lable>
                            <imput type="password" name="password" value={password} onChange={handlePassword} className="form-control" />
                        </div>

                        <div className="form-group">
                        <lable htmlFor="confirmPassword">Confirm Password</lable>
                            <imput type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control" />
                        </div>

    
                        <button type="submit" className="btn btn-primary float-right">Submit</button>


                    </Form>
                    
                </div>
            </div>
        </div>
    )
}

export default Signup;
