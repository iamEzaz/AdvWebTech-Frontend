import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Allappointments = () => {
    const [appointments,setAppointments]= useState([]);
    
  
    useEffect(function () {
        axios.get("http://localhost:8000/api/allappointment")
            .then(function (rsp) {
                //console.log(rsp)
                 setAppointments(rsp.data);
            }, function (err) {

            });
    }, [appointments]);

    const handledelete = id => {
        
        axios.post(`http://localhost:8000/api/dltappointment/${id}`)
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
                                        <th >Patient Name</th>
                                        <th >Patient Id</th>
                                        <th >Doctor</th>
                                        <th >Patient Email</th>
                                        <th >Date</th>
                                        <th >Slot</th>
                                        <th >Action</th>
                                       
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        appointments.map(dc =>
                                            <tr>
                                                <td >{dc.patientname}</td>
                                                <td>{dc.patientid}</td>
                                                <td>{dc.dname}</td>
                                                <td>{dc.pemail}</td>
                                                <td>{dc.day}</td>
                                                <td>{dc.slot}</td>
                                                <td><button onClick={()=>handledelete(dc.id)}> Delete </button></td>
                                                
                                                
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

export default Allappointments;