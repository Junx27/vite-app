import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MakananPage from "./pages/MakananPage.jsx";
import MinumanPage from "./pages/MinumanPage.jsx";
import PromoPage from "./pages/PromoPage.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/makanan" Component={MakananPage} />
        <Route path="/minuman" Component={MinumanPage} />
        <Route path="/promo" Component={PromoPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
