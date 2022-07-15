import './Formulario.css';
import CampoTexto from '../CampoTexto';
import DropDown from '../DropDown';
import Botao from '../Botao';
import { useState } from 'react';
import App from '../../../App';


function Formulario(props) {
    const times = [
        "Back-end",
        "Front-end",
        "Mobile"
    ];

   
    const [nome,setNome] = useState();
    const [cargo,setCargo] = useState();
    const [imagem, setImagem] = useState();
    const [dropDown, setDropDown] = useState();

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            dropDown
        })
    };


    return (
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2>Preencha os Dados para criar o Card do Colaborador</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome" 
                    valor={nome}
                    aoAlterado = {valor=>setNome(valor)}
                 
                 />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo}
                    aoAlterado={valor=>setCargo(valor)}/>
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor=>setImagem(valor)}
                 />
                <DropDown
                    obrigatorio={true} 
                    label="Times" 
                    itens={times}
                    valor={dropDown}
                    aoAlterado={valor=>setDropDown(valor)} />
                <Botao>Criar Botão</Botao>
            </form>
        </section>
    );
}

export default Formulario;