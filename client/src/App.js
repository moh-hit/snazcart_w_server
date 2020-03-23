import React,{useEffect} from "react";
import Navigationbar from "./Components/NavBar";
import CategoryBar from "./Components/Categories";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import "./assets/css/style.css";
import "./assets/css/style.js";
import {connect} from 'react-redux'
import {fetchUserAction} from './actions/myaction'

import { ThemeProvider } from 'styled-components';
const darkTheme = {
  body: '#363537' ,
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

 function App(props) {
  useEffect(()=>{
    props.fetch_user()
 },[])
  return (
    <ThemeProvider theme={darkTheme}>
     
      <Navigationbar />
      <CategoryBar />
      <Routes />
      <Footer />
      </ThemeProvider>
  );
}

const mapDispathToProps = (dispatch)=>{
  return {
    fetch_user:()=>{dispatch(fetchUserAction())}
  }
}

export default connect(null,mapDispathToProps)(App);
