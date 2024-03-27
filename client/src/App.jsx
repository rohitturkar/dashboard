import "./App.css";

import { BrowserRouter as Router, Route,Routes , NavLink } from 'react-router-dom';
import MainComp from "./Views";
import Dashboard from "./Views/Dashboard/Components/Dashboard";
import Profile from "./Views/Dashboard/Components/Profile";


function App() {
  return (
    <div>
      {/* <NavBar />
      <DashboardApp /> */}
      <MainComp/>
      <Routes>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/account" component={Profile} />
      </Routes>
    </div>
  );
}

export default App;
