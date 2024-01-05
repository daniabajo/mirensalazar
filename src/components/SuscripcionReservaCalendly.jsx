import { InlineWidget } from "react-calendly";
import Telefono from './../images/Telefono.svg';
import Correo from './../images/Correo.svg';
import './SuscripcionReservaCalendly.css';

const SuscripcionReservaCalendly = () => {
    return (
        <div>
            <div className="ReservaContainer">
                <h className="ReservaTitulo"> <a> Reserva tu cita</a> </h>
                <a className="ReservaTexto"> A continuación puedes hacer la reserva de tu visita y el pago de tu suscripción la cual podrás cambiar o cancelar en cualquier momento:</a>
            </div>
            <div className="ReservaCalendlyContainer">
                <InlineWidget url="https://calendly.com/annavehi" styles={{ height: '900px', width: '100%' }} />
            </div>
            <div className="ReservaContainer">

                <a className="ReservaTexto"> Si ningún horario se adapta a ti, puedes ponerte en contacto con nosotros a través de:</a>
                <div className="ReservaDondeEstamosContainer">
                    <div className="ReservaDondeEstamosContainerRow">
                        <img src={Telefono} className="ReservaDondeEstamosIcono" alt="Telefono" />
                        <div className="ReservaDondeEstamosContainerTexto"><a className="ReservaDondeEstamosTextoMayus"> WHATSAPP O LLAMADA TELEFÓNICA </a> <a className="ReservaDondeEstamosTexto"> +34 623 003 020</a></div>
                    </div>
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Correo} className="DondeEstamosIcono" alt="Correo" />
                        <div className="DondeEstamosDivisionTexto"><a className="DondeEstamosTextoMayus"> CORREO ELECTRÓNICO </a> <a className="DondeEstamosTexto">  info@annavehi.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuscripcionReservaCalendly;