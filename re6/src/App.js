import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Home from './ex1';
import Chat from './ex1-1';
import Video from './ex1-2';
import Product from "./p1";
import Query from "./p2";
import Productlist from './p3';


function HomeSweetHome(){
  return(
    <>
      <p>Home</p>
    </>
  );
}
function HomeList(){
  return(
    <p>Home List : </p>
  );
}
function VideoHome(){
  return(
    <>
      <p>Video Home</p>
    </>
  );
}
function VideoList(){
  return(
    <p>Video List : </p>
  );
}
function ChatHome(){
  return(
    <>
      <p>Chat Home</p>
    </>
  );
}
function ChatList(){
  return(
    <p>Chat List : </p>
  );
}

function App() {
  const productData = [
    {id:1, name: 'water', price: '2000'},
    {id:2, name: 'cola', price: '3500'},
    {id:3, name: 'beer', price: '5000'},
    {id:4, name: 'cola', price: '2000'},
    {id:5, name: 'beer', price: '4500'},
  ];
  return (
    <div>
      <Router>
        {/* 라우트 설정 */}
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<HomeSweetHome/>}/>
            <Route path="list" element={<HomeList/>}/>
          </Route>
          <Route path='/chat' element={<Chat/>}>
            <Route index element={<ChatHome/>}/>
            <Route path="list" element={<ChatList/>}/>
          </Route>
          <Route path='/video' element={<Video/>}>
            <Route index element={<VideoHome/>}/>
            <Route path="list" element={<VideoList/>}/>
          </Route>
          <Route path='/product/:id' element={<Product data={productData}/>}/>
          <Route path="/query" element={<Query/>}/>
          <Route path="/productlist/:id" element={<Productlist data={productData}/>}/>
        </Routes>
      <nav>
        <ul>
          <li>
           <Link to='/'>홈</Link>
          </li>
          <li>
            <Link to='/chat'>채팅</Link>
          </li>
          <li>
            <Link to='/video'>비디오</Link>  
          </li>
          <li>
            <Link to='/query'>query</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          {productData.map((product) => (
            <li key={product.id}>
              <Link to={`/video/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      </Router>
    </div>
  );
}
export default App;