import { useState } from "react";
import Logo from "../Logo/Logo";
import UserNav from "../UserNav/UserNav";
import css from "./header.module.css";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import UserBar from "../UserBar/UserBar";
import sprite from "../../assets/img/sprite/symbol-defs.svg";

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const handleMobileMenuToggle=()=>{
        setIsOpen(prev => !prev);
    }
    return(
        <header className={css.headerWrap} padding="0px">
            <Logo paddingClass="resetPadding"/>
            <UserNav/>
            <div className={css.box}>
            <UserBar/>
           {isOpen && (<button className={css.closeBtn} onClick={handleMobileMenuToggle}>
                <svg width="28px" height="28px">
                    <use href={`${sprite}#icon-close`}></use>
                </svg>
            </button>
           )}

            {!isOpen &&  (<button className={css.burgerBtn} onClick={handleMobileMenuToggle}>
            <svg width="28px" height="28px" className={css.burgerIcon}>
                <use href={`${sprite}#icon-burger`}></use>
            </svg>
            </button>
            )}

            <LogoutBtn/>
            </div>

        </header>
    )
}
export default Header ;