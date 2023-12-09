import Consulta from './../images/Consulta.png';
import DondeEstamos from './../components/DondeEstamos';
import Formulario from '../components/Formulario';

export default function Contacto() {
    return (
        <div className="AppClass">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <DondeEstamos />
            <Formulario />
        </div>
    )
}