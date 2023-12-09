import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import "./Formulario.css"

const Formulario = () => {
    const form = useRef();
    const { register, formState: { errors }} = useForm();
    const sendEmail = (Event) => {
        Event.preventDefault();
        /*emailjs.sendForm('service_ukvacln', 'template_wzrelji', form.current, 'QmE0uEOoCqxBr68I4')  .then(*/
        emailjs.sendForm('service_n364x7p', 'template_t8qrrpl', form.current, 'rnnXAMH44fAkT7iCB').then(
            (result) => { console.log(result.text); console.log("message sent") },
            (error) => { console.log(error.text); });
        Event.target.reset();
    }
    const onSubmit = (data) => { console.log(data); sendEmail(data);}
    return <div className="FormularioBase">
        <h className="FormularioTitulo"> <a> ¿Hablamos?</a> </h>
        <h className="FormularioTexto"> <p> Cuéntanos cómo podemos ayudarte y nos pondremos en contacto lo antes posible.</p> </h>
        <form className="FormularioInputs" ref={form} onSubmit={sendEmail}>
            <div className="InputsEtiquetas"> <label> Nombre* </label> <label> Apellidos </label> </div>
            <div className="InputsDivision" >
                <input className="InputsTexto"  type="text" {...register('nombre', { required: true })} name="nombre" required placeholder='Nombre*' />
                <input  className="InputsTexto" type="text" {...register('apellidos', { required: true })} name="apellidos" required placeholder='Apellidos' />
            </div>
            <div className="InputsEtiquetas"> <label> Email* </label> <label> Teléfono </label> </div>
            <div className="InputsDivision">
                <input  className="InputsTexto"type="text" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} name="email" required placeholder='Email*' />
                <input  className="InputsTexto" type="text" {...register('telefono')} name="telefono" placeholder='Teléfono' />
            </div>
            <div className="InputsEtiquetas"><label> ¿Cómo podemos ayudarte? Cuéntanos un poco más. </label></div>
            <div className="ExplicacionDivision">
                <textarea className="ExplicacionTexto" type="text" {...register('mensaje')} aria-multiline name='mensaje'
                    placeholder='¿Cómo podemos ayudarte? Cuéntanos un poco más.' />
            </div >
            <div className="EnvioDivision">
                <div>
                    <input className="EnvioCheckPolitica" type="checkbox" {...register('acepto', { required: true })} name="acepto" required />
                    <a className="EnvioTextoPolitica" to="/politicaprivacidad"  > 
                    Marcando esta casilla manifiestas que has leído y aceptas el
                    <Link to="/avisolegal"> Aviso Legal </Link>, la
                    <Link to="/politicaprivacidad"> Política de privacidad </Link> y la
                    <Link to="/politicacookies"> Política de cookies</Link>. </a>
                </div>
                <input className="EnvioBoton" type="submit" value="ENVIAR" />
                {errors.nombre?.type === 'required' && <span className="FormularioValidacion">*Nombre Requerido</span>}
            </div>
            {/*<pre> {{JSON.stringify(watch(),null,2)} </pre>*/}
        </form>
    </div>
}
export default Formulario;