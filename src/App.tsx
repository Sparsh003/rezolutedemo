import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import History from "./components/History";
import Header from "./components/Header";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Detail />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
