import React from "react";
import logoBlack from "../../assets/images/logo-black.svg";
import logo from "../../assets/images/logo.svg";
import toggleBlack from "../../assets/images/toggle-black.svg";
import toggle from "../../assets/images/toggle.svg";
import { useTheme } from "../../hooks/use-theme";
import "./style.scss";

function Header() {
  let {theme, setTheme} = useTheme();

  const switchingThemes = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <header className='header'>
            <div className="container header__wrapper">
                <div className="header__logo">
                    <img src={
                        theme === "light" ? logoBlack : logo
                    } alt="logo" />
                </div>
                <div className="header__theme-switch" >
                    <img src={
                        theme === "light" ? toggleBlack : toggle
                    } alt="icon-toggle" onClick={switchingThemes}/>
                </div>
            </div>
        </header>
    );
}

export default Header;