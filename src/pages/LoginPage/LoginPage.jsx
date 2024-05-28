import css from "./login-page.module.css";
import RegisterWrapper from "../../components/RegisterWrapper/RegisterWrapper";
import Container from "../../components/Container/Container";
import RegisterImage from "../../components/RegisterImage/RegisterImage";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <Container>
      <RegisterWrapper padding="paddingSmall" showLogo={true}>
        <LoginForm />
      </RegisterWrapper>
      <RegisterWrapper padding="paddingLarge" showLogo={false}>
        <RegisterImage />
      </RegisterWrapper>
    </Container>
  );
};
export default LoginPage;
