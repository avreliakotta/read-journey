import css from "./logout-btn.module.css";
import { useDispatch } from "react-redux";
import{logout} from "../../redux/auth/auth-thunk";
const LogoutBtn=()=>{
    const dispatch=useDispatch();
   const handleLogout=()=>{
    console.log('Initiating logout...');
    dispatch(logout())};
    return(
        <button type="button" className={css.logoutButton} onClick={handleLogout}>Log out</button>
    )
}
export default LogoutBtn;