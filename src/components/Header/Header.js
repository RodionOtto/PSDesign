import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <>
            <header className="header">
        <div className="header__content">
            <div className="header__logo"></div>
            <nav>
                <ul className="header__menu">
                    <li>
                        <a className="header__menu-item" href="#cases">
                            портфолио
                        </a>
                    </li>
                    <li>
                        <a className="header__menu-item" href="#prices">
                            цены
                        </a>
                    </li>
                    <li>
                        <a className="header__menu-item" href="#contacts">
                            контакты
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
        </>
    )
}

export default Header;
