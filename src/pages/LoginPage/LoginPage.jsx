import css from "./login-page.module.css";
import RegisterWrapper from "../../components/RegisterWrapper/RegisterWrapper";
import Container from "../../components/Container/Container";
import RegisterImage from "../../components/RegisterImage/RegisterImage";
import LoginForm from "../../components/LoginForm/LoginForm";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper";
const LoginPage = () => {
  return (
    <Container>
      <RegisterWrapper padding="paddingSmall" showLogo={true}>
        <LoginForm />
      </RegisterWrapper>
      <ImageWrapper >
        <RegisterImage />
      </ImageWrapper>
    </Container>
  );
};
export default LoginPage;
