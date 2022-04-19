import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyPtAppointment = () => {
    const [user, setUser] = useState({});
    const [appointment, setAppointment] = useState([]);
    const id = parseInt(localStorage.getItem('id'));


    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/doctorprofile/${id}`)
            .then(rsp => {
                setUser(rsp.data);
               // console.log(rsp.data);
            }, (err) => {


            });
    }, [user]);
    //get all appointment 
    useEffect(function () {
        axios.get(`http://localhost:8000/api/doctorappointments/${user.dcid}`)
            .then(rsp => {
                setAppointment(rsp.data);
               
            }, (err) => {


            });
    }, [appointment]);

   

    const handledelete = id => {
        
        axios.post(`http://localhost:8000/api/deleteappointment/86`)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                 
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
                                       appointment.map(apt =>
                                           <tr>
                                               <td >{apt.patientname}</td>
                                               <td>{apt.patientid}</td>
                                               <td>{apt.dname}</td>
                                               <td>{apt.pemail}</td>
                                               <td>{apt.day}</td>
                                               <td>{apt.slot}</td>
                                             <td><button onClick={()=>handledelete(apt.id)}> Delete </button></td> 
                                               
                                               
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

export default MyPtAppointment;