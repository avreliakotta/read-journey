
import RegisterForm from "../../components/RegisterForm/RegisterForm";
// import css from "./registration-page.module.css";
import RegisterWrapper from "../../components/RegisterWrapper/RegisterWrapper";
import Container from "../../components/Container/Container"; 
import RegisterImage from "../../components/RegisterImage/RegisterImage";
const RegistrationPage = () => {
    return (
        <Container>
        <RegisterWrapper padding="paddingSmall" showLogo={true}>
            <RegisterForm />
        </RegisterWrapper>
        <RegisterWrapper padding="paddingLarge" showLogo={false}>
       <RegisterImage />
        </RegisterWrapper>
        </Container>
    );
};
export default RegistrationPage;