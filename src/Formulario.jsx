import { useForm } from 'react-hook-form';
const Formulario = () => {
    const { register, handleSubmit } = useForm();
    return <div className="HeaderClass3">
        <form>
            <div >
                <label> Nombre* </label>
                <input type="text" name="" />
            </div>
            <div >
                <label> Apellidos </label>
                <input type="text" name="" />
            </div>
            <div>
                <label> Email* </label>
                <input type="text" name="" />
            </div>
            <div>
                <label> Teléfono </label>
                <input type="text" name="" />
            </div>
            <div>
                <label> Cuentanos </label>
                <input type="text" name="" />
            </div>
        </form>
    </div>
}
export default Formulario;