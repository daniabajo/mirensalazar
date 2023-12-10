import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import ClavesDelExitoFoto from './../images/ClavesDelExito.png';
import "./ClavesDelExito.css"

const ClavesDelExito = () => {
    const form = useRef();
    const { register, formState: { errors } } = useForm();
    const sendEmail = (Event) => {
        Event.preventDefault();
        /*emailjs.sendForm('service_ukvacln', 'template_wzrelji', form.current, 'QmE0uEOoCqxBr68I4')  .then(*/
        emailjs.sendForm('service_n364x7p', 'template_t8qrrpl', form.current, 'rnnXAMH44fAkT7iCB').then(
            (result) => { console.log(result.text); console.log("message sent") },
            (error) => { console.log(error.text); });
        Event.target.reset();
    }
    const onSubmit = (data) => { console.log(data); sendEmail(data); }
    return (
        <div className="DescargableBase">
            <div className="DescargableImagen">
                <img src={ClavesDelExitoFoto} alt="ClavesDelExitoFoto" />
            </div>
            <div className="DescargableTexto">
                <a className="DescargableTextoTitulo"> ¿Quieres saber las 10 claves del éxito a largo plazo? </a>
                <a className="DescargableTextoTexto"> ¡Descubre los consejos que te llevarán a obtener resultados permanentes de una vez por todas! </a>
                <form className="DescargableForm" ref={form} onSubmit={sendEmail}>
                    <input className="DescargableInputs" type="text" {...register('nombre', { required: true })} name="nombre" required placeholder='Nombre*' />
                    <input className="DescargableInputs" type="text" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} name="email" required placeholder='Email*' />
                    <div className='DescargablePolitica'>
                        <input className="DescargableCheckPolitica" type="checkbox" {...register('acepto', { required: true })} name="acepto" required />
                        <a className="DescargableTextoPolitica" to="/politicaprivacidad"> Acepto la  <Link to="/politicaprivacidad">  politica de privacidad. </Link></a>
                    </div>
                    <input className="DescargableBoton" type="submit" value="¡LO QUIERO!" />
                </form>
            </div>
        </div>
    )
}
export default ClavesDelExito;