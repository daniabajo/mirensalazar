import React from 'react'
import ClavesDelExito from '../descargables/ClavesDelExito';
import './Popup.css'
function Popup(props) {
    return (props.Trigger) ? (
        <div className="Popup">
            <div className='PopupInner'>
            <button className='BotonPopup' onClick={()=> props.SetTrigger(false)}>X</button>
            <ClavesDelExito/>
            {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup;