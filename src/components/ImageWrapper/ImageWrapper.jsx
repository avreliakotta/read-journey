import css from './image-wrapper.module.css';;
const ImageWrapper=({children})=>{
    return(
        <div className={css.wrapper}> 
{children}
        </div>
    )
}
export default ImageWrapper;