import { InlineWidget } from "react-calendly";
import Consulta from './../images/Consulta.png';
import './../App.css';
export default function Reserva() {
    return (
        <div className="AppClass">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <h className="HeaderClass"> <p> Reserva tu cita</p> </h>
            <InlineWidget  url="https://calendly.com/annavehi/primera_visita_presencial"  />
        </div>
    )
}