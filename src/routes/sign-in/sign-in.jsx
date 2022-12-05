import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import { SignInContainer } from "./sign-in.styles";


const SignIn = () => {
  return (
    <SignInContainer>
     <SignInForm />
     <SignUpForm />
    </SignInContainer>
  );
};

export default SignIn;
