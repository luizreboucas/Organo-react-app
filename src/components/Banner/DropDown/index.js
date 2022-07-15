import './DropDown.css'

const DropDown = (props)=>{
    return(
        <div className="dropdown">
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}required={props.obrigatorio}>
                {props.itens.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}


export default DropDown;