import css from "./register-image.module.css";
import image from "../../assets/img/register-img@2x.jpg";
const RegisterImage=()=>{
    return(
        <div className={css.imgThumb}>
<img  className={css.img} src={image} alt="mobile app"/>
</div>
    )
}
export default RegisterImage;