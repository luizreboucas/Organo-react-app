import imagemBanner from '../images/Header2x.png'
import './Banner.css'

function Banner(){
    return (
        <header className="banner">
            <img  src={imagemBanner} alt="Banner Principal Da Página do Organo"/>
        </header>
    )
}

export default Banner;