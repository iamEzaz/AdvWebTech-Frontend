import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Patientlist = () => {
    const [patient, setPatient] = useState([]);



    useEffect(function () {
        axios.get("http://localhost:8000/api/allpatient")
            .then(function (rsp) {

                setPatient(rsp.data);
            }, function (err) {

            });
    }, [patient]);
    const handledelete = id => {
        
            axios.post(`http://localhost:8000/api/deletepatient/${id}`)
                .then(res => {
                    if (res) {
                     
                        alert("Delete Success");
                    }
                    else {
                        alert("Delete Eror");
                    }
                })
        

    }




    return (
        <section>
            <div className="">
                <div class="container">
                    <div class="row justify-content-md-center mt-5">

                        <div class="col-md-12">
                            <table class="table table-bordered border-primary">
                                <thead>
                                    <tr>
                                        <th >Name</th>
                                        <th >Email</th>
                                        <th >Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patient.map(pt =>
                                            <tr>
                                                <td >{pt.name}</td>

                                                <td>{pt.email}</td>
                                                <td> <button onClick={()=>handledelete(pt.id)}>Delete</button>  </td>


                                            </tr>


                                        )}

                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>


            </div>


        </section>
    );
};

export default Patientlist;