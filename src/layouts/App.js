import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Menu from './Menu';
import Home from '../views/home/Home';
import DonorDetail from '../views/donorDetail/DonorDetail';
import RequestBlood from '../views/requestBlood/RequestBlood';
import Profil from '../views/profil/profil';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/donordetail" component={DonorDetail} />
            <Route path="/requestblood" component={RequestBlood} />
            <Route path="/profil" component={Profil} />
          </Switch>
        </div>
        {/* <Menu /> */}
      </Router>
    </div>
  );
}

export default App;
