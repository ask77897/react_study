import React from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>HOME</h1>
            <Outlet/>
        </div>
    )
}


export default Home;

// import {BrowserRouter as Router} from 'react-router-dom';
// import './App.css';
// import { ReactDOM } from 'react';
// import Home from './ex1';
// import Chat from './ex1-1';
// import Video from './ex1-2';
// import React from 'react';
// import App from './App'

// ReactDOM.render(
  
    // <React.StrictMode>
    //   <Router>
    //     <App/>
    //   </Router>
    // </React.StrictMode>,
    // document.getElementById('root')
    // <Router>
    //   <>
        // <Route exact path='/' Component={Home}/>
        // <Route path='/chat' Component={Chat}/>
        // <Route path='/video' Component={Video}/>
    //   </>
    // </Router>
  // );
  


