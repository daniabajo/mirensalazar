import Consulta from './../images/Consulta.png';
import LeadMagnet from './../images/LeadMagnet.png';
import './Sobremi.css'

export default function Sobremi() {
    return (
        <div className="Sobremi">
            <img src={Consulta} className="ImageTransversal" alt="Consulta" />
            <div className='SobremiBase'>
            <div className='SobremiFilofia'>
                <h className="TituloDorado">  <a> Filosofía</a> </h>
                <div className='SobremiFilofiaFila'>
                    <div className='SobremiFilofiaTexto'> 
                        <a>En nuestro centro de nutrición, abrazamos una filosofía centrada en el bienestar integral, reconociendo que la alimentación no solo es un acto físico, sino también un componente esencial para la salud mental y emocional. Creemos en la individualidad de cada persona y en la importancia de diseñar programas nutricionales personalizados, adaptados a sus necesidades y metas específicas. Nuestra filosofía se fundamenta en el poder transformador de una alimentación equilibrada y sostenible, promoviendo hábitos saludables que perduren a lo largo del tiempo. </a>
                        <p>Valoramos la educación nutricional como una herramienta fundamental para capacitar a nuestros clientes, permitiéndoles tomar decisiones informadas sobre su salud. Fomentamos la conexión con los alimentos, inspirando el disfrute consciente de cada comida. En nuestro centro, abogamos por la prevención de enfermedades a través de la nutrición y trabajamos en colaboración con nuestros clientes para superar desafíos, establecer objetivos realistas y lograr un cambio positivo y duradero en sus vidas. Nuestra filosofía se basa en el respeto por la diversidad alimentaria, la inclusión y el apoyo continuo, creando un ambiente que nutre no solo el cuerpo, sino también el espíritu de quienes confían en nosotros para guiarlos hacia una salud óptima.</p>
                    </div>
                    <img className='SobremiFilosfiaFoto' src={LeadMagnet} alt="LeadMagnet" />
                </div>
            </div>
            <div className='SobremiHistoria'>
                <h className="TituloDorado">  <a> Mi historia</a> </h>
                <p>Anna, una joven apasionada por la salud y el bienestar, decidió seguir su sueño de convertirse en nutricionista desde una edad temprana. Después de completar su licenciatura en Nutrición y Dietética, Anna se sumergió en un programa de internado dietético, donde adquirió experiencia práctica en entornos clínicos y comunitarios. Durante este período, se especializó en nutrición deportiva, fascinada por la conexión entre la alimentación y el rendimiento físico.</p>
                <p>Después de obtener su certificación como Nutricionista Registrada, Anna comenzó a trabajar en un hospital, brindando asesoramiento nutricional a pacientes con diversas condiciones de salud. Su enfoque compasivo y su habilidad para comunicar conceptos nutricionales complejos la destacaron entre sus colegas. A medida que su carrera progresaba, Anna decidió abrir su propia consulta privada, donde combina su experiencia clínica con un enfoque personalizado, ayudando a sus clientes a alcanzar sus metas de salud y bienestar a través de una alimentación equilibrada. La historia de Anna refleja su dedicación a la profesión y su deseo continuo de impactar positivamente en la vida de los demás a través de la nutrición. </p>
            </div>
            <div className='SobremiTrayectoria'>
                <h className="TituloDorado">  <a> Trayectoria profesional</a> </h>
                <ul>
                    <li>Obtener un título universitario en nutrición, dietética, ciencias de los alimentos o un campo relacionado. Muchos nutricionistas tienen al menos una licenciatura en nutrición.</li>
                    <li>Realizar pasantías o prácticas clínicas supervisadas para obtener experiencia práctica en entornos de atención médica.</li>
                    <li>En algunos lugares, obtener una licencia o certificación es necesario para ejercer como nutricionista. Asegúrate de cumplir con los requisitos locales y obtener las licencias necesarias.</li>
                    <li>Algunos nutricionistas eligen especializarse en áreas específicas como nutrición deportiva, nutrición clínica, nutrición pediátrica o nutrición comunitaria. Obtener certificaciones adicionales puede ser beneficioso.</li>
                    <li>Algunos nutricionistas optan por obtener una maestría para avanzar en sus conocimientos y habilidades. La educación continua a través de conferencias, seminarios y cursos también es fundamental para mantenerse actualizado en el campo.</li>
                    <li>Desarrollar habilidades de comunicación efectiva y empatía para trabajar de manera efectiva con los clientes y colegas de la industria de la salud.</li>
                    <li>Obtener la certificación como Nutricionista Registrado (Registered Dietitian, RD) en algunos países, como en los Estados Unidos. Esto a menudo implica completar un programa de internado dietético y aprobar un examen.</li>
                    <li>Ganar experiencia práctica trabajando en entornos de atención médica, hospitales, clínicas, consultorios privados o instituciones de investigación.</li>
                    <li>Construir una red profesional participando en conferencias, eventos de la industria y conectándose con otros profesionales de la salud.</li>
                    <li>Unirse a asociaciones profesionales, como la Academia de Nutrición y Dietética, para mantenerse conectado con la comunidad de nutricionistas y acceder a recursos actualizados.</li>
                    <li>Participar en programas de educación continua para estar al tanto de las últimas investigaciones y avances en nutrición y dietética.</li>
                    <li>Algunos nutricionistas optan por establecer sus propias prácticas privadas, ofreciendo servicios de asesoramiento nutricional a clientes individuales o grupos.</li>


                </ul>
            </div>
        </div>
        </div>
    )
}