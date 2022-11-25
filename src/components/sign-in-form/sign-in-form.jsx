import { useState } from "react";
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import Button from "../button/button";
import InputField from "../form-input/form-input";
import "./sign-in-form.scss"


const defaultFormFields = {
  email: "",
  password: ""
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
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
    <div className="sign-in-form-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
      <InputField label="email" type="email" required name="email" value={email} onChange={handleChange} />
      <InputField label="password" type="password" required name="password" value={password} onChange={handleChange} />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={logGoogleUser}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;