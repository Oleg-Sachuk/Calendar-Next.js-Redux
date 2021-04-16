import style from './Header.module.css';
import Link from 'next/link';

const Header = ({ children }) => {
    return (
        <>
            <nav className={"navbar navbar-expand-lg"} style={{ height: '15vh', fontSize: 'large' }}>
                <div className="container-fluid">
                    <img className={style.logo} src={require('../../public/Rlogo.png')} width="100px" height="50px"/>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={style.navItem}>
                                <Link href={'/'}><a className={style.navFont} > <b>Home</b> </a></Link>
                            </li>
                            <li className={style.navItem}>
                                <Link href={'/about'}><a className={style.navFont} > <b>About Us</b> </a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}

export default Header;