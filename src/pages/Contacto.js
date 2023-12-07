import Consulta from './../images/Consulta.png';
import Direccion from './../images/Direccion.svg';
import Horario from './../images/Horario.svg';
import Telefono from './../images/Telefono.svg';
import Correo from './../images/Correo.svg';
import Map from './../images/map.png';

import Formulario from './../Formulario';

export default function Contacto() {
    return (
        <div className="AppClass">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <h className="TituloClaro">  <p> Dónde estamos</p> </h>
            <div className="DondeEstamosL">
                <div className="container"> <img src={Direccion} className="DondeEstamosIcono" /> <p className="DondeEstamosTexto"> DIRECCIÓN </p> </div>
                <div className="container"> <img src={Horario} className="DondeEstamosIcono" /> <h className="DondeEstamosTexto"> HORARIO DE ATENCIÓN</h> </div>
                <div className="container"> <img src={Telefono} className="DondeEstamosIcono" /> <h className="DondeEstamosTexto"> TELEFONO DE CONTACTO</h> </div>
                <div className="container"> <img src={Correo} className="DondeEstamosIcono" /> <h className="DondeEstamosTexto"> CORREO ELECTRÓNICO</h> </div>
            </div>
            <div className="DondeEstamosR"><img src={Map} alt="Map" /></div>
            <h className="TituloOscuro">  <p> ¿Hablamos?</p> </h>
            <h className="TextoBasico">  <p> Cuéntanos cómo podemos ayudarte y nos pondremos en contacto lo antes posible.</p> </h>
            <Formulario className="TextoBasico" />
        </div>
    )
}