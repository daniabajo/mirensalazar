import { InlineWidget } from "react-calendly";
import Telefono from './../images/Telefono.svg';
import Correo from './../images/Correo.svg';
import SuscripcionTablas from '../components/SuscripcionTablas';
import SuscripcionExplicacion from '../components/SuscripcionExplicacion';
import './../App.css';
import "./Reserva.css"
export default function Reserva() {
    return (
        <div>
            <div className="ReservaBaseCalendly">
                <h className="ReservaTitulo"> <a> Reserva tu cita</a> </h>
                <a className="TextoBasicoEncabezado"> A continuación puedes hacer la reserva de tu visita y el pago de tu suscripción la cual podrás cambiar o cancelar en cualquier momento:</a>
                <InlineWidget url="https://calendly.com/annavehi" styles={{ height: '800px', width: '100%', marginBottom:'5%', marginTop:'5%'}} />
                <a className="TextoBasicoEncabezado"> Si ningún horario se adapta a ti, puedes ponerte en contacto con nosotros a través de:</a>
                <div className="ReservaDondeEstamos">
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Telefono} className="DondeEstamosIcono" alt="Telefono" />
                        <div className="DondeEstamosDivisionTexto"><a className="DondeEstamosTextoMayus"> WHATSAPP O LLAMADA TELEFÓNICA </a> <a className="DondeEstamosTexto"> +34 623 003 020</a></div>
                    </div>
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Correo} className="DondeEstamosIcono" alt="Correo" />
                        <div className="DondeEstamosDivisionTexto"><a className="DondeEstamosTextoMayus"> CORREO ELECTRÓNICO </a> <a className="DondeEstamosTexto">  info@annavehi.com</a></div>
                    </div>
                </div>
            </div>
            <div className="FondoOscuro">
                <div className='FondoOscuroCentrar'>
                    <a className="TextoBasicoEncabezadoBeige">¿Tienes dudas sobre nuestro sistema de suscripciones?</a>
                    <div className="FondoOscuro">
                        <a className="TextoBasicoEncabezadoBeige">Consulta la sección <strong> Preguntas frecuentes </strong> más abajo o ponte en contacto con nosotros y te ayudaremos a resolverlas.</a>
                    </div>
                </div>
            </div>
            <SuscripcionTablas/>
            <SuscripcionExplicacion/>
            <div className="FondoOscuro">
                <div className='FondoOScuroCentrar'>
                    <a className="TextoBasicoEncabezadoBeige">¿Tienes dudas sobre nuestro sistema de suscripciones?</a>
                    <div className="FondoOscuro">
                        <a className="TextoBasicoEncabezadoBeige">Consulta la sección <strong> Preguntas frecuentes </strong> más abajo o ponte en contacto con nosotros y te ayudaremos a resolverlas.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}