import './Time.css'
import Colaborador from '../Colaborador'


const Time = (props)=>{
    const primaria = {borderColor: props.corPrimaria}
    const secundaria = {backgroundColor: props.corSecundaria};
    
    return(
        <section className='time' style={secundaria}>
            <h3 style={primaria}>{props.nome}</h3>
            <Colaborador/>
        </section>
    )
}

export default Time;