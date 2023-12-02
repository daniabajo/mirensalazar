
import './App.css';
import Logo from './Logo.png';
import Navbar from './Navbar';
import Homes from './pages/Home';
import Sobremi from './pages/sobremi';
import Servicios from './pages/Servicios';
import Reserva from './pages/Reserva';
import Contacto from './pages/Contacto';
//import Map from './Map';
import credentials from './credentials';
import { Route, Routes } from "react-router-dom";
const mapURL = `https:/maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;
function App() {
  return (
    <>
      <div className="AppClass">
      <img src={Logo} className="LogoClassMain" alt="logo" />
      <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservacita" element={<Reserva />} />
        </Routes>
      </div>

    </>

  );
}
export default App;
