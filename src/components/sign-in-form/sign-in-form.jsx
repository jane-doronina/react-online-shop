import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import InputField from "../form-input/form-input";
import { SignInFormContainer, ButtonsContainer } from "./sign-in-form.styles"


const defaultFormFields = {
  email: "",
  password: ""
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
    navigate("/shop");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/shop");
    } catch(error) {
      if(error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else if(error.code === "auth/user-not-found") {
        alert("No user with this email")
      } else {
        console.log(error);
      }
    }
  };

  return (
    <SignInFormContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
      <InputField label="email" type="email" required name="email" value={email} onChange={handleChange} />
      <InputField label="password" type="password" required name="password" value={password} onChange={handleChange} />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}><i class="fa-brands fa-google"></i> Sign in with Google</Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
