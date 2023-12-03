import Consulta from './../images/Consulta.png';
import Formulario from './../Formulario';

export default function Contacto() {
    return (
        <div className="AppClass">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <h className="HeaderClass">  <p> Dónde estamos</p> </h>
            <h className="HeaderClass2">  <p> ¿Hablamos?</p> </h>
            <h className="HeaderClass3">  <p> Cuéntanos cómo podemos ayudarte y nos pondremos en contacto lo antes posible.</p> </h>
            <Formulario className="HeaderClass3"/>
        </div>
    )
}