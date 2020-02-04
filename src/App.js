import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Explore from './components/Explore';
import Notifications from './components/Notifications';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Profile from './components/Profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Options from './components/Options'; 
import Settings from './components/Settings';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/explore" component={Explore}/>
             <Route path="/notifications" component={Notifications}/>
             <Route path="/profile" component={Profile}/>
             <Route path="/options" component={Options}/>
             <Route path="/settings" component={Settings}/>
            <Route component={Error}/>
           </Switch>
           <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;