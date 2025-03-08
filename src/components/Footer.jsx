import "./Footer.css"
import LeadMagnet from './../images/LeadMagnetSinFondo.png';
import { PopupButton } from "react-calendly";
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'


const Footer = () => {
    function DescargaButton() { window.scrollTo(0, 0); }
    return (
        <div className="Footer">
            <div className="FooterMain">
                <div className="FooterMainDescarga">
                    <div >
                        <img className="FooterMainDescargaImagen" src={LeadMagnet} alt="LeadMagnet" />
                    </div>
                    <div className="FooterMainDescargaTexto">
                        <a className="FooterMainDescargaTextoTitulo"> Guía práctica hacia una vida saludable </a>
                        <a className="FooterMainDescargaTextoTexto"> ¡Descubre los consejos que te llevarán a obtener resultados permanentes de una vez por todas! </a>
                        <button className="FooterMainDescargaBoton" onClick={DescargaButton} > <Link to="/descargas" className="LinkBoton" style={{ textDecoration: "none", width: '100%' }}> DESCARGA</Link> </button>
                    </div>
                </div>
                <div className="FooterMainSiguenos">
                    <a className="FooterMainSiguenosTextoTitulo"> Síguenos </a>
                    <div className="FooterMainSiguenosIcono">
                        <SocialIcon className="FooterMainSiguenosIconoIcono" network="instagram" url="https://instagram.com/mirensalazar.nutricionista/" bgColor="#b69f8e" fgColor="#e2dcd9" />
                        <SocialIcon className="FooterMainSiguenosIconoIcono" network="facebook" url="https://facebook.com/mirensalazar.nutricionista/" bgColor="#b69f8e" fgColor="#e2dcd9" />
                    </div>
                    <a className="FooterMainSiguenosTextoTexto"> info@mirensalazar.com </a>
                    <a className="FooterMainSiguenosTextoTexto"> +34 623 003 020 </a>
                    <PopupButton className="FooterBotonReservar" url="https://calendly.com/mirensalazar/" rootElement={document.getElementById("root")} text="RESERVA CITA" />
                </div>
            </div>
            <div className="FooterCreacion">
                <a > Miren Salazar · Consulta de nutrición 2023 </a>
            </div>
            <div className="FooterLegalidad" >
                <a className="FooterLegalidadTexto" >
                    <Link className="FooterLegalidadTexto" to="/avisolegal"> Aviso Legal </Link> | <Link className="FooterLegalidadTexto" to="/politicaprivacidad"> Política de privacidad </Link> |
                    <Link className="FooterLegalidadTexto" to="/politicacookies"> Política de cookies</Link> | <Link className="FooterLegalidadTexto" to="/condicionescontratacion"> Condiciones de contratación</Link>
                </a>
                <button className="FooterLegalidadBotonArriba" onClick={DescargaButton}>Volver arriba</button>
                <button className="FooterLegalidadBotonArribaMobile" onClick={DescargaButton}>🡁</button>
            </div>
        </div>
    )
}
export default Footer;