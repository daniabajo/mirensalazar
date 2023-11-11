import Logo from './Logo.png';

export default function Navbar() {
  return (
    <nav ClassName="NavClass">
      <ul>
        <li>
          <a href="/home" >Home</a>
        </li>
        <li>
          <a href="/about" >About</a>
        </li>
        <li>
          <a href="/servicios" >Servicios</a>
        </li>
        <li>
          <img src={Logo} className="LogoClass" alt="logo" />
        </li>
        <li>
          <a href="/filosofia" >Filosofia</a>
        </li>
        <li>
          <a href="/reserva" >Reserva</a>
        </li>
        <li>
          <a href="/contacto" >Contacto</a>
        </li>
      </ul>
    </nav>
  )
}
