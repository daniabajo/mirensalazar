import Consulta from './../images/Consulta.png';
import Direccion from './../images/Direccion.svg';
import Horario from './../images/Horario.svg';
import Telefono from './../images/Telefono.svg';
import Correo from './../images/Correo.svg';
import Map from './../images/map.png';
import Formulario from './../Formulario';
import { PopupButton } from "react-calendly";



export default function Contacto() {
    return (
        <div className="AppClass">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <h className="TituloClaro">  <p> Dónde estamos</p> </h>
            <div className="DondeEstamosL">
                <div className="container"> <img src={Direccion} className="DondeEstamosIcono" /> <p className="DondeEstamosTexto"> DIRECCIÓN: Aribau 114, Entl 4º, 08036 Barcelona </p></div>
                <div className="container"> <img src={Horario} className="DondeEstamosIcono" /> <h className="DondeEstamosTexto"> HORARIO: Lunes-Viernes: 9-21h /h (con cita previa) </h> </div>
                <div className="container"> <img src={Telefono} className="DondeEstamosIcono" /> <h className="DondeEstamosTexto"> TELEFONO: +34 623 003 020</h> </div>
                <div className="container"> <img src={Correo} className="DondeEstamosIcono" /> <h className="DondeEstamosTexto"> CORREO: info@annavehi.com</h> </div>
                <PopupButton url="https://calendly.com/annavehi/primera_visita_presencial" textColor="white" color="#31464e" styles={{ height: '20px', textColor:"white", color:"#31464e"}}  rootElement={document.getElementById("root")} text="RESERVA CITA" />
            </div>
            <div className="DondeEstamosR">
            <iframe width="800" height="620" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1200&amp;height=1020&amp;hl=en&amp;q=C.%20de%20Aribau,%20114,%20Entl%204%C2%AA,%2008036%20Barcelona+(Anna%20Veh%C3%AD%20Centre%20Nutrici%C3%B3)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                </div>
            <h className="TituloOscuro">  <p> ¿Hablamos?</p> </h>
            <h className="TextoBasicoFondoOscuro">  <p> Cuéntanos cómo podemos ayudarte y nos pondremos en contacto lo antes posible.</p> </h>
            <Formulario className="TextoBasicoFondoOscuro" />
        </div>
    )
}