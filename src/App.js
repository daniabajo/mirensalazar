
import './App.css';
import Logo from './Logo.png';
import Navbar from './Navbar.jsx';

function App() {
  return (
    <div className="AppClasss">
      <img src={Logo} className="LogoClass" alt="logo" />
      <Navbar />
      <header className="HeaderClass">  <p> PRÓXIMAMENTE...</p> </header>
    </div>
  );
}

export default App;
