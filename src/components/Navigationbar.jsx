import './Navigationbar.css'
import Logo from './../images/Logo3.svg'

import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='Navigationbar'>
      <ul>
        <CustomLink to="/sobremi">SOBRE MÍ</CustomLink>
        <CustomLink to="/servicios">SERVICIOS</CustomLink>
        <li><img src={Logo} className="LogoNavigationbar" alt="logo" /></li>
        <CustomLink to="/contacto">CONTACTO</CustomLink>
        <CustomLinkReserva to="/reservacita"> <a className='TextoReservarCitaNav'> RESERVA CITA </a></CustomLinkReserva>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}{...props}>{children}</Link>
    </li>
  )
}

function CustomLinkReserva({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
      <li className={isActive ? "BotonReservarNavActive" : "BotonReservarNav"}>
        <a> <Link to={to}{...props}>{children}</Link> </a>
      </li>
  )
}