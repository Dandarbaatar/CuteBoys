import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Footer from "./component/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
