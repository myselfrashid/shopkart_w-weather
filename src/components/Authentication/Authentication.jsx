import React from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../firebase/firebase";
import SignUpForm from "../sign-up/Sign-Up";
import SignInForm from "../SignInForm";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };
  return (
    <div className="flex flex-row px-20 mx-auto">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
