import './SuscripcionPreguntas2.css';

const SuscripcionPreguntas2 = () => {
    return (
        <div>
            <div className="PreguntasContainer">
                <a className='PreguntasTitulo'> Preguntas frecuentes </a>
                
                <a className="PreguntasPregunta" >¿Por qué debo suscribirme?</a>
                <a className="PreguntasRespuesta">En nuestro centro hemos abandonado el sistema tradicional de pago por visita para ofrecer un servicio más completo y un seguimiento más cercano al paciente. 
                La suscripción no solamente incluye las visitas (una mensual o ilimitadas, según la que se elija), sino que también incorpora un servicio de seguimiento por WhatsApp que el paciente puede utilizar a diario si lo desea,
                diferentes métodos de análisis de composición corporal tales como bioimpedancia y antropometría, estudio del somatipo, y un conjunto de módulos formativos totalmente personalizados y adaptados a las necesidades
                de cada paciente para guiarle en la consecución de sus objetivos con materiales que le sean prácticos y útiles.</a>
                
                <a className="PreguntasPregunta" >¿Cuándo debo realizar el pago de mi suscripción?</a>
                <a className="PreguntasRespuesta" >El pago se debe realizar previamente a la primera visita.</a>

                <a className="PreguntasPregunta" >¿Tienen algún tipo de permanencia las diferentes suscripciones?</a>
                <a className="PreguntasRespuesta" >¡En absoluto! En cualquier momento es posible tanto cambiar de un tipo a otro de suscripción como cancelarlas permamentemente.</a>

                <a className="PreguntasPregunta" >Quiero cancelar mi suscripción, ¿cuándo debo hacerlo?</a>
                <a className="PreguntasRespuesta" >Si quieres cancelar tu suscripción, recuerda hacerlo antes de que se realice el cargo en tu tarjeta, ya que nuestro sistema no permite devoluciones de las mensualidades cobradas.</a>

                <a className="PreguntasPregunta" >¿Si tengo la suscripción GOLD con una visita mensual pero quiero hacer más visitas durante ese mes, cómo puedo hacerlo?</a>
                <a className="PreguntasRespuestaUltima" >La suscripción GOLD permite concertar visitas adicionales, las cuales tienen un coste de 50€ por visita. Te recomendamos que si anticipas
                que necesitarás más de una visita mensual, cambies tu suscripción previamente a PLATINUM, la cual te saldrá mucho más rentable.</a>

            </div>
        </div>
    )
}
export default SuscripcionPreguntas2;