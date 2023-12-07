
import './App.css';
import Logo from './images/Logo.svg';
import Navbar from './Navbar';
import Homes from './pages/Home';
import Sobremi from './pages/sobremi';
import Servicios from './pages/Servicios';
import Reserva from './pages/Reserva';
import Contacto from './pages/Contacto';
import Consulta from './images/Consulta.png';
import credentials from './credentials';
import { Route, Routes } from "react-router-dom";
import { PopupWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
import CookieConsent from "react-cookie-consent";

const mapURL = `https:/maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;
//import Map from './Map';

function App() {
  return (
      <div className="AppClass">
        {/*<PopupButton url="https://calendly.com/annavehi"   rootElement={document.getElementById("root")} text="Click here to schedules!" />*/}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/sobremi" element={<Sobremi />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservacita" element={<Reserva />} />
        </Routes>
        <PopupWidget url="https://calendly.com/annavehi/primera_visita_presencial" rootElement={document.getElementById("root")}text="Reserva tu cita"textColor="#ffffff"color="#00a2ff" />
        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

      </div>
  );
}
export default App;
