import axios from 'axios';
import React, {useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';


const EditAdmitProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [updateprofile,setUpdateprofile] = useState({
        name:'',
        email:'',
        errors:[]});
   
   
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newdata = { ...updateprofile };
        newdata[feild] = value;
        setUpdateprofile(newdata);
       
        




    }
    useEffect(function () {
        axios.get(`http://localhost:8000/api/adminprofile/${id}`)
            .then(rsp => {
                console.log(rsp.data);
                setUser(rsp.data);
            }, (err) => {


            });
    }, [user]);
    const handleonSubmit = e => {
        
        
        const data = {
            ...updateprofile,id,
        }
     console.log(data);
        axios.post(`http://localhost:8000/api/updateadminprofile`, data)
            .then(res => {
                
                if (res.data.validation_errors) {
                    setUpdateprofile({ ...updateprofile, errors: res.data.validation_errors });
                    alert("res.data.validation_errors");
                    
                }
                else {

                    alert("update succesfull");

                }
            }
            
           )

     



        e.preventDefault();

    }

    return (
        <div className='login-form'>
        <div className="container login-form">
            <div class="row align-items-center login-col">

                <div class="col ">
                    <div className="top-header">
                        <h4>Profile Update</h4>
                    </div>
                    <form onSubmit={handleonSubmit}>
                        <div class="mb-3">
                            <input type="text"
                                name='name'
                                placeholder='Enter  Name'
                                class="form-control  form-input "
                                defaultValue={user.name}
                                onBlur={handleOnChange}
                               />
                        
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='username'
                                placeholder='Enter  username'
                                class="form-control form-input  "
                                value={user.username}
                                
                                 />
                                

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='email'
                                placeholder='Enter  Email'
                                class="form-control  form-input "
                                defaultValue={user.email}
                                onBlur={handleOnChange}
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

export default EditAdmitProfile;