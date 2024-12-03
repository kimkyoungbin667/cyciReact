import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Calc1 from './comp/calc/study01'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <About />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/calc1"} element={<Calc1 />} />
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
    </div>
  )
}

export default App;
