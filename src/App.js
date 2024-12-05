import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Calc1 from './comp/calc/study01'
import Inp1 from "./comp/inp/input01"
import Oup1 from "./comp/inp/output01"
import MyProfile from "./comp/inp/myProfile"
import Result from "./comp/inp/result"
import Ax1 from './comp/ax/ax01'
import Ref from './comp/inp/Ref01'
import Join from './comp/inp/Join'
import Login from './comp/inp/login'
import LoginResult from './comp/inp/successLogin'
import Llogin from './comp/inp/llogin'
import ItemList from './comp/inp/ItemList'
import AddBoard from './comp//inp/addBoard'
import ListBoard from './comp//inp/listBoard'
import DetailBoard from './comp//inp/detailBoard'

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
          <Route path={"/myprofile"} element={<MyProfile />} />
          <Route path={"/result"} element={<Result />} />

          <Route path={"/ax1"} element={<Ax1 />} />
          <Route path={"/ref1"} element={<Ref />} />
          <Route path={"/join"} element={<Join />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/loginResult"} element={<LoginResult />} />
          <Route path={"/llogin"} element={<Llogin />} />
          <Route path={"/itemList"} element={<ItemList />} />
          <Route path={"/addBoard"} element={<AddBoard />} />
          <Route path={"/listBoard"} element={<ListBoard />} />
          <Route path={"/detailBoard"} element={<DetailBoard />} />
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
      <br />
      <Link to="/oup1">데이터 출력</Link>
      <br />

      <h4>Axios</h4>
      <Link to="/ax1">AXIOS 사용</Link>
      <br />
      <Link to="/myprofile">나의 정보 입력하기</Link>
      <br />
      <Link to="/ref1">Ref 사용하기</Link>
      <br />
      <Link to="/join">join 사용하기</Link>
      <br />
      <Link to="/login">로그인 하러가기</Link>
      <br />
      <Link to="/llogin">강사님의 로그인 하러가기</Link>
      <br />
      <Link to="/itemList">아이템 리스트</Link>
      <br />
      <Link to="/addBoard">게시글 추가하기</Link>
      <br />
      <Link to="/listboard">게시글 목록</Link>
    </div>
  )
}

export default App;
