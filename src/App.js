
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
import Descargas from './pages/Descargas';
import { Route, Routes } from "react-router-dom";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import CookieConsent from "react-cookie-consent";
import { Link ,useLocation} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'
import Popup from './components/Popup';
import { useState, useEffect } from 'react';
import CondicionesContratacion from './pages/CondicionesContratracion';
import ReactGA from 'react-ga';
ReactGA.initialize('G-F9DZ724DR7');

function App() {
  const [ButtonPopUp,SetButtonPopUp]=useState(false);
  const [TimePopUp,SetTimePopUp]=useState(false);
  useEffect (()=>{setTimeout(() => {SetTimePopUp(true);},3000);},[])
  const location = useLocation();
  useEffect(() => {ReactGA.pageview(location.pathname + location.search); }, [location]); 
  return (false) ? (
    <div>
      <img src={Logo} className="LogoMain" alt="logo" />
      <Popup Trigger={TimePopUp} SetTrigger={SetTimePopUp}></Popup>
      <Navigationbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Sobremi />} />
        <Route path="/sobremi" element={<Sobremi />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reservacita" element={<Reserva />} />
        <Route path="/politicaprivacidad" element={<PoliticaPrivacidad />} />
        <Route path="/avisolegal" element={<AvisoLegal />} />
        <Route path="/politicacookies" element={<PoliticaCookies />} />
        <Route path="/condicionescontratacion" element={<CondicionesContratacion />} />
        <Route path="/descargas" element={<Descargas />} />
      </Routes>
      {/*<PopupWidget url="https://calendly.com/annavehi/primera_visita_presencial" rootElement={document.getElementById("root")}text="Reserva tu cita"textColor="white"color="#31464e" side="left" />*/}
      <FloatingWhatsApp className="a" phoneNumber="+34623003020" accountName="Centre de nutrició Anna Vehí" chatMessage="Hola, en qué podemos ayudarte?"  statusMessage='Responde antes de 48h'
        avatar="https://annavehi.com/favicon.png" />
      <CookieConsent buttonText="Permitir" style={{ background: "#31464e", fontFamily:'Josefin Sans'}} buttonStyle={{ color: "black", fontSize: "13px", location: "left", fontFamily: 'Josefin Sans' }}
      >This website uses <Link className='TextoLinkConsentCookies' to="/politicacookies"> cookies</Link> to enhance the user experience.</CookieConsent>
<Footer/>
    </div>
  ) :  <div><img src={Logo} className="LogoMan" alt="logo" />  <a className='TituloDorado'>PRÓXIMAMENTE...</a></div>     
 
}
export default App;
