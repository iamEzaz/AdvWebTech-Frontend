import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AddDoctor from '../AddDoctor/AddDoctor';
import AddReceptionist from '../AddReceptionist/AddReceptionist';
import AdminHome from '../AdminHome/AdminHome';
import Myprofile from '../AdminProfle/AdminProfile';
import EditAdmitProfile from '../AdminProfle/EditAdminprofile/EditAdminprofile';
import Allreceptionist from '../Allreceptionist/Allreceptionist';
import EditReceptionst from '../Allreceptionist/EditReceptionist/Editreception';
import Doctorlist from '../DoctorList/Doctorlist';
import EditDoctor from '../EditDoctor/EditDoctor';
import Patientlist from '../PatientList/Patientlist';

const AdminDashboard = () => {
    let { path, url } = useRouteMatch();
    const username = localStorage.getItem('username');
    const history = useHistory();

    const logout = (event) => {
        event.preventDefault();
        const data = {
            token: localStorage.getItem('token')
        };
        //console.log(data);
       
               
                    
                    localStorage.removeItem('type');
                    localStorage.removeItem('id');
                    localStorage.removeItem('name');
                    localStorage.removeItem('email');
                    localStorage.removeItem('username');
                    alert("Logout Success");
                    history.push('/');
               
            
    }
    return (
        <>

        <nav class="navbar navbar-expand-lg navbar-light  headr">
            <div class="container-fluid">
                
                <span class='patientdashboard'>Dashboard</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <NavLink className="nav-link active" to={`${url}/home`}>
                                Dashboard Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active"
                                to={`${url}/adddoctor`}>
                                <span class="item-text">Add Doctor</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active"
                                to={`${url}/addreceptionist`}>
                                <span class="item-text">Add Receptionst</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active"
                                to={`${url}/allreceptionist`}>
                                <span class="item-text">All Receptionst</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active"
                                to={`${url}/doctorlist`}>
                                <span class="item-text">Doctor List</span>
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link active"
                                to={`${url}/patientlist`}>
                                <span class="item-text">All Patient</span>
                            </NavLink>
                        </li>
                        
                        
                    </ul>
                    <div  >
                        
                       <div class="d-inline-flex">
                       {username && 
                       <NavLink className=" me-2 buttonlogin"
                                to={`${url}/myaprofile`} style={{ textDecoration: 'none'}}>
                                <span class="item-text">My Profile</span>
                            </NavLink>
                            }
                        

                        {
                            username ?
                            <button onClick={logout}  className='buttonlogin'><Link   style={{ textDecoration: 'none', color: 'white' }}    >Logout</Link></button> 
                            :
                            <button id='login-button' className='buttonlogin'><Link to='/login' style={{ textDecoration: 'none', color: 'white' }}    >Login</Link></button>
                        }
                       </div>
                        
                        
                    </div>
                </div>


            </div>
        </nav>

        <div className="container-fluid dasboard-patient">
            <div className="row">
                <div className="col-12">

                    <Switch>
                        <Route exact path={path}>
                        <Doctorlist></Doctorlist>
                        </Route>
                        <Route exact path={`${path}/doctorlist`}>
                        <Doctorlist></Doctorlist>
                        </Route>
                        <Route exact path={`${path}/patientlist`}>
                        <Patientlist></Patientlist>
                        </Route>
                        <Route exact path={`${path}/adddoctor`}>
                        <AddDoctor></AddDoctor>
                        </Route>
                        <Route exact path={`${path}/addreceptionist`}>
                        <AddReceptionist></AddReceptionist>
                        </Route>
                        <Route exact path={`${path}/allreceptionist`}>
                        <Allreceptionist></Allreceptionist>
                        </Route>
                        <Route exact path={`${path}/updatereceptionist/:id`}>
                        <EditReceptionst></EditReceptionst>
                        </Route>
                        <Route exact path={`${path}/editdoctor/:id`}>
                        <EditDoctor></EditDoctor>
                        </Route>
                        <Route exact path={`${path}/myaprofile`}>
                        <Myprofile></Myprofile>
                        </Route>
                        <Route exact path={`${path}/editadminprofile/:id`}>
                        <EditAdmitProfile></EditAdmitProfile>
                        </Route>

                       
                        
                        
                    </Switch>

                </div>
            </div>
        </div>
    </>
    );
};

export default AdminDashboard;