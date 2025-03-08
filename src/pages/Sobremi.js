import FotoSobreMi1 from './../images/FotoSobreMi1.png';
import FotoSobreMi2 from './../images/FotoSobreMi2.png';
import FotoSobreMi3 from './../images/FotoSobreMi3.png';

import './Sobremi.css'

export default function Sobremi() {
    return (
        <div className="Sobremi">
            <img src={FotoSobreMi1} className="ImageTransversal" alt="FotoSobreMi1" />
            {/* Sobre mi entero */}
            <div className='SobremiBase'>
                {/* Bienvenidos */}
                <h className="TituloDoradoBienvenidos">  <a>¡Bienvenidos! </a> </h>
                <div className='SobremiFilosofia'>
                    <div className='SobremiFilosofiaFila'>
                        <div className='SobremiBienvenidosTexto'>
                            <a className='TextoJustificado'>Soy Miren Salazar y me apasiona ayudar a las personas a mejorar su salud y calidad de vida, guiándoles y acompañándoles en la consecución de sus distintos objetivos nutricionales y de hábitos saludables. </a>
                        </div>
                        <div className='SobremiFilosfiaFotoContainer'>
                            <img className='SobremiFilosfiaFoto' src={FotoSobreMi2} alt="FotoSobreMi2" />
                        </div>
                    </div>
                </div>
                {/* Historia */}
                <div className='SobremiHistoria'>
                    <div className='SobremiCentrado'>
                        <h className="TituloDorado">  <a> Mi historia</a> </h>
                    </div>
                    <p className='TextoJustificado'>Hija de médico y nieta y sobrina de farmacéuticos, casi se podría decir que las ciencias de la salud forman parte de mi ADN. Trabajando como farmacéutica en Barcelona y en el Reino Unido, me di cuenta de que mi respuesta natural ante el paciente consistía en indagar acerca de sus hábitos de vida para descubrir si alguna modificación de éstos pudiera mejorar sus dolencias de forma más permanente. La voluntad de querer proporcionar una educación nutricional más extensa y detallada a los pacientes me llevó a estudiar el Grado en Nutrición Humana y Dietética, aunque el cometido de transmitir mis conocimientos a la población era difícil de alcanzar en un contexto de farmacia comunitaria, dado que desafortunadamente no se suele gozar de un tiempo de calidad con los pacientes. Es por este motivo que finalmente decidí emprender mi propio proyecto, y a día de hoy me emociona enormemente poder realizar mi propósito en mi centro de nutriciónn.</p>
                </div>
                {/* Mi metodo */}
                <div className='SobremiMetodo'>
                    <div className='SobremiCentrado'>
                        <h className="TituloDorado">  <a> Mi método</a> </h>
                    </div>
                    <p className='TextoJustificado'>Como farmacéutica y dietista-nutricionista, ambas siendo profesiones sanitarias, entiendo que el pilar más importante alrededor del cual toda intervención nutricional debe gravitar es la promoción de la <strong>salud</strong>. Por este motivo, mi método de trabajo se basa en:</p>
                    <div className='SobremiMetodoFotoListaFila'>
                        <div className='SobremiMetodoFotoContainer'>
                            <img className='SobremiMetodoFoto' src={FotoSobreMi3} alt="FotoSobreMi3" />
                        </div>
                        <div className='TextoJustificadoGap'>
                            <ul className='TextoJustificadoGap'>
                                <li>  el consumo de <strong>alimentos</strong>, sin hacer uso de productos artificiales</li>
                                <li>una <strong>educación alimentaria</strong> que capacite al paciente para poder entender sus necesidades y llegar a ser autónomo</li>
                                <li>un <strong>cambio de hábitos</strong> progresivo y permanente, evitando así el efecto rebote y garantizando unos resultados que se mantienen a largo plazo</li>
                                <li><strong>evitar sensaciones nocivas</strong> que suelen ser contraproducentes, tales como la restricción, el esfuerzo, el sufrimiento o pasar hambre</li>
                                <li>un alto grado de <strong>individualización</strong>, dado que todos somos diferentes y cada individuo se beneficiará de unas herramientas o estrategias distintas</li>
                                <li>un <strong>ambiente agradable</strong>, distendido, empático y de confianza donde trabajamos conjuntamente con el paciente para ayudarle en la consecución de todos sus objetivos</li>
                                <li>el compromiso de mi <strong>formación continua</strong> para poder proporcionar una atención nutricional cada vez mejor</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Formacion */}
                <div className='SobremiTrayectoria'>
                    <div className='SobremiCentrado'>
                        <h className="TituloDorado">  <a> Formación</a> </h>
                    </div>
                    <div className="SobremiDivisionTexto"> <a className="SobremiTextoMayus"> GRADOS UNIVERSITARIOS </a> </div>
                    <ul className='TextoJustificado'>
                        <li>Grado en Farmacia (Universidad de Barcelona)</li>
                        <ul>
                            <li>Premio extraordinario de grado - mejor expediente académico de la Facultad de Farmacia</li>
                            <li>Erasmus: University College London (Reino Unido) adherida al grupo de investigación Drug Discovery and Therapeutic Target Identification Research Cluster</li>
                            <li>Erasmus: Royal National Orthopaedic Hospital (Reino Unido) adherida al Departamento de Farmacia</li>
                        </ul>
                        <li>Grado en Nutrición Humana y Dietética (Universidad Europea de Madrid)</li>
                        <ul>
                            <li>Prácticas curriculares: consulta de nutriciónn de la Farmacia Les Arenes</li>
                            <li>Prácticas curriculares: nutriciónn deportiva en Club de Tennis Sant Gervasi</li>
                            <li>Prácticas curriculares: nutriciónn deportiva en CAR Sant Cugat</li>
                            <li>Prácticas curriculares: consulta de nutriciónn de Neus Elcacho</li>
                        </ul>
                    </ul>
                    <div className="SobremiDivisionTexto"> <a className="SobremiTextoMayus"> ACREDITACIONES </a> </div>
                    <ul className='TextoJustificado'>
                        <li>Antropometrista ISAK nivel 1</li>
                    </ul>
                    <div className="SobremiDivisionTexto"> <a className="SobremiTextoMayus"> POSTGRADOS </a> </div>
                    <ul className='TextoJustificado'>
                        <li>Entrevista motivacional en la práctica clínico-nutricional (Academia Española de Nutrición y Dietética)</li>
                        <li>Curso avanzado en nutriciónn para la optimización de la composición corporal en deportistas y población general (Academia Española de Nutrición y Dietética)</li>
                        <li>Ayudas ergogénicas en el ámbito deportivo y de salud (Academia Española de Nutrición y Dietética)</li>
                        <li>Vegetarianismo y planificación dietética en alimentación vegetariana (Universitat de les Illes Balears)</li>
                    </ul>
                    <div className="SobremiDivisionTexto"> <a className="SobremiTextoMayus"> CURSOS </a> </div>
                    <ul className='TextoJustificado'>
                        <li>Binomio sueño y alimentación: una nueva herramienta en la práctica profesional del dietista-nutricionista (Academia Española de Nutrición y Dietética)</li>
                        <li>I Workshop sobre obesidad y nutriciónn: una visión integral de la obesidad más allá de la báscula (Academia Española de Nutrición y Dietética)</li>
                        <li>I Workshop sobre microbiota, probióticos y prebióticos (Academia Española de Nutrición y Dietética)</li>
                        <li>Toma ConCiencia (Academia Española de Nutrición y Dietética)</li>
                        <li>Abordaje dietético en la enfermedad cardiovascular: nuevas evidencias (Academia Española de Nutrición y Dietética)</li>
                        <li>Abordaje de la hipertensión arterial en la farmacia comunitaria (Consell de Col·legis Farmacèutics de Catalunya)</li>
                        <li>Actividad física y salud - intervención en la atención primaria (Societat Catalana de Medicina Familiar i Comunitària) </li>
                        <li>Intervención en tabaquismo (Societat Catalana de Medicina Familiar i Comunitària) </li>
                        <li>Soporte nutricional al paciente oncológico (Associació Contra el Càncer & Codinucat)</li>
                        <li>Bioimpedancia: una tecnología clave para valorar la salud y el rendimiento deportivo (INEFC)</li>
                    </ul>
                    <div className="SobremiDivisionTexto"> <a className="SobremiTextoMayus"> CONGRESOS </a> </div>
                    <ul className='TextoJustificado'>
                        <li>XXVI Jornadas Internacionales de Nutrición Práctica</li>
                        <li>XV Congreso Internacional de SEDCA</li>
                        <li>I Nutrition Week (Universitat de les Illes Balears)</li>
                        <li>I Congreso de personas que viven con obesidad (Asociación Bariátrica Híspalis)</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}