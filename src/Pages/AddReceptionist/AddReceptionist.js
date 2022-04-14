import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const AddReceptionist = () => {
    const [addreceptionist, setReceptionist] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        errors: []
    });
    const history = useHistory();
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...addreceptionist };
        newData[feild] = value;
        setReceptionist(newData);


    }
    const handleonSubmit = e => {
        const data = {
            ...addreceptionist
        }
        console.log(addreceptionist);

        axios.post('http://localhost:8000/api/addreceptionist', data)
            .then(response => {
                console.log(response.data);
                if (response.data.validation_errors) {
                    setReceptionist({ ...addreceptionist, errors: response.data.validation_errors });
                    
                    alert("reciptionist add error");
                } else {

                    alert("Receptionst add Success");
                    history.push("/dashboard");

                }

            });

        e.preventDefault();
    }

    return(
        <div className='login-form'>
        <div className="container login-form">
            <div class="row align-items-center login-col">

                <div class="col ">
                    <div className="top-header">
                        <h4>Add Receptionst</h4>
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
                            }}>{addreceptionist.errors.name}</span>
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
                            }}>{addreceptionist.errors.username}</span>

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
                            }}>{addreceptionist.errors.email}</span>

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
                            }}>{addreceptionist.errors.password}</span>
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
                            }}>{addreceptionist.errors.confirmpassword}</span>
                        </div>
                        <button type="submit" class="btn btn-primary login-submit-button">Add</button>
                    </form>
                   
                </div>

            </div>
        </div>
        </div>
        


    );


}
export default AddReceptionist;