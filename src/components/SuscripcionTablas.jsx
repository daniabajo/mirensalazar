import React from 'react';
import { PopupButton } from "react-calendly";
import "./SuscripcionTablas.css"

const Tablas = () => {
  return (
    <div className='TablasContainer'>
      <div className='TablasTituloContainer'>
        <h className="TablasTitulo"> <strong> ¿Qué incluyen las suscripciones?</strong> </h>
      </div>
      <div className="TablasTablaContainer" style ={{gap:'2rem'}}>
        <table>
          <thead >
            <tr>
              <th className="TableHeader" >SUSCRIPCIÓN</th>
              <th className="TableHeader">PLATINIUM</th>
              <th className="TableHeader">GOLD</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <th>Número de visitas mensuales</th>
              <th>Ilimitadas</th>
              <th>1 visita</th>
            </tr>
            <tr >
              <th>Duración de las visitas</th>
              <th>30 minutos</th>
              <th>30 minutos</th>
            </tr>
            <tr>
              <th>Seguimiento ilimitado vía WhatsApp**</th>
              <th>✔</th>
              <th>✔</th>
            </tr>
            <tr>
              <th>Estudios de composición corporal con bioimpedancia</th>
              <th>✔</th>
              <th>✔</th>
            </tr>
            <tr>
              <th>Estudios antropométricos y de somatotipo</th>
              <th>✔</th>
              <th>✔</th>
            </tr>
            <tr>
              <th>Informe inicial con hoja de ruta</th>
              <th>✔</th>
              <th>✔</th>
            </tr>
            <tr>
              <th>Módulos formativos personalizados</th>
              <th>✔</th>
              <th>✔</th>
            </tr>
            <tr>
              <th>Precio mensual</th>
              <th> <a className='TablasPrecioTachado'> 230€</a> 100€</th>
              <th>  <a className='TablasPrecioTachado'> 80€</a> 60€</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='TablasCondicionesContainer'>
        <a className="TablasCondiciones">*con un máximo de una visita </a>
        <a className="TablasCondiciones"> ** respuestas en un maximo de 48h hábiles </a>
      </div>
      <div className='TablasBotonContainer'>
        <PopupButton className="TablasBotonReservar" url="https://calendly.com/annavehi/" rootElement={document.getElementById("root")} text="RESERVA CITA" />
      </div>
    </div>
  )
}
export default Tablas;