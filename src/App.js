
import './App.css';
import Logo from './Logo.png';
import Navbar from './Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Servicios from './pages/Servicios'
import Filosofia from './pages/Filosofia'
import Reserva from './pages/Reserva'
import Contacto from './pages/Contacto'

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
    </div>
  );
}

export default App;
