import { useForm } from 'react-hook-form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Formulario = () => {
    const form = useRef();
    const { register, formState: { errors }, handleSubmit,watch } = useForm();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n364x7p', 'template_t8qrrpl', form.current, 'rnnXAMH44fAkT7iCB')  .then(
            (result) => { console.log(result.text);console.log("message sent") }, 
            (error) => {console.log(error.text);});
            e.target.reset();
    }
    const onSubmit = (data) => { 
        console.log(data);
        sendEmail(data);
    }
    return <div className="FormularioEntero">
        <form ref={form} onSubmit={sendEmail}>
            <div className="FormularioEtiquetas">
                <label> Nombre* </label>
                <label> Apellidos </label>
            </div>
            <div className="FormularioInputs" >
                <input style={{ width: "370px", fontSize: "20px", fontFamily:"Josefin Sans" }} type="text" {...register('nombre',{ required: true })} name="nombre" required placeholder='Nombre*'/>
                <input style={{ width: "370px", fontSize: "20px", fontFamily:"Josefin Sans" }} type="text" {...register('apellidos')} name="apellidos" placeholder='Apellidos' />
            </div>
            <div className="FormularioEtiquetas">
                <label> Email* </label>
                <label> Teléfono </label>
            </div>
            <div className="FormularioInputs">
                <input style={{ width: "370px", fontSize: "20px", fontFamily:"Josefin Sans" }} type="text" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} name="email" required placeholder='Email*'/>
                <input style={{ width: "370px", fontSize: "20px", fontFamily:"Josefin Sans"}} type="text" {...register('telefono')} name="telefono" placeholder='Teléfono'/>

            </div>
            <div className="FormularioEtiquetaCuentanos">
                <label> ¿Cómo podemos ayudarte? Cuéntanos un poco más. </label>
            </div>
            <div className="FormularioCuentanosInput">
                <textarea style={{ width: "940px", height: "310px", fontSize: "25px", fontFamily:"Josefin Sans" }} type="text" {...register('mensaje')} aria-multiline name='mensaje' 
                placeholder='¿Cómo podemos ayudarte? Cuéntanos un poco más.'/>

            </div >
            <div className="FormularioEnviar">
                <input style={{ width: "140px", height: "25px", justifyContent: "end" }} type="submit" value="ENVIAR" />
                {errors.nombre?.type === 'required' && <span className="FormularioValidacion">*Nombre Requerido</span>}
                {errors.email?.type === 'required' && <span className="FormularioValidacion">*Email Requerido</span>}
                {errors.email?.type === 'pattern' && <span className="FormularioValidacion">*Email incorrecto</span>}
            </div>
        </form>
    </div>
}
export default Formulario;