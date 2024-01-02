import React from 'react';
import "./SuscripcionesStripe.css"


const SuscripcionesStripe = () => {
    function DescargaButtonPlatinium() {  window.location.href = "https://buy.stripe.com/3cs4irb8i1sxgAEfYY";}
    function DescargaButtonGold() {  window.location.href = "https://buy.stripe.com/14k5mv7W65IN2JO4gh";}

    return (
        <div className="TarifasBase">
            <div className="TituloDoradoContainer" ><a className="TituloDorado"> Suscripciones</a></div>
            <h className="TarifasTexto"> Selecciona la suscripción que más se adapte a tus necesidades: </h>
            <div className='TarifasPaquetesContenedorFila'>
                <div className='TarifasPaqueteContenedorColumna'>
                        <a className='PaqueteTitulo' >Suscripción PLATINIUM </a>
                        <a className='PaqueteTexto'>Suscripcion mensual a Anna Vehí · Centre de nutrició</a>
                        <div className='PaquetePrecioContainer'>  <a className="PaquetePrecio"> 100€</a> <div className="PaquetePrecioFrecuenciaContainer"> <a className="PaquetePrecioFrecuenciaTexto"> por</a> <a className="PaquetePrecioFrecuenciaTexto"> mes</a> </div> </div>
                        <button className='PaqueteBoton' onClick={DescargaButtonPlatinium}>  SUSCRIBIRME  </button> 

                </div>
                <div className='TarifasPaqueteContenedorColumna'>
                        <a className='PaqueteTitulo' >Suscripción GOLD </a>
                        <a className='PaqueteTexto'>Suscripcion mensual a Anna Vehí · Centre de nutrició</a>
                        <div className='PaquetePrecioContainer'> <a className="PaquetePrecio"> 60€</a> <div className="PaquetePrecioFrecuenciaContainer"> <a className="PaquetePrecioFrecuenciaTexto"> por</a> <a className="PaquetePrecioFrecuenciaTexto"> mes</a> </div> </div>
                        <button className='PaqueteBoton' onClick={DescargaButtonGold}>  SUSCRIBIRME  </button> 

                </div>
            </div>
        </div>
    )
}
export default SuscripcionesStripe;