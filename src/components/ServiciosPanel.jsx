import Icono1 from './../images/iconoservicios1.png';
import Icono2 from './../images/iconoservicios2.png';
import Icono3 from './../images/iconoservicios3.png';
import Icono4 from './../images/iconoservicios4.png';
import Icono5 from './../images/iconoservicios5.png';
import Icono6 from './../images/iconoservicios6.png';
import Icono7 from './../images/iconoservicios7.png';
import Icono8 from './../images/iconoservicios8.png';
import Icono9 from './../images/iconoservicios9.png';
import Icono10 from './../images/iconoservicios10.png';
import Icono11 from './../images/iconoservicios11.png';
import Icono12 from './../images/iconoservicios12.png';
import Icono13 from './../images/iconoservicios13.png';
import Icono14 from './../images/iconoservicios14.png';


import './ServiciosPanel.css'

const ServiciosPanel = () => {
    return (
        <div className="ServiciosContainer">
            {/* Row 1 */}
            <div className="ServiciosFila">
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono1} alt="Icono" />
                    <strong className="ServiciosTitulo">NUTRICIÓN SALUDABLE</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Alimentación saludable</li>
                        <li className="ServiciosListaItem">Educación alimentaria</li>
                        <li className="ServiciosListaItem">Cambio de hábitos</li>
                        <li className="ServiciosListaItem">Adolescencia</li>
                        <li className="ServiciosListaItem">Menopausia</li>
                        <li className="ServiciosListaItem">Andropausia</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono2} alt="Icono" />
                    <strong className="ServiciosTitulo">CONTROL DEL PESO</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Sobrepeso y obesidad</li>
                        <li className="ServiciosListaItem">Bajo peso</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono3} alt="Icono" />
                    <strong className="ServiciosTitulo"> NUTRICIÓN DEPORTIVA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Optimización de la composición corporal</li>
                        <li className="ServiciosListaItem">Mejora del rendimiento y la recuperación</li>
                        <li className="ServiciosListaItem">Estudios antropométricos y somatocarta</li>
                    </ul>
                </div>
            </div>
            {/* Row 2 */}
            <div className="ServiciosFila">
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono4} alt="Icono" />
                    <strong className="ServiciosTitulo">PATOLOGÍA DIGESTIVA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Celiaquía</li>
                        <li className="ServiciosListaItem">Reflujo gastroesofágico</li>
                        <li className="ServiciosListaItem">Hernia de hiato</li>
                        <li className="ServiciosListaItem">Helicobacter pylori</li>
                        <li className="ServiciosListaItem">Gastritis</li>
                        <li className="ServiciosListaItem">Úlcera péptica</li>
                        <li className="ServiciosListaItem">Gases intestinales</li>
                        <li className="ServiciosListaItem">Hinchazón abdominal</li>
                        <li className="ServiciosListaItem">Estreñimiento</li>
                        <li className="ServiciosListaItem">Diarrea</li>
                        <li className="ServiciosListaItem">Diverticulosis</li>
                        <li className="ServiciosListaItem">Síndrome del intestino irritable (SII)</li>
                        <li className="ServiciosListaItem">Sobrecrecimiento bacteriano del intestino delgado (SIBO)</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono5} alt="Icono" />
                    <strong className="ServiciosTitulo">ALERGIAS E INTOLERANCIAS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Alergias a alimentos</li>
                        <li className="ServiciosListaItem">Intolerancia a la lactosa</li>
                        <li className="ServiciosListaItem">Intolerancia a la fructosa</li>
                        <li className="ServiciosListaItem">Intolerancia al sorbitol</li>
                        <li className="ServiciosListaItem">Sensibilidad al gluten</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono6} alt="Icono" />
                    <strong className="ServiciosTitulo">PATOLOGÍA CARDIOVASCULAR</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Hipertensión</li>
                        <li className="ServiciosListaItem">Hipercolesterolemia</li>
                        <li className="ServiciosListaItem">Hipertrigliceridemia</li>
                        <li className="ServiciosListaItem">Arteriosclerosis</li>
                        <li className="ServiciosListaItem">Infarto de miocardio</li>
                        <li className="ServiciosListaItem">Insuficiencia cardíaca</li>
                        <li className="ServiciosListaItem">Accidentes cerebrovasculares</li>
                        <li className="ServiciosListaItem">Enfermedad arterial periférica</li>
                    </ul>
                </div>
            </div>
            {/* Row 3 */}
            <div className="ServiciosFila">
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono7} alt="Icono" />
                    <strong className="ServiciosTitulo">PATOLOGÍA ENDOCRINA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Prediabetes</li>
                        <li className="ServiciosListaItem">Diabetes mellitus tipo II</li>
                        <li className="ServiciosListaItem">Hipotiroidismo</li>
                        <li className="ServiciosListaItem">Síndrome del ovario poliquístico (SOP) </li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono8} alt="Icono" />
                    <strong className="ServiciosTitulo">ANEMIAS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Anemia ferropénica</li>
                        <li className="ServiciosListaItem">Anemia megaloblástica</li>
                        <li className="ServiciosListaItem">Anemia perniciosa</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono9} alt="Icono" />
                    <strong className="ServiciosTitulo">PATOLOGÍA RENAL</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Cálculos renales</li>
                        <li className="ServiciosListaItem">Insuficiencia renal</li>
                    </ul>
                </div>
            </div>

            {/* Row 4 */}
            <div className='ServiciosFila'>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono10} alt="Icono" />
                    <strong className="ServiciosTitulo">PATOLOGÍA ÓSEA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Osteoporosis</li>
                        <li className="ServiciosListaItem">Osteopenia</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono11} alt="Icono" />
                    <strong className="ServiciosTitulo">PATOLOGÍA ONCOLÓGICA</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Cáncer</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono12} alt="Icono" />
                    <strong className="ServiciosTitulo"> DIETAS ESPECIALES</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Alimentación vegetariana y vegana</li>
                        <li className="ServiciosListaItem">Ayuno intermitente</li>
                        <li className="ServiciosListaItem">Dieta antiinflamatoria</li>
                        <li className="ServiciosListaItem">Dieta baja en FODMAP</li>
                    </ul>
                </div>
            </div>
            {/* Row 5 */}
            <div className='ServiciosFila'>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono13} alt="Icono" />
                    <strong className="ServiciosTitulo"> HÁBITO TABÁQUICO</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Cesación tabáquica</li>
                    </ul>
                </div>
                <div className="ServiciosItem">
                    <img className='ServiciosIcono' src={Icono14} alt="Icono" />
                    <strong className="ServiciosTitulo"> NUTRICIÓN Y FÁRMACOS</strong>
                    <ul className="ServiciosLista">
                        <li className="ServiciosListaItem">Interacción fármaco-nutriente</li>
                        <li className="ServiciosListaItem">Implicaciones nutricionales</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ServiciosPanel;