import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const AddDoctor = () => {
    const [adddoctor, setAdddoctor] = useState({
        name: '',
        email: '',
        username: '',
        department: '',
        password: '',
        dcid: '',
        confirmPassword: '',
        errors: []
    });
    const history = useHistory();
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...adddoctor };
        newData[feild] = value;
        setAdddoctor(newData);


    }
    const handleonSubmit = e => {
        const data = {
            ...adddoctor
        }
        console.log(adddoctor);

        axios.post('http://localhost:8000/api/adddoctor', data)
            .then(response => {
                console.log(response.data);
                if (response.data.validation_errors) {
                    setAdddoctor({ ...adddoctor, errors: response.data.validation_errors });
                    
                    alert(response.data.validation_errors);
                } else {

                    alert("Doctor add Success");
                    history.push("/dashboard");

                }

            });

        e.preventDefault();
    }

    return (
        <div className='login-form'>
        <div className="container login-form">
            <div class="row align-items-center login-col">

                <div class="col ">
                    <div className="top-header">
                        <h4>Register</h4>
                    </div>
                    <form onSubmit={handleonSubmit}>
                        <div class="mb-3">
                            <input type="text"
                                name='name'
                                placeholder='Enter  Name'
                                class="form-control  form-input "
                                onBlur={handleOnChange}
                               />
                            <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.name}</span>
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='username'
                                placeholder='Enter  username'
                                class="form-control form-input  "
                                onBlur={handleOnChange}
                                 />
                                 <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.username}</span>

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='email'
                                placeholder='Enter  Email'
                                class="form-control  form-input "
                                onBlur={handleOnChange}
                               />
                                <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.email}</span>

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='department'
                                placeholder='Enter  department'
                                class="form-control  form-input "
                                onBlur={handleOnChange}
                               />
                                <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.department}</span>

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='dcid'
                                placeholder='Enter Doctor Unique id'
                                class="form-control  form-input "
                                onBlur={handleOnChange}
                               />
                                <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.dcid}</span>

                        </div>
                        <div class="mb-3">
                            <input type="password"
                                name='password'
                                placeholder='Enter  password'
                                class="form-control  form-input"
                                onBlur={handleOnChange}
                                />
                                <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.password}</span>
                        </div>
                        <div class="mb-3">
                            <input type="password"
                                name='confirmpassword'
                                placeholder='Enter Confirm password'
                                class="form-control  form-input"
                                onBlur={handleOnChange}
                                 />
                                <span style={{
                                color: "red", fontSize: "12px", fontWeight: "bold"
                            }}>{adddoctor.errors.confirmpassword}</span>
                        </div>
                        <button type="submit" class="btn btn-primary login-submit-button">Register</button>
                    </form>
                   
                </div>

            </div>
        </div>
    </div>
    );
};

export default AddDoctor;