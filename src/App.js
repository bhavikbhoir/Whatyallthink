import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Options from './components/Options'; 
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from './components/SignUp';

import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home}/>
             <Route path="/explore" component={Explore}/>
             <Route path="/notifications" component={Notifications}/>
             <Route path="/profile" component={Profile}/>
             <Route path="/options" component={Options}/>
             <Route path="/settings" component={Settings}/>
             <Route path="/login" component={Login}/>
             <Route path="/signup" component={Signup}/>
             <Route component={Error}/>
           </Switch>
           <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;