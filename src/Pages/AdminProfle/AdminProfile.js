import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Myprofile = () => {
    const [user, setUser] = useState({});
    const [edituser, setEditUser] = useState({});
    const id = parseInt(localStorage.getItem('id'));
const history = useHistory();

    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/adminprofile/${id}`)
            .then(rsp => {
                setUser(rsp.data);
            }, (err) => {


            });
    }, [user]);

    const update = (id) => {
        const url = `editadminprofile/${id}`;
        history.push(url);
    }


    return (
        <section>
           
<div class="">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-6 crd-body">
                        <p >User Name: {user.username}</p>
                        <p >Email : {user.email}</p>
                        <p >Name : {user.name}</p>
                        <button id='editprofile-btn'
                    onClick={()=>update(user.id)}
                       >Edit</button>
                    </div>

                </div>
            </div>
            
        </div>
        </section>
        
    );
};

export default Myprofile;