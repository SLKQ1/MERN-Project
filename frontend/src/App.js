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

function App(props) {
  // console.log(props);
  const { currentUser } = props;

  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <div>
      <HamburgerMenu currentUser={currentUser} />
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        {/* blocking the sing in route when user is signed in */}
        <Route
          exact
          path="/sign-in"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/wrist-shot/full-size/:id" component={FullSizeImage} />
        {/* only rendering post page when user is signed in */}
        <Route
          path="/post"
          render={() =>
            !currentUser ? (
              <Redirect to="/sign-in" />
            ) : (
              <PostPage currentUser={currentUser} />
            )
          }
        />
        {/* only loading profile page when user is signed in */}
        <Route
          path="/profile/:id"
          render={() => (!currentUser ? <Redirect to="/" /> : <ProfilePage />)}
        />
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
      {/* show modal when background is set */}
      {background && <Route path="/wrist-shot/:id" children={<Modal />} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(App);
