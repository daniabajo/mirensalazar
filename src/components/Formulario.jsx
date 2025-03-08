import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import "./Formulario.css"
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
/* Miren */
const url = "https://mirensalazar.us11.list-manage.com/subscribe/post?u=f9df3ef7bce01603e71b5e28e&amp;id=763ad69f56&amp;f_id=0060b3e0f0";
/*Dani */
/*const url = "https://mirensalazar.us21.list-manage.com/subscribe/post?u=2330425f14048447c80289c70&amp;id=6374ceb387&amp;f_id=0006f7e6f0";*/

const Formulario = () => {
    const form = useRef();
    const { register, formState: { errors } } = useForm();
    const sendEmail = (Event) => {
        Event.preventDefault();
        emailjs.sendForm('service_ukvacln', 'template_wzrelji', form.current, 'QmE0uEOoCqxBr68I4')  .then(
            (result) => { console.log(result.text); console.log("message sent") },
            (error) => { console.log(error.text); });
            fields.EMAIL=""; fields.MERGE1=""; fields.MERGE2=""; fields.MERGE6="";
        Event.target.reset();
    }
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);
    const { fields, handleFieldChange } = useFormFields({ EMAIL: "", MERGE1: "" ,MERGE2:"",MERGE6:"",MERGE7:"Formulario"});
    const onSubmit = (data) => { console.log(data); sendEmail(data); }
    return (
        <div className="FormularioBase">
            <h className="FormularioTitulo"> <a> ¿Hablamos?</a> </h>
            <h className="FormularioTexto"> <p> Cuéntanos cómo podemos ayudarte y nos pondremos en contacto lo antes posible.</p> </h>
            <form className="FormularioInputs" ref={form} onSubmit={event => { event.preventDefault(); handleSubmit(fields); sendEmail(event) }}>
                {/*Name and surname*/}
                <div className="InputsDivision" >
                    <div className='FormularioBloque'>
                        <label> Nombre* </label>
                        <input className="InputsTexto" type="text" name="nombre" id="MERGE1" value={fields.MERGE1} onChange={handleFieldChange} required placeholder='' />
                    </div>
                    <div className='FormularioBloque'>
                        <label> Apellidos </label>
                        <input className="InputsTexto" type="text" name="apellidos" id="MERGE2" value={fields.MERGE2} onChange={handleFieldChange} placeholder='' />
                    </div>
                </div>
                {/*Email and mvl*/}
                <div className="InputsDivision">
                    <div className='FormularioBloque'>
                        <label> Email* </label>
                        <input className="InputsTexto" type="email" name="email" id="EMAIL" value={fields.EMAIL} onChange={handleFieldChange} required placeholder='' />
                    </div>
                    <div className='FormularioBloque'>
                        <label> Teléfono </label>
                        <input className="InputsTexto" type="text" name="telefono" id="MERGE6" value={fields.MERGE6} onChange={handleFieldChange} placeholder='' />
                    </div>
                </div>
                {/*Explicacion*/}
                <div className="InputsDivision">
                    <div className='FormularioBloque'>
                        <div className="InputsEtiquetas"><label> ¿Cómo podemos ayudarte? Cuéntanos un poco más. </label></div>
                        <div className="ExplicacionDivision">
                            <textarea className="ExplicacionTexto" type="text" {...register('mensaje')} aria-multiline name='mensaje'/>
                        </div >
                    </div>
                </div>
                {/*Send*/}
                <div className="EnvioDivision">
                    <div className="PoliticaDivision" >
                        <input className="EnvioCheckPolitica" type="checkbox" {...register('acepto', { required: true })} name="acepto" required />
                        <a className="EnvioTextoPolitica" to="/politicaprivacidad"  >
                            Marcando esta casilla manifiestas que has leído y aceptas el
                            <Link to="/avisolegal"> Aviso Legal </Link>, la
                            <Link to="/politicaprivacidad"> Política de privacidad </Link> y la
                            suscripción a la newsletter. </a>
                    </div>
                    <div className='EnvioBotonContainer'>
                        <input className="EnvioBoton" type="submit" value="ENVIAR" />
                    </div>
                    {loading && "Enviando..."}
                    {error && "Error"}
                    {success && "¡Hemos recibido correctamente tu mensaje!"}
                    {errors.nombre?.type === 'required' && <span className="FormularioValidacion">*Nombre Requerido</span>}
                </div>
            </form>
        </div>
    )
}
export default Formulario;