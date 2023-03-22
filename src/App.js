import "./App.css";
import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stocks" element={<Dashboard />}></Route>
        <Route path="/stocks/:symbols" element={<Stocks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
