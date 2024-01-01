import React from 'react';
import "./SuscripcionExplicacion.css"
import { PopupButton } from "react-calendly";


const SuscripcionExplicacion = () => {
    return (
        <div className='FondoClaro'>
            {/*Titulo */}
            <div className="TituloContainer">
                <a className="Titulo"> <strong> ¿Cómo elijo la mejor suscripción para mí? </strong></a>
            </div>
            {/*Platinium */}
            <div className='ListaContainer'>
                <div className='ListaTitulo'>
                    <a>Suscripcion PLATINIUM</a>
                </div>
                <div className='ListasContainer'>
                    <div className='ListaIzquierda'>
                        <a>Es para ti si...</a>
                        <ul className="UnorderListIzquierda">
                            <li> Quieres hacer dos o más visitas mensuales </li>
                            <li> Estás en etapas iniciales de la intervención </li>
                            <li> Necesitas un seguimiento más continuo </li>
                            <li> Aún te cuesta implementar las recomendaciones nutricionales y de hábitos de vida trabajados </li>
                            <li> Sientes que auún no tienes suficiente conocimiento </li>
                            <li> Aún tienes sensación de pérdida de control sobre tu situacion nutricional </li>
                            <li> Tu patología o condición requiere visitas semanales o quincenales</li>
                        </ul>
                    </div>
                    <div className='ListaDerecha'>
                        <a>No es para ti si...</a>
                        <ul className="UnorderListDerecha">
                            <li> Quieres hacer solamente una visita mensual </li>
                            <li> Estás en etapas finales de la intervención </li>
                            <li> Has comprendido la nutrición y estilo de vida adecuados para tu situación concreta </li>
                            <li> No tienes por delante grandes cambios, sino sólo detalles por trabajar </li>
                            <li> Quieres hacer una monitorización periódica de tu composición corporal </li>
                            <li> Tu patología o condición no necesita de un seguimiento tan continuo </li>
                        </ul>
                    </div>
                </div>
                <PopupButton className="BotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />
            </div>
            {/* Gold */}
            <div className='ListaContainer'>
                <div className='ListaTitulo'>
                <a>Suscripcion GOLD</a>

                </div>
                <div className='ListasContainer'>
                    <div className='ListaIzquierda'>
                    <a>Es para ti si...</a>
                    <ul className="UnorderListIzquierda">
                            <li> Quieres hacer solamente una visita mensual </li>
                            <li> Estás en etapas finales de la intervención </li>
                            <li> Has comprendido la nutrición y estilo de vida adecuados para tu situación concreta </li>
                            <li> No tienes por delante grandes cambios, sino sólo detalles por trabajar </li>
                            <li> Quieres hacer una monitorización periódica de tu composición corporal </li>
                            <li> Tu patología o condición no necesita de un seguimiento tan continuo </li>
                        </ul>
                    </div>
                    <div className='ListaDerecha'>
                    <a>No es para ti si...</a>
                    <ul className="UnorderListDerecha">
                            <li className="ListItem"> Quieres hacer dos o más visitas mensuales </li>
                            <li> Estás en etapas iniciales de la intervención </li>
                            <li> Necesitas un seguimiento más continuo </li>
                            <li> Aún te cuesta implementar las recomendaciones nutricionales y de hábitos de vida trabajados </li>
                            <li> Sientes que aúnm no tienes suficiente conocimiento</li>
                            <li> Aún tienes sensación de pérdida de control sobre tu situación nutricional </li>
                            <li> Tu patología o condición requiere visitas semanales o quincenales </li>
                        </ul>
                    </div>
                </div>
                <PopupButton className="BotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />
            </div>
        </div>
    )
}
export default SuscripcionExplicacion;