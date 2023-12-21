import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { Link } from 'react-router-dom';
import ClavesDelExitoFoto from './../images/ClavesDelExito.png';
import "./ClavesDelExito.css"
const url = "https://annavehi.us21.list-manage.com/subscribe/post?u=2330425f14048447c80289c70&amp;id=6374ceb387&amp;f_id=0006f7e6f0";

const ClavesDelExito = () => {
    const form = useRef();
    const { register, handleSubmit2, formState: { errors } } = useForm();
    const sendEmail = (Event) => {
        Event.preventDefault();
        emailjs.sendForm('service_n364x7p', 'template_t8qrrpl', form.current, 'rnnXAMH44fAkT7iCB').then((result) => { console.log(result.text); console.log("message sent") }, (error) => { console.log(error.text); });
        Event.target.reset();
    }
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);
    const { fields, handleFieldChange } = useFormFields({ EMAIL: "", });
    const onSubmit = (data) => { console.log(data); sendEmail(); }
    return (
        <div className="DescargableBase">
            <div className="DescargableImagen"><img src={ClavesDelExitoFoto} alt="ClavesDelExitoFoto" /></div>
            <div className="DescargableTexto">
                <a className="DescargableTextoTitulo"> ¿Quieres saber las 10 claves del éxito a largo plazo? </a>
                <a className="DescargableTextoTexto"> ¡Descubre los consejos que te llevarán a obtener resultados permanentes de una vez por todas! </a>
                <form className="DescargableForm" ref={form} onSubmit={event => { event.preventDefault(); handleSubmit(fields); }}>
                    <input className="DescargableInputs" type="text" {...register('nombre', { required: true })} name="nombre" required placeholder='Nombre*' />
                    {errors.nombre?.type === 'required' && <p>Nombre requerido</p>}
                    <input className="DescargableInputs" id="EMAIL" name='email' autoFocus type="email" value={fields.EMAIL} onChange={handleFieldChange} placeholder='Email*' required />
                    <div className='DescargablePolitica'>
                        <input className="DescargableCheckPolitica" type="checkbox" {...register('acepto', { required: true })} required name="acepto" />
                        <a className="DescargableTextoPolitica" to="/politicaprivacidad"> Acepto la  <Link to="/politicaprivacidad">  politica de privacidad </Link>y la subscripción a la newsletter.</a>
                    </div>
                    <div className='DescargableBotonContainer'>
                        <input className="DescargableBoton" type="submit" value="¡LO QUIERO!" />
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