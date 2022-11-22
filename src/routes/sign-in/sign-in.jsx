import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";
import "./sign-in.scss"


const SignIn = () => {
  return (
    <div className="sign-in-container">
     <SignInForm />
     <SignUpForm />
    </div>
  );
};

export default SignIn;
