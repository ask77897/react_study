import logo from './logo.svg';
import './App.css';
import Variable from './variable';
import Counter from './count'
import { Coounter } from './cocount';
import Lotto from './lotto';

function App() {
  return (
    <div>
      <h1>start React 200!</h1>
      <p>CSS 적용하기</p>
      <Variable/>
      <Counter></Counter>
      <Coounter />
      <Lotto/>
    </div>
  );
}

export default App;
