import React from 'react';
import LeadMagnet from './../images/LeadMagnet.png';
import StripeContainer from './StripeContainer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./Subscripciones.css"


const Subscripciones = () => {
    const [showItemPlatinium,setShowItemPlatinium] = useState (false);
    const [showItemGold,setShowItemGold] = useState (false);
    function DescargaButton() {  window.location.href = "https://buy.stripe.com/14k5mv7W65IN2JO4gh";}
    return <div className="TarifasBase">
        <h className="TarifasTitulo"> <a> Subscripciones</a> </h>
        <div className='TarifasPaquetesContenedor'>
        <div className="TarifasTextoContenedor"><h className="TarifasTexto"> <p> Elige la subscripción que mejor se adapte a tu objetivo:</p> </h></div>
            <div className='TarifasPaquetesFila'>
                <div className='TarifasPaquetesCuadro'>
                    <div className='PaqueteTitulo'>
                        <a >PAQUETE PLATINIUM </a>
                        <a className='PaqueteTituloTachado'> 230€</a>
                        <a> 100€</a>
                    </div>
                    <a className='PaqueteTexto'>¿Qué incluye?</a>
                    <ul className='PaqueteLista'>
                        <li className='PaqueteListaItem'>Visitas ilimitadas*</li>
                        <li className='PaqueteListaItem' >Seguimiento por WhatsApp ilimitado**</li>
                    </ul>
                    <div className='PaqueteCondicionesContainer'>
                    <h className='PaqueteCondiciones' >*con un máximo de una visita semanal</h>
                    <h className='PaqueteCondiciones' >**respuestas en un máximo de 48h hábiles</h>
                    </div>
                </div>
                <img className='TarifasPaquetesFoto' src={LeadMagnet} alt="LeadMagnet" />
            </div>
            {showItemPlatinium ? (<StripeContainer />) : (<>	<button className="Button" onClick={() => setShowItemPlatinium(true)}> Compra</button> </>)}
            <h></h>
            <h></h>
            <div className='TarifasPaquetesFila'>
                <img className='TarifasPaquetesFoto' src={LeadMagnet} alt="LeadMagnet" />
                <div className='TarifasPaquetesCuadro'>
                    <a className='PaqueteTitulo'>
                        <a> PAQUETE GOLD </a>
                        <a className='PaqueteTituloTachado'> 80€</a>
                        <a> 60€</a>
                    </a>
                    <a className='PaqueteTexto'>¿Qué incluye?</a>
                    <ul className='PaqueteLista'>
                        <li className='PaqueteListaItem'>Una visita mensual</li>
                        <li className='PaqueteListaItem' >Seguimiento por WhatsApp ilimitado**</li>
                    </ul>
                    <div className='PaqueteCondicionesContainer'>
                    <a className='PaqueteCondiciones' >*respuestas en un máximo de 48h hábiles</a>
                    </div>
                </div>
            </div>
            <button onClick={DescargaButton}>  Compra  </button> 
        </div>

        
    </div>
}
export default Subscripciones;