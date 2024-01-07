import "./DondeEstamos.css"
import Direccion from './../images/Direccion.svg';
import Horario from './../images/Horario.svg';
import Telefono from './../images/Telefono.svg';
import Correo from './../images/Correo.svg';
import { PopupButton } from "react-calendly";

const DondeEstamos = () => {
    return (
        <div className="DondeEstamosBase">
            <a className="TituloDorado"> Dónde estamos </a>
            <div className="DondeEstamos">
                <div className="DondeEstamosDivisionLeft">
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Direccion} className="DondeEstamosIcono" alt="Direccion" />
                        <div className="DondeEstamosDivisionTexto"> <a className="DondeEstamosTextoMayus"> DIRECCIÓN </a> <a className="DondeEstamosTexto"> Aribau 114, Entl 4º, 08036 Barcelona </a> </div>
                    </div>
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Horario} className="DondeEstamosIcono" alt="Horario" />
                        <div className="DondeEstamosDivisionTexto"> <a className="DondeEstamosTextoMayus"> HORARIO DE ATENCIÓN </a> <a className="DondeEstamosTexto"> Lunes-Viernes: 9-21h (con cita previa) </a> </div>
                    </div>
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Telefono} className="DondeEstamosIcono" alt="Telefono" />
                        <div className="DondeEstamosDivisionTexto"><a className="DondeEstamosTextoMayus"> TELÉFONO DE CONTACTO </a> <a className="DondeEstamosTexto"> +34 623 003 020</a></div>
                    </div>
                    <div className="DondeEstamosDivisionIcono">
                        <img src={Correo} className="DondeEstamosIcono" alt="Correo" />
                        <div className="DondeEstamosDivisionTexto"><a className="DondeEstamosTextoMayus"> CORREO ELECTRÓNICO </a> <a className="DondeEstamosTexto">  info@annavehi.com</a></div>
                    </div>
                    <div className="LineVertical"> </div>
                    <div className="DondeEstamosBotonReservarContainer">
                        <PopupButton className="DondeEstamosBotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />
                    </div>
                </div>
                <div className="DondeEstamosDivisionRigth">
                    <iframe className="DondeEstamosMap" src="https://maps.google.com/maps?width=1200&amp;height=1020&amp;hl=en&amp;q=C.%20de%20Aribau,%20114,%20Entl%204%C2%AA,%2008036%20Barcelona+(Anna%20Veh%C3%AD%20Centre%20Nutrici%C3%B3)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                </div>
            </div>
        </div >
    )
}
export default DondeEstamos;