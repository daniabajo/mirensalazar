
import SuscripcionReservaCalendly from '../components/SuscripcionReservaCalendly';
import SuscripcionTablas from '../components/SuscripcionTablas';
import SuscripcionPreguntas1 from '../components/SuscripcionPreguntas1';
import SuscripcionExplicacion from '../components/SuscripcionExplicacion';
import SuscripcionPreguntas2 from '../components/SuscripcionPreguntas2';

export default function Reserva() {
    return (
        <div>
            <SuscripcionReservaCalendly/>
            <SuscripcionPreguntas1/>
            <SuscripcionTablas/>
            <SuscripcionExplicacion/>
            <SuscripcionPreguntas1/>
        </div>
    )
}