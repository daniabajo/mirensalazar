import Logo from './Logo.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav ClassName="NavClass">
      <ul>
        <CustomLink to="/sobremi">Sobre mí</CustomLink>
        <CustomLink to="/servicios">Servicios</CustomLink>
        <li><img src={Logo} className="LogoClass" alt="logo" /></li>
        <CustomLink to="/contacto">Contacto</CustomLink>
        <CustomLink to="/reservacita">Reserva cita</CustomLink>
      </ul>
    </nav>
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