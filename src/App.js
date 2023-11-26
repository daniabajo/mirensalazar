
import './App.css';
import Logo from './Logo.png';
import Navbar from './Navbar';
import Homes from './pages/Home';
import Sobremi from './sobremi';
import Servicios from './pages/Servicios';
import Reserva from './pages/Reserva';
import Contacto from './pages/Contacto';
//import Map from './Map';
import credentials from './credentials';


const mapURL = `https:/maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

function App() {
  let Page
  switch (window.location.pathname) {
    case "/": Page = <Homes />
      break
    case "/home": Page = <Homes />
      break
    case "/sobremi": Page = <Sobremi />
      break
    case "/servicios": Page = <Servicios />
      break
    case "/contacto": Page = <Contacto />
      break
    case "/reservacita": Page = <Reserva />
      break

  }

  return (
    <div className="AppClass">
      <img src={Logo} className="LogoClassMain" alt="logo" />
      <Navbar />
      <Servicios />
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
