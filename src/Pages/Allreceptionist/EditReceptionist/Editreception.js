import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const EditReceptionst = () => {
    const { id } = useParams();
    const [updatereceptionist, setUpdatereceptionist] = useState({
        name: '',
        email: '',
        type: '',
        errors: []
    });
    const history = useHistory();
    //get doctor 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/singlereceptionist/${id}`)
            .then(rsp => {
                console.log(rsp.data);
                setUpdatereceptionist(rsp.data);
            }, (err) => {

            });
    }, []);
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newData = { ...updatereceptionist };
        newData[feild] = value;
        setUpdatereceptionist(newData);


    }
    const handleonSubmit = e => {
        const data = {
            ...updatereceptionist,id
        }
        console.log(updatereceptionist);

        axios.post('http://localhost:8000/api/updatereceptionist', data)
            .then(response => {
                console.log(response.data);
                if (response.data.validation_errors) {
                    setUpdatereceptionist({ ...updatereceptionist, errors: response.data.validation_errors });
                    
                    alert("update error");
                } else {

                    alert("Update Success");
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
                                defaultValue={updatereceptionist.name}
                                onBlur={handleOnChange}
                               />
                        
                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='username'
                                placeholder='Enter  username'
                                class="form-control form-input  "
                                value={updatereceptionist.username}
                                
                                 />
                                

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='email'
                                placeholder='Enter  Email'
                                class="form-control  form-input "
                                defaultValue={updatereceptionist.email}
                                onBlur={handleOnChange}
                               />
                            

                        </div>
                        <div class="mb-3">
                            <input type="text"
                                name='type'
                                placeholder='Enter  department'
                                class="form-control  form-input "
                                defaultValue={updatereceptionist.type}
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

export default EditReceptionst;