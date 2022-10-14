import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Adduser from './Components/Adduser';
import Blue from './Components/Blue';
import Green from './Components/Green';
import Yellow from './Components/Yellow';


const App =()=>{
  return(
      <>
      <BrowserRouter>
       <div className='header'>
         <Navbar/>
      </div>
         <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/user" component={Adduser}/>
              <Route path="/blue" component={Blue}/>
              <Route path="/green" component={Green}/>
              <Route path="/yellow" component={Yellow}/>
              <Route component={NotFound}/>
            
        </Switch>
        </BrowserRouter>
      </>
  )
}
export default App;