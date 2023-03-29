import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import InputField from "../form-input/form-input";
import Button from "../button/button";
import { SignUpFormContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/shop");
    } catch(error) {
      if(error.code === "auth/email-already-in-use") {
        alert("Email already in use")
      } else {
      console.log("user creation failed", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField label="display name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
        <InputField label="email" type="email" required onChange={handleChange} name="email" value={email}/>
        <InputField label="password" type="password" required onChange={handleChange} name="password" value={password}/>
        <InputField label="confirm password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpFormContainer>
  )
}

export default SignUpForm;
