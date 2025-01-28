import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import style from './header.module.css';

export function Header() {
    return (
        <header className="header">
            <div className={`container ${style.container}`}>
                <Link to="/">
                    <img src={logo} alt="Criptomoedas" className={style.logo} />
                </Link>
            </div>
        </header>
    )
}