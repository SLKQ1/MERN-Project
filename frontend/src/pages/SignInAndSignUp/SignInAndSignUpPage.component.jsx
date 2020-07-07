import React from "react";
import "./SignInAndSignUpPage.styles.css";

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

function SignInAndSignUpPage() {
  return (
    <div className="sign-in-and-sign-up-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
