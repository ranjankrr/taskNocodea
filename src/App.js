import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './Components/Admin';
import Login from './Components/Login';
import Registration from './Components/Registration';

import Navbar from './Components/Navbar';


const App =()=>{
  return(
      <>
         <div className='header'>
             <Navbar/>
         </div>
         <Switch>
              <Route exact path="/" component={Registration}/>
              <Route path="/about" component={Login}/>
              <Route path="/skills" component={Admin}/>
              
         </Switch>
      
      </>
  )
}
export default App;