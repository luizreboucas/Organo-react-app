import './Footer.css'

const Footer = ()=>{
    return(
        <footer className='footer'>
            <div className='logos'>
                <img src='/imagens/fb.png' alt='logoFb'/>
                <img src='/imagens/ig.png' alt='logoIg'/>
                <img src='/imagens/tw.png' alt='logotw'/>
            </div>
            <div className='organo'>
                <img src='/imagens/logo.png' alt='logo-principal'/>
            </div>
            <h3>Desenvolvido por Neto Rebouças-Alura</h3>
        </footer>

    )
}

export default Footer