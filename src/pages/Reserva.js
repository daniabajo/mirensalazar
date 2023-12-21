import { InlineWidget } from "react-calendly";
import Consulta from './../images/Consulta.png';
import './../App.css';
import Tarifas from './../components/Tarifas';
export default function Reserva() {
    return (
        <div className="AppClassOscuro">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <h className="TituloDorado"> <a> Reserva tu cita</a> </h>
            <InlineWidget  url="https://calendly.com/annavehi/primera_visita_presencial" styles={{ height: '1000px' }}  />
            <Tarifas />
        </div>
    )
}