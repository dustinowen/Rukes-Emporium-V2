import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import {
  createUserDocFromAuth,
  signInWithGoogle
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const googleSignIn = async () => {
    const { user } = await signInWithGoogle()
    await createUserDocFromAuth(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password)
      console.log(response)

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/too-many-requests':
          alert('Access to this account has been temporarily disabled due to multiple failed login attempts. You can immediately restore it by resetting your password or you can try again later.')
          break
        case 'auth/invalid-login-credentials':
          alert('Incorrect credentials - please check your username and password and try again.')
          break
        default:
          console.log(error)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign Up With Your Email + Password</span>

      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={googleSignIn}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
