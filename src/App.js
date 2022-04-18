import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Login/Login';
import AdminDashboard from './Pages/AminDashboard.js/AdminDashboard';
const id = parseInt(localStorage.getItem('id'));

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route exact path="/">
         <Login></Login>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       {
         id ?
         <Route path="/dashboard">
         <AdminDashboard></AdminDashboard>
       </Route>
       :
       <Login></Login>
       }
       
       </Switch></BrowserRouter>
    </div>
  );
}

export default App;
