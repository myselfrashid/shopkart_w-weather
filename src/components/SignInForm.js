import { useState, useContext } from "react";

import { UserContext } from "../contexts/userContext";

import {
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
}
  from "../firebase/firebase";

const defaulFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaulFormFields)
  }

  const signInWithGoogle = async () => {
    signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInUserWithEmailAndPassword(
        email,
        password);
      setCurrentUser(user);
      resetFormFields();
    }

    catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('no user found with this email');
          break;
        default:
          console.log(error)
      }
    }
  }
  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-full text-gray-800 antialiased px-4 py-20 flex flex-col justify-center box-border">
      <h1 className="text-2xl text-center font-bold">Already have an account? Sign in here</h1>
      <form className="py-2 px-4" onSubmit={(handleSubmit)}>
        <label className="block font-semibold py-5">Email ID:</label>
        <input
          className="border-b-2 bg-gray-50 border-gray-400 w-full h-10 rounded-md"
          type="email"
          placeholder="Enter your e-mail here"
          onChange={handleTextChange}
          name="email"
          value={email}
          required
        />
        <label className="block font-semibold py-5">Password</label>
        <input
          className="border-b-2 bg-gray-50 border-gray-400 w-full h-10 rounded-md"
          type="password"
          placeholder="Enter password"
          onChange={handleTextChange}
          name="password"
          value={password}
          required
        />
        <div className="py-6 w-full">
          <button className="block w-full h-10 bg-black font-semibold text-white rounded-md" type="submit">Sign In</button>
        </div>
        <div className="w-full">
          <button className="block w-full h-10 bg-[#4285f4] font-semibold text-white rounded-md" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
