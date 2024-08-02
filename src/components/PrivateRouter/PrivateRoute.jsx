import {Navigate,Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import {selectIsUserLogin} from "../../redux/auth/auth-selectors";
const PrivateRoute=()=>{
    const isAuth=useSelector(selectIsUserLogin);
    if(!isAuth){
        return <Navigate to ="/login"></Navigate>
    }
    return <Outlet/>

    
}
export default PrivateRoute;