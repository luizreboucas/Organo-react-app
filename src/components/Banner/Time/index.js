import './Time.css'
import Colaborador from '../Colaborador'


const Time = (props)=>{
    const primaria = {borderColor: props.corPrimaria}
    const secundaria = {backgroundColor: props.corSecundaria};
    
    return(
        props.colaboradores.length > 0? <section className='time' style={secundaria}>
            <h3 style={primaria}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                nome={colaborador.nome} 
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}/>)}
            </div>
        </section>: ''
    )
}

export default Time;