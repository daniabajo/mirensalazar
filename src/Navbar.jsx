import Logo from './Logo.png'
/*import {Link} from 'react-router-dom';*/

export default function Navbar() {
  return (
    <nav ClassName="NavClass">
      <ul>
        <li>
          <a href="/sobremi" > Sobre mío</a>
        </li>
        <li>
          <a href="/servicios" >Servicios</a>
        </li>
        <li>
          <img src={Logo} className="LogoClass" alt="logo" />
        </li>
        <li>
          <a href="/contacto" >Contacto</a>
        </li>
        <li>
          <a href="/reservacita" >Reserva cita</a>
        </li>
      </ul>
    </nav>
  )
}
