import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/hoc/PrivateRoutes";

//Hospital Admin Routes
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

//OPD Admin routes
import OPDAdmin from "./AdminPanel/OPDAdmin";
import OPDServices from "./AdminPanel/OPDAdmin/Services";
import OPDDashboard from "./AdminPanel/OPDAdmin/Dashboard/Dashboard.jsx";
import OPDService from "./AdminPanel/OPDAdmin/Services/Service";
import ManageServices from "./AdminPanel/OPDAdmin/Services/ManageServices";
import ServiceView from "./AdminPanel/OPDAdmin/Services/ServiceView";

//User Routes
import Header from "./components/header/Header";
import Home from "./containers/Home/Home";
import Notifications from "./containers/Notifications/Notifications";
import Notification from "./containers/Notifications/Notification";
import AboutUs from "./containers/About/AboutUs";
import Privacy from "./containers/Privacy/Privacy";
import Refund from "./containers/Refund/Refund";
import Footer from "./components/footer/Footer";

//Search Routes
import SingleSearchItemDetails from "./containers/SingleSearchItem/SingleSearchItemDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/admin/auth" exact component={Auth} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/refund" exact component={Refund} />
          <Route path="/:id" exact component={SingleSearchItemDetails} />
          <PrivateRoute
            path="/admin/opd/"
            component={() => (
              <OPDAdmin>
                <Switch>
                  <Route
                    path="/admin/opd/services/"
                    exact
                    component={OPDServices}
                  />
                  <Route
                    path="/admin/opd/services/manageServices/"
                    exact
                    component={ManageServices}
                  />
                  <Route
                    path="/admin/opd/services/manageServices/:id"
                    exact
                    component={ManageServices}
                  />
                  <Route
                    path="/admin/opd/services/service/"
                    exact
                    component={OPDService}
                  />
                  <Route
                    path="/admin/opd/services/service/:id"
                    exact
                    component={ServiceView}
                  />
                  <Route path="/admin/opd/" exact component={OPDDashboard} />
                </Switch>
              </OPDAdmin>
            )}
          />
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
                  {/* notifications */}
                  <Route
                    path="/admin/notifications"
                    exact
                    component={Notifications}
                  />
                  <Route
                    path="/admin/notification/:id"
                    exact
                    component={Notification}
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
