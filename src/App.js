
import './App.css';
import Logo from './images/Logo.svg';
import Navigationbar from './components/Navigationbar';
import Footer from './components/Footer';
import Sobremi from './pages/Sobremi';
import Servicios from './pages/Servicios';
import Reserva from './pages/Reserva';
import Contacto from './pages/Contacto';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaCookies from './pages/PoliticaCookies';
import { Route, Routes } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <img src={Logo} className="LogoMain" alt="logo" />
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Sobremi />} />
        <Route path="/sobremi" element={<Sobremi />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reservacita" element={<Reserva />} />
        <Route path="/politicaprivacidad" element={<PoliticaPrivacidad />} />
        <Route path="/avisolegal" element={<AvisoLegal />} />
        <Route path="/politicacookies" element={<PoliticaCookies />} />
      </Routes>
      {/*<PopupWidget url="https://calendly.com/annavehi/primera_visita_presencial" rootElement={document.getElementById("root")}text="Reserva tu cita"textColor="white"color="#31464e" side="left" />*/}
      <FloatingWhatsApp phoneNumber="+34623003020" accountName="Centre de nutrició Anna Vehí" chatMessage="Hola, en qué podemos ayudarte?"  statusMessage='Responde antes de 48h'
      avatar="https://gravatar.com/avatar/c817e9d1eeffcaa42b1c9d5520672f03?s=400&d=robohash&r=x"/>
      <CookieConsent buttonText="Permitir" style={{ background: "#31464e", fontFamily:'Josefin Sans'}} buttonStyle={{ color: "black", fontSize: "13px", location: "left", fontFamily: 'Josefin Sans' }}
      >This website uses <Link className='TextoLinkConsentCookies' to="/politicacookies"> cookies</Link> to enhance the user experience.</CookieConsent>
<Footer/>
    </div>
  );
}
export default App;
