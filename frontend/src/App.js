import React from "react";
import "./App.css";

// importing components
import HomePage from "./pages/Home/HomePage.component";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu.component";
import Modal from "./components/Modal/Modal.component";
import FullSizeImage from "./pages/FullSizeImage/FullSizeImage.component";
import PostPage from "./pages/Post/PostPage.component";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUpPage.component";

// importing react router
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import ProfilePage from "./pages/Profile/ProfilePage.component";
// importing redux
import { connect } from "react-redux";
import { signUpSuccess } from "./redux/user/user.actions";

function App(props) {
  // destructuring necessary props
  const { currentUser } = props;
  console.log(currentUser);

  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div>
      <HamburgerMenu currentUser={currentUser} />
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/wrist-shot/full-size/:id" component={FullSizeImage} />
        <Route path="/post" component={PostPage} />
        <Route path="/profile/:id" component={ProfilePage} />
      </Switch>
      {/* show modal when background is set */}
      {background && <Route path="/wrist-shot/:id" children={<Modal />} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(App);
