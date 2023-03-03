import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Footer from "./component/footer";
import Author from "./Pages/Author";
import { Search } from "./Pages/Search";
import { News } from "./Pages/NewsDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/author" element={<Author />} />
        <Route path="/news-detail" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
