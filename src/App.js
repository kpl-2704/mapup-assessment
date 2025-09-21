import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import TollMatch from "./Components/TollMatch";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="p-4 bg-gray-900 text-white flex gap-6">
          <Link to="/">Landing</Link>
          <Link to="/product">TollTally</Link>
          <Link to="/tollmatch">TollMatch</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/tollmatch" element={<TollMatch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
