import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css'
import HomeScreen from "./Frontend/HomeScreen";
import AnalyticsScreen from "./Frontend/AnalyticsScreen";
import AddScreen from "./Frontend/AddScreen";
import SettingsScreen from "./Frontend/SettingsScreen";

function App() {
  return (
      <Router>
          <div className="App">
              <Route  exact path= "/" render={() => {return <HomeScreen />}} />
              <Route  path= "/add" render={() => {return <AddScreen />}} />
              <Route  path= "/analytics" render={() => {return <AnalyticsScreen />}} />
              <Route  path= "/settings" render={() => {return <SettingsScreen />}} />
          </div>
      </Router>
  );
}

export default App;
