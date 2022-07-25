import "./CampoTexto.css"
import { useState } from "react";
const CampoTexto = (props) =>{

    const [valor, setValor] = useState();

    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
            value ={props.valor} 
            onChange={evento=>props.aoAlterado(evento.target.value)} 
            required={props.obrigatorio} 
            placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;