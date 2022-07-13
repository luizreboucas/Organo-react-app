import './Formulario.css';
import CampoTexto from '../CampoTexto';
import DropDown from '../DropDown';


const Formulario = ()=>{
    const times = [
        "Back-end",
        "Front-end",
        "Mobile"
    ]

    return(
        <section className="formulario">
            
            <form>
                <h2>Preencha os Dados para criar o Card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <DropDown label="Times" itens={times}/>
            </form>
        </section>
        )
}

export default Formulario;