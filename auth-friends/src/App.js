import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { FriendList } from './components/FriendList';
import { PrivateRoute } from './components/PrivateRoute';
import './App.css'
function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login Page</Link>
              </li>
              <li>
                <Link to="/friends">Friend List</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/friends">
            <Route path="/friends" component={FriendList}/>
          </PrivateRoute>
        </Switch>
      </Router>
  );
}

export default App;
