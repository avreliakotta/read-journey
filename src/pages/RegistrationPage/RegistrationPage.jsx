
import RegisterForm from "../../components/RegisterForm/RegisterForm";
// import css from "./registration-page.module.css";
import RegisterWrapper from "../../components/RegisterWrapper/RegisterWrapper";
import Container from "../../components/Container/Container"; 
import RegisterImage from "../../components/RegisterImage/RegisterImage";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
const RegistrationPage = () => {
    return (
        <Container>
        <RegisterWrapper >
            <RegisterForm />
        </RegisterWrapper>
        <ImageWrapper>
       <RegisterImage />
        </ ImageWrapper>
        </Container>
    );
};
export default RegistrationPage;