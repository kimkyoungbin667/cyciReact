import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Calc1 from './comp/calc/study01'
import Inp1 from "./comp/inp/input01"
import Oup1 from "./comp/inp/output01"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/calc1"} element={<Calc1 />} />

          <Route path={"/inp1"} element={<Inp1 />} />
          <Route path={"/oup1"} element={<Oup1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function About() {
  return (
    <div style={{ border: '2px blue solid' }}>
      <Link to="/">Home으로 이동</Link>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link>
      <br />
      <Link to="/calc1">Cal1로 이동하기</Link>

      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link> 
      <br/>
      <Link to="/oup1">데이터 출력</Link>

    </div>
  )
}

export default App;
