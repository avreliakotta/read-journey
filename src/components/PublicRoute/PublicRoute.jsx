import {Navigate,Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import {selectIsUserLogin} from "../../redux/auth/auth-selectors";

const PublicRoute=()=>{
    const isAuth=useSelector(selectIsUserLogin);
    if(isAuth){
        return <Navigate to="/recommended"/>
    }
    return <Outlet/>
}
export default PublicRoute;