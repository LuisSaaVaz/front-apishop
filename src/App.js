import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import NavbarMovil from "./components/Header/NavbarMovil";
import "./styles/app.css";
import { ScrollRestoration } from "react-router-dom";
import { ScroolToTop } from "./components/ScroolToTop";

function App() {
  return (
    <main className="main__container">
      <ScroolToTop />
      <Header />
      <Outlet />
      <NavbarMovil />
      <Footer />
      {/* <ScrollRestoration /> */}
    </main>
  );
}

export default App;
