import './App.css';
import Cart from './p1'
import Timer from './p2'
import Page from './p3'

function App() {
  const data = [
    {id:1, text:'Hu'},
    {id:2, text:'He'},
    {id:3, text:'Ho'},
  ]
  const page = 1;
  return (
    <div>
      <h1>Cart</h1>
      <Cart/>
      <Timer/>
      <Page data={data} itemsPerPage={page} />
    </div>
  );
}

export default App;
