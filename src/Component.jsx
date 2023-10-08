import React, {useState} from 'react'

export default function Component() {
  const [Text,SetText]=useState();
  const [Update,SetUpdate]=useState();

  const TextOnChange = (event) => {SetText(event.target.value)}
  const ButtonOnClick = () => {SetUpdate(Text)}

  return (
    <div>
      <input type="text" value={Text} onChange={TextOnChange}/>
      <button onClick={ButtonOnClick}> Actualizar </button>
      <p>Input {Text}</p>
      <p>Actualizadosss {Update}</p>
    </div>
  )
}
