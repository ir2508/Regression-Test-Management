import './Banner.css'
import logo from '../../assets/images/logo.png'

const Banner = () => {
    return (
        <header className='header'>
            <img className='logo' src={logo} alt='Senac logo' />
            <h2>Controle de Testes Automatizados de Regressão</h2>
        </header>
    )
}

export default Banner