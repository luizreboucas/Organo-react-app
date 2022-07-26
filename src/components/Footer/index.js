import './Footer.css'
import imagemFb from '../Banner/images/fb.png'
import imagemIg from '../Banner/images/ig.png'
import imagemTw from '../Banner/images/tw.png'
import logo from '../Banner/images/logo.png'
 
const Footer = ()=>{
    return(
        <footer className='footer'>
            <div className='logos'>
                <img src={imagemFb} alt='logoFb'/>
                <img src={imagemIg} alt='logoIg'/>
                <img src={imagemTw} alt='logotw'/>
            </div>
            <div className='organo'>
                <img src={logo} alt='logo-principal'/>
            </div>
            <h3>Desenvolvido por Neto Rebouças-Alura</h3>
        </footer>

    )
}

export default Footer