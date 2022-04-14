import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditDoctor = () => {
    const { id } = useParams();
    const [updatedoctor, setUpdatedoctor] = useState({
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
    //get doctor 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/singledoctor/${id}`)
            .then(rsp => {
                setUpdatedoctor(rsp.data);
            }, (err) => {

            });
    }, []);
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...updatedoctor };
        newData[feild] = value;
        setUpdatedoctor(newData);


    }
    const handleonSubmit = e => {
        const data = {
            ...updatedoctor,id
        }
        console.log(updatedoctor);

        axios.post('http://localhost:8000/api/updatedoctor', data)
            .then(response => {
                console.log(response.data);
                if (response.data.validation_errors) {
                    setUpdatedoctor({ ...updatedoctor, errors: response.data.validation_errors });
                    
                    alert("Doctor add Error");
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
                                defaultValue={updatedoctor.name}
                                onBlur={handleOnChange}
                               />
                        
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='username'
                                placeholder='Enter  username'
                                class="form-control form-input  "
                                value={updatedoctor.username}
                                
                                 />
                                

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='email'
                                placeholder='Enter  Email'
                                class="form-control  form-input "
                                defaultValue={updatedoctor.email}
                                onBlur={handleOnChange}
                               />
                            

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='department'
                                placeholder='Enter  department'
                                class="form-control  form-input "
                                defaultValue={updatedoctor.department}
                                onBlur={handleOnChange}
                               />
                                

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='dcid'
                                placeholder='Enter Doctor Unique id'
                                class="form-control  form-input "
                                value={updatedoctor.dcid}
                              
                               />
                                

                        </div>
                        
                        
                        <button type="submit" class="btn btn-primary login-submit-button">Register</button>
                    </form>
                   
                </div>

            </div>
        </div>
    </div>
    );
};

export default EditDoctor;