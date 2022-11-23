import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import InputField from "../form-input/form-input";
import Button from "../button/button";
import "./sign-up-form.scss"
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword} = formFields;
  const { setCurrentUser } = useContext(UserContext);

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
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputField label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>
        <InputField label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
        <InputField label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
        <InputField label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;
