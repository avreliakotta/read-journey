import { NavLink } from "react-router-dom";
import css from "./user-nav.module.css";
const UserNav=()=>{
    // const fullClassName=active ? "css.activeNavLink" : "css.navLink";
    return(
        <nav className={css.userNav}>
            <ul className={css.navList} > 
                <li >
                <NavLink to="/recommended" className={({ isActive }) => (isActive ? css.activeNavLink : css.navLink)}>Home</NavLink>  
                </li>
                <li>
                <NavLink to="/library" className={({ isActive }) => (isActive ? css.activeNavLink : css.navLink)}>My library</NavLink>  
                </li>
            </ul>
           
        </nav>
    )
}
export default UserNav;