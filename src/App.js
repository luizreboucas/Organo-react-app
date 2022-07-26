
import { useState } from 'react';
import Banner from './components/Banner/Banner'
import Formulario from './components/Banner/Formulario'
import Time from './components/Banner/Time';
import Footer from './components/Footer';


function App() {
  const [colaboradores,setColaboradores] = useState([]);

  const aoColaboradorAdicionado= (colaborador)=>{
    
    setColaboradores([...colaboradores,colaborador])
    console.log(colaboradores)
   
  }

  const times=[
    {
      nome: 'Back-End',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Gestão e Inovação',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

    
  

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=> time.nome)} aoColaboradorCadastrado={colaborador=>aoColaboradorAdicionado(colaborador)}/>
      {times.map((time)=>{
        return <Time key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => time.nome === colaborador.dropDown)}/>
      })}
      <Footer/>
      

    </div>
  );
}

export default App;
