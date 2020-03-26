import React, { useEffect } from "react";
import Navigationbar from "./Components/NavBar";
import CategoryBar from "./Components/Categories";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import "./assets/css/style.css";
import "./assets/css/style.js";
import { connect } from "react-redux";
import { fetchUserAction } from "./actions/myaction";



function App(props) {
  useEffect(() => {
    props.fetch_user();
  }, []);
  return (
    <>
      <Navigationbar />

      <CategoryBar />
      <Routes />
      <Footer />
    </>
  );
}

const mapDispathToProps = dispatch => {
  return {
    fetch_user: () => {
      dispatch(fetchUserAction());
    }
  };
};

export default connect(
  null,
  mapDispathToProps
)(App);
