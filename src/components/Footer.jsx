import "./Footer.css"
import Direccion from './../images/Direccion.svg';
import Horario from './../images/Horario.svg';
import Telefono from './../images/Telefono.svg';
import { PopupButton } from "react-calendly";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'



const Footer = () => {
    return (
        <div className="Footer">
            <div className="FooterMain">
                <div className="FooterMainDescarga">
                    <div >
                    <img className="FooterMainDescargaImagen"  src={Direccion}  alt="Direccion" />
                    </div>
                    <div className="FooterMainDescargaTexto">
                        <a className="FooterMainDescargaTextoGrande"> Las 10 claves del éxito a largo plazo. </a>
                        <a className="FooterMainDescargaTextoLargo"> ¡Descubre los consejos que te llevarán a obtener resultados permanentes de una vez por todas! </a>
                        <button className="FooterMainDescargaBoton"> DESCARGA </button>
                    </div>
                </div>
                <div className="FooterMainSiguenos">
                    <a className="FooterMainSiguenosTextoGrande"> Síguenos </a>
                    <div className="FooterMainSiguenosIcono">
                    <SocialIcon className="FooterMainSiguenosIconoIcono" network="instagram" url="https://instagram.com" bgColor="#b69f8e" fgColor="#e2dcd9"/> 
                    <SocialIcon className="FooterMainSiguenosIconoIcono" network="facebook" url="https://facebook.com"  bgColor="#b69f8e" fgColor="#e2dcd9"/> 
                    </div>
                    <a className="FooterMainSiguenosTextoPeque"> info@annavehi.com </a>
                    <a className="FooterMainSiguenosTextoPeque"> +34 623003020 </a>
                </div>
            </div>
            <div className="FooterCreacion">
                <a > Anna Vehi . Centre de nutrició 2023 </a>
            </div>
            <div className="FooterLegalidad">
                <a><Link className="FooterLegalidadTexto"  to="/avisolegal"> Aviso Legal </Link> | <Link className="FooterLegalidadTexto" to="/politicaprivacidad"> Política de privacidad </Link> |
                 <Link className="FooterLegalidadTexto"  to="/politicacookies"> Política de cookies</Link> | <Link  className="FooterLegalidadTexto" to="/politicacookies"> Condiciones generales de contratación</Link> </a>
            </div>
        </div>
    )
}
export default Footer;