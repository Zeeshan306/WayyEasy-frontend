import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/hoc/PrivateRoutes";

//Admin Routes
import Auth from "./AdminPanel/HospitalAdmin/Register/register";
import Admin from "./AdminPanel/HospitalAdmin";
import Dashboard from "./AdminPanel/HospitalAdmin/Dashboard";
import Doctors from "./AdminPanel/HospitalAdmin/Doctors";
import ManageDoctors from "./AdminPanel/HospitalAdmin/Doctors/ManageDoctors";
import Hospital from "./AdminPanel/HospitalAdmin/Hospital";
import ManageHospital from "./AdminPanel/HospitalAdmin/Hospital/ManageHospitals";
import Reviews from "./AdminPanel/HospitalAdmin/Reviews";
import Rooms from "./AdminPanel/HospitalAdmin/Rooms";
import ManageRooms from "./AdminPanel/HospitalAdmin/Rooms/ManageRooms";

//User Routes
import Header from "./components/header/Header";
import Home from "./containers/Home/Home";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/auth" exact component={Auth} />
          <PrivateRoute
            path="/admin"
            component={() => (
              <Admin>
                <Switch>
                  {/* Dashboard routes */}
                  <Route path="/admin" exact component={Dashboard} />
                  {/* Doctors routes */}
                  <Route path="/admin/doctors" exact component={Doctors} />
                  <Route
                    path="/admin/doctors/managedoctors"
                    exact
                    component={ManageDoctors}
                  />
                  <Route
                    path="/admin/doctors/managedoctors/:id"
                    exact
                    component={ManageDoctors}
                  />
                  {/* Hosptal routes */}
                  <Route path="/admin/hospital" exact component={Hospital} />
                  <Route
                    path="/admin/hospital/managehospital"
                    exact
                    component={ManageHospital}
                  />
                  <Route
                    path="/admin/hospital/managehospital/:id"
                    exact
                    component={ManageHospital}
                  />
                  {/* Review routes */}
                  <Route path="/admin/reviews" exact component={Reviews} />
                  {/* Room routes */}
                  <Route path="/admin/rooms" exact component={Rooms} />
                  <Route
                    path="/admin/room/manageRoom"
                    exact
                    component={ManageRooms}
                  />
                  <Route
                    path="/admin/room/manageRoom/:id"
                    exact
                    component={ManageRooms}
                  />
                </Switch>
              </Admin>
            )}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
