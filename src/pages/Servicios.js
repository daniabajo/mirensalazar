import ServiciosPanel from "../components/ServiciosPanel";
import { PopupButton } from "react-calendly";
import Consulta from './../images/Consulta.png';


export default function Servicios() {
    return (
        <div className="AppClass">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <h className="TituloDorado">  <a> Servicios</a> </h>
            <ServiciosPanel />
            {/*<PopupButton className="ServiciosBotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />*/}
        </div>
    )
}