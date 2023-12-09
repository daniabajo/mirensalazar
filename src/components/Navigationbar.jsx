import './Navigationbar.css'
import Logo from './../images/Logo.svg'

import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='Navigationbar'><ul>
        <CustomLink to="/sobremi">SOBRE MÍ</CustomLink>
        <CustomLink to="/servicios">SERVICIOS</CustomLink>
        <li><img src={Logo} className="LogoNavigationbar" alt="logo" /></li>
        <CustomLink to="/contacto">CONTACTO</CustomLink>
        <CustomLink to="/reservacita">RESERVA CITA</CustomLink>
      </ul></nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath=useResolvedPath(to);
  const isActive=useMatch({path:resolvedPath.pathname,end:true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}{...props}>{children}</Link>
    </li>
  )
}