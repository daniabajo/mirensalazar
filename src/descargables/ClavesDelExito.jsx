import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { Link } from 'react-router-dom';
import ClavesDelExitoFoto from './../images/LeadMagnetSinFondo.png';
import "./ClavesDelExito.css"
/*Anna */
const url = "https://annavehi.us11.list-manage.com/subscribe/post?u=f9df3ef7bce01603e71b5e28e&amp;id=763ad69f56&amp;f_id=0060b3e0f0"; 
/*Dani */
/*const url = "https://annavehi.us21.list-manage.com/subscribe/post?u=2330425f14048447c80289c70&amp;id=6374ceb387&amp;f_id=0006f7e6f0"; */


const ClavesDelExito = () => {
    const form = useRef();
    const { register, handleSubmit2, formState: { errors } } = useForm();
    const sendEmail = (Event) => {
        Event.preventDefault();
        emailjs.sendForm('service_ukvacln', 'template_wzrelji', form.current, 'QmE0uEOoCqxBr68I4') (
            (result) => { console.log(result.text); console.log("message sent") }, (error) => { console.log(error.text); });
        Event.target.reset();
    }
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);
    const { fields, handleFieldChange } = useFormFields({ EMAIL: "", MERGE1:"",MERGE7:"LeadMagnet"});
    const onSubmit = (data) => { console.log(data); sendEmail(); }
    return (
        <div className="DescargableBase">
            <div className="DescargableImagen"><img className="DescargableImagenImg" src={ClavesDelExitoFoto} alt="ClavesDelExitoFoto" /></div>
            <div className="DescargableTexto">
                <a className="DescargableTextoTitulo"> ¿Quieres saber las claves para tener una vida más saludable? </a>
                <a className="DescargableTextoTexto"> ¡Descarga nuestra guía y descubre los consejos que te llevarán a obtener resultados permanentes de una vez por todas! </a>
                <a className="DescargableTextoTextoMobile"> ¡Descarga nuestra guía! </a>
                <form className="DescargableForm" ref={form} onSubmit={event => { event.preventDefault(); handleSubmit(fields); }}>
                    <input className="DescargableInputs" type="text" id="MERGE1" value={fields.MERGE1} onChange={handleFieldChange}  name="nombre" required placeholder='Nombre*' />
                    <input className="DescargableInputs" id="EMAIL" name='email' type="email" value={fields.EMAIL} onChange={handleFieldChange} placeholder='Email*' required />
                    <div className='DescargablePolitica'>
                        <input className="DescargableCheckPolitica" type="checkbox" {...register('acepto', { required: true })} required name="acepto" />
                        <a className="DescargableTextoPolitica" to="/politicaprivacidad"> Acepto la  <Link to="/politicaprivacidad">  politica de privacidad </Link>y la suscripción a la newsletter.</a>
                    </div>
                    <div className='DescargableBotonContainer'>
                        <input className="DescargableBoton" type="submit" value="¡LA QUIERO!" />
                        <a className="DescargableTextoTexto">
                        {loading && "Enviando..."}
                        {error && "Error"}
                        {success && "Te acabamos de enviar un regalo a tu correo!"}
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ClavesDelExito;