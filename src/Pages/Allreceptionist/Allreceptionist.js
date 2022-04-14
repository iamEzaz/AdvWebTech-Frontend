import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const Allreceptionist = () => {
    const [receptionist,setReceptionist]= useState([]);
    const history = useHistory();
  
    useEffect(function () {
        axios.get("http://localhost:8000/api/allreceptionist")
            .then(function (rsp) {
                //console.log(rsp)
                 setReceptionist(rsp.data);
            }, function (err) {

            });
    }, [receptionist]);
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

const update = (id) => {
    const url = `adddoctor/${id}`;
    history.push(url);
}
    return(

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
                                        <th >Edit</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        receptionist.map(dc =>
                                            <tr>
                                                <td >{dc.name}</td>
                                                <td>{dc.email}</td>
                                                <td><button onClick={()=>handledelete(dc.id)}> Delete </button></td>
                                                <td><button onClick={()=>update(dc.id)}> Edit </button></td>
                                                
                                            </tr>
    
    
                                        )}
    
                                </tbody>
    
                            </table>
                        </div>
    
                    </div>
    
                </div>
    
                
            </div>
            
 
        </section>
    )
}
export default Allreceptionist;