import Champ from './champ';
import Chaminfo from './chainfo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' Component={Champ}/>
          <Route path='/champions/:id' Component={Chaminfo}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//https://developer.riotgames.com/docs/lol
