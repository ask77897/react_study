import React from "react";
import './App.css';
import Login from './hw1';
import Array from './hw2';
import Lotto from './hw3';
import Lottery from './hw3-1'
import Context from './context'
import Language from './Language'

function App() {
  return (
    <div>
      <h1>로그인</h1>
      <Login/>
      <h1>배열</h1>
      <Array/>
      <h1>로또</h1>
      <Lotto/>
      <h1>Context</h1>
      <Context/>
      <h1>콘텍스트로 언어 전달</h1>
      <Language/>
      <h1>aaa</h1>
      <Lottery/>
    </div>
  );
}

export default App;
