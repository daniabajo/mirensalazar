
import SuscripcionesStripe from '../components/SuscripcionesStripe';
import SuscripcionTablas from '../components/SuscripcionTablas';
import SuscripcionExplicacion from '../components/SuscripcionExplicacion';

export default function Suscripciones() {
    return (
        <div >
            <SuscripcionesStripe />
            <SuscripcionTablas Type="Suscripciones" />
            <SuscripcionExplicacion Type="Suscripciones"/>
        </div>
    )
}