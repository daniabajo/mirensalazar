import Logo from './Logo.png';

export default function Navbar() {
  return (
    <nav ClassName="NavClass">
      <ul>
        <li>
          <a href="/about" >Sobre mí</a>
        </li>
        <li>
          <a href="/servicios" >Servicios</a>
        </li>
        <li>
          <img src={Logo} className="LogoClass" alt="logo" />
        </li>
        <li>
          <a href="/reserva" >Contacto</a>
        </li>
        <li>
          <a href="/contacto" >Reserva cita</a>
        </li>
      </ul>
    </nav>
  )
}
