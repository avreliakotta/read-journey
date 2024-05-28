import css from "./logo.module.css";
import sprite from "../../assets/img/sprite/symbol-defs.svg";
const Logo =()=>{
return(
    <div className={css.wrapper}>
        <svg className={css.logoIcon}>
            <use href={`${sprite}#icon-logo`}></use>
        </svg>
        <p className={css.logoText}>read journey</p>
    </div>
)
}
export default Logo;