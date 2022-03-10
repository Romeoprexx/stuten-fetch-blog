import { Outlet } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main">
      <Header />
      <Cards />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
