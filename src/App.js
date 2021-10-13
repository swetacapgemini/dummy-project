import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage/Homepage'
import RouteSelection from './components/RouteSelection/RouteSelection'
import LogOrsign from './components/Login-Signup/LogOrsign'
import Signup from './components/Login-Signup/Signup'
import Profile from './components/Profile/Profile'
import TicketPage from './components/TicketPage/TicketPage'
import './App.css';
import AdminLogin from './components/Login-Signup/AdminLogin';
import ViewAllBus from './components/Bus/ViewAllBus';
import AddBus from './components/Bus/AddBus';
import ViewBus from './components/Bus/ViewBus';
import ViewAllRoute from './components/Route/ViewAllRoute';
import AddRoute from './components/Route/AddRoute';
import ViewRoute from './components/Route/ViewRoute';
import ViewReservation from './components/Reservation/ViewReservation';
import ViewAllReservation from './components/Reservation/ViewAllReservation';
import ViewFeedback from './Feedback/ViewFeedback';
import ViewAllFeedback from './Feedback/ViewAllFeedback';
import ViewAllUser from './components/User/ViewAllUser';
import ViewUser from './components/User/ViewUser';
import Admin from './components/Admin/Admin';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />
          <Route path="/login" render={props => <LogOrsign {...props} />} />
          <Route path="/register" render={props => <Signup {...props} />} />
          <Route path="/routes" exact render={props => <RouteSelection {...props} />} />
          <Route path="/profile" exact render={props => <Profile {...props} />} />
          <Route path="/getTicket" exact render={props => <TicketPage {...props} />} />
          <Route path="/admin/login" exact render={props => <AdminLogin {...props} />} />
          <Route path="/admin" exact render={props => <Admin {...props} />} />
          <Route path="/bus/viewallbus" exact render={props => <ViewAllBus {...props} />} />
          <Route path="/bus/addbus/:id" exact render={props => <AddBus {...props} />} />
          <Route path="/bus/viewbus/:id" exact render={props => <ViewBus {...props} />} />
          <Route path="/route/viewallroute" exact render={props => <ViewAllRoute {...props} />} />
          <Route path="/route/addroute/:id" exact render={props => <AddRoute {...props} />} />
          <Route path="/route/viewroute/:id" exact render={props => <ViewRoute {...props} />} />
          <Route path="/rest/api/reservation/viewreservation/:id" exact render={props => <ViewReservation {...props} />} />
          <Route path="/rest/api/reservation/viewallreservation" exact render={props => <ViewAllReservation {...props} />} />
          <Route path="/rest/api/feedback/viewfeedback/:id" exact render={props => <ViewFeedback {...props} />} />
          <Route path="/rest/api/feedback/viewallfeedback" exact render={props => <ViewAllFeedback {...props} />} />
          <Route path="/rest/api/feedback/viewfeedback/:id" exact render={props => <ViewFeedback {...props} />} />
          <Route path="/rest/api/user/viewalluser" exact render={props => <ViewAllUser {...props} />} />
          <Route path="/rest/api/user/viewuser/:id" exact render={props => <ViewUser {...props} />} />
          
        </Switch>
      </Router>
    </div>

  );
}

export default App;