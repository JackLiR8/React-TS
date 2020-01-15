import React from 'react';
import logo from '../assets/images/logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Basic from './Basic';
import SocialPage from './SocialCardPage';
import WeatherCard from './WeatherForecast';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 导航 */}
        <nav>
          <NavLink 
            to="/basic"
            activeClassName="selected">
            Basic
          </NavLink>&nbsp;
          <NavLink 
            to="/social-card"
            activeClassName="selected">
            Social Card
          </NavLink>&nbsp;
          <NavLink 
            to="/weather"
            activeClassName="selected">
            Weather Forecast
          </NavLink>&nbsp;
        </nav>
      </header>
        {/* 路由 */}
        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
          <Route path="/social-card">
            <SocialPage />
          </Route>
          <Route path="/weather">
            <WeatherCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
