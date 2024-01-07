import React from 'react';
import { useState, useEffect } from 'react';
import { PopupButton } from "react-calendly";
import "./SuscripcionExplicacion.css"


const SuscripcionExplicacion = ({Type}) => {
    function DescargaButtonPlatinium() {  window.location.href = "https://buy.stripe.com/3cs4irb8i1sxgAEfYY";}
    function DescargaButtonGold() {  window.location.href = "https://buy.stripe.com/14k5mv7W65IN2JO4gh";}
    const [isLogged, setLog] = useState(0);
    return (
        <div className='FondoClaro'>
            {/*Titulo */}
            <div className="TituloContainer">
                <a className="Titulo"> <strong> ¿Cómo elijo la mejor suscripción para mí? </strong></a>
            </div>
            {/*Platinium */}
            <div className='ListaContainer'>
                <div className='ListaTitulo'>
                    <a>Suscripción PLATINUM</a>
                </div>
                <div className='ListasContainer'>
                    <div className='ListaIzquierda'>
                        <a>Es para ti si...</a>
                        <ul className="UnorderListIzquierda">
                            <li className="ListItemIzquierda"> Quieres hacer dos o más visitas mensuales </li>
                            <li className="ListItemIzquierda"> Estás en etapas iniciales de la intervención </li>
                            <li className="ListItemIzquierda"> Necesitas un seguimiento más continuo </li>
                            <li> Aún te cuesta implementar las recomendaciones nutricionales y de hábitos de vida trabajados </li>
                            <li> Sientes que aún no tienes suficiente conocimiento </li>
                            <li> Aún tienes sensación de pérdida de control sobre tu situación nutricional </li>
                            <li> Tu patología o condición requiere visitas semanales o quincenales</li>
                        </ul>
                    </div>
                    <div className='ListaDerecha'>
                        <a>No es para ti si...</a>
                        <ul className="UnorderListDerecha">
                            <li> Quieres hacer solamente una visita mensual </li>
                            <li> Estás en etapas finales de la intervención </li>
                            <li> Has comprendido la nutrición y estilo de vida adecuados para tu situación concreta </li>
                            <li> No tienes por delante grandes cambios, sino solo detalles por trabajar </li>
                            <li> Quieres hacer una monitorización periódica de tu composición corporal </li>
                            <li> Tu patología o condición no necesita un seguimiento tan continuo </li>
                        </ul>
                    </div>
                </div>
                {Type === "Reserva" ?  ( <PopupButton className="BotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />) : 
                (<button className='BotonReservar' onClick={DescargaButtonPlatinium}>  SUSCRIBIRME  </button> )}
            </div>
            {/* Gold */}
            <div className='ListaContainer'>
                <div className='ListaTitulo'>
                <a>Suscripción GOLD</a>

                </div>
                <div className='ListasContainer'>
                    <div className='ListaIzquierda'>
                    <a>Es para ti si...</a>
                    <ul className="UnorderListIzquierda">
                            <li> Quieres hacer solamente una visita mensual </li>
                            <li> Estás en etapas finales de la intervención </li>
                            <li> Has comprendido la nutrición y estilo de vida adecuados para tu situación concreta </li>
                            <li> No tienes por delante grandes cambios, sino solo detalles por trabajar </li>
                            <li> Quieres hacer una monitorización periódica de tu composición corporal </li>
                            <li> Tu patología o condición no necesita un seguimiento tan continuo </li>
                        </ul>
                    </div>
                    <div className='ListaDerecha'>
                    <a>No es para ti si...</a>
                    <ul className="UnorderListDerecha">
                            <li className="ListItem"> Quieres hacer dos o más visitas mensuales </li>
                            <li> Estás en etapas iniciales de la intervención </li>
                            <li> Necesitas un seguimiento más continuo </li>
                            <li> Aún te cuesta implementar las recomendaciones nutricionales y de hábitos de vida trabajados </li>
                            <li> Sientes que aún no tienes suficiente conocimiento</li>
                            <li> Aún tienes sensación de pérdida de control sobre tu situación nutricional </li>
                            <li> Tu patología o condición requiere visitas semanales o quincenales </li>
                        </ul>
                    </div>
                </div>
                {Type === "Reserva" ? ( <PopupButton className="BotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />) : 
                (<button className='BotonReservar' onClick={DescargaButtonGold}>  SUSCRIBIRME  </button> )}
            </div>
        </div>
    )
}
export default SuscripcionExplicacion;