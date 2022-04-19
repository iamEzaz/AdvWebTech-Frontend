import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllPatientlist = () => {
    const [patient, setPatient] = useState([]);



    useEffect(function () {
        axios.get("http://localhost:8000/api/allpatientdc")
            .then(function (rsp) {
                console.log(rsp.data);
                setPatient(rsp.data);
            }, function (err) {

            });
    }, []);

    return (

        <div className="">
            <div class="container">
                <div class="row justify-content-md-center mt-5">

                    <div class="col-md-12">
                        <table class="table table-bordered border-info">
                            <thead>
                                <tr>
                                    <th >Name</th>
                                    <th >Email</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    patient.map(pt =>
                                        <tr>
                                            <td >{pt.name}</td>
                                            <td>{pt.email}</td>
                                        </tr>


                                    )}

                            </tbody>

                        </table>
                    </div>

                </div>

            </div>


        </div>



    );
};

export default AllPatientlist;