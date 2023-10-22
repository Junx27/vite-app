import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import ContactUS from "./pages/ContactUS.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/kontakus" Component={ContactUS} />
      </Routes>
    </div>
  );
}

export default App;
