import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <div id="outer-container">
          <Navbar pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
        </div>
        <div id="page-wrap">
          <Routes>
          <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
