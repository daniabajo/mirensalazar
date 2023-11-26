
import './App.css';
import Logo from './Logo.png';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Servicios from './pages/Servicios';
import Filosofia from './pages/Filosofia';
import Reserva from './pages/Reserva';
import Contacto from './pages/Contacto';
//import Map from './Map';
import credentials from './credentials';


const mapURL = `https:/maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function App() {
  let Page
  switch (window.location.pathname) {
    case "/": Page = <Home />
      break
    case "/home": Page = <Home />
      break
    case "/about": Page = <About />
      break
    case "/servicios": Page = <Servicios />
      break
    case "/filosofia": Page = <Filosofia />
      break
    case "/contacto": Page = <Contacto />
      break
    case "/reserva": Page = <Reserva />
      break

  }

  return (
    <div className="AppClass">
      <img src={Logo} className="LogoClassMain" alt="logo" />
      <Navbar />
      {Page}
      {/*<Map  
      //googleMapURL= {mapURL}
      //containerElement={<div style={{heigth:'400px'}}/>}
      //mapElement={<div style={{heigth:'100%'}}/>}
      //loadingElement={<p> Cargando </p>}
      ///>*/}
    </div>
  );
}

export default App;
