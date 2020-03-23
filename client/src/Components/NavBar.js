import React, { Fragment, useEffect, useContext } from "react";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {connect} from 'react-redux'


 
const useStyles = makeStyles(theme => ({
 modal: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
 },
 paper: {
   backgroundColor: "#fff",
   boxShadow: theme.shadows[5],
   padding: theme.spacing(2, 4, 3),
   borderRadius: 5,
   width: 400
 },
}));
 
 function NavigationBar(props) {
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);
 const [userdata,setUserData] = React.useState({
  name:"loading",
  picture:""
})
 
useEffect(()=>{
  if(props.user){
      setUserData({
     name:props.user.username,
     picture:props.user.picture
 })
  }
 
},[])
if(!props.user){
alert("NO USER YET")
}

 const handleOpenLogin = () => {
   setOpen(true);
   setOpenSignup(false);
 
 };
 
 const handleCloseLogin = () => {
   setOpen(false);
 };
 
 const [openSignup, setOpenSignup] = React.useState(false);
 
 const handleOpenSignup = () => {
   setOpenSignup(true);
   setOpen(false);
 
 };
 
 const handleCloseSignup = () => {
   setOpenSignup(false);
 };
const responseFacebook = (response) => {
           console.log(response);
         }
    
         const responseGoogle = (response) => {
           console.log(response);
         }
     var    callBackendAPI = async () => {
      
      
      };
       

 return (
   <header id="header" className="fixed-top">
     <div className="container-nav d-flex">
       <div className="logo mr-1">
         <a href="/">
           <img src="https://storage.cloud.google.com/snazcartweb/logo.png" alt="Snazcart" />
         </a>
        
       </div>
       <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block mr-auto">
           <div className="custom-search-input">
            
             <input type="text" placeholder="Search Anything Handmade..." />
               <button type="submit"><i className="header-icon_search_custom"><SearchIcon  color="disabled"/></i></button>
           </div>
         </div>
       <nav className="nav-menu d-none d-lg-block">
         <ul>
         
 
           <li>
 <a onClick={handleOpenLogin}><AccountCircleOutlinedIcon /> My Account</a>
           </li>
           <li>
             <a href="/cart"><ShoppingCartOutlinedIcon /><span> Cart</span></a>
           </li>
          
 
           <li>
             <a href="/selleraccount"><StorefrontIcon /> Start Selling</a>
           </li>
         </ul>
       </nav>
       <Modal
       aria-labelledby="transition-modal-title"
       aria-describedby="transition-modal-description"
       className={classes.modal}
       open={open}
       onClose={handleCloseLogin}
       closeAfterTransition
       BackdropComponent={Backdrop}
       BackdropProps={{
         timeout: 500,
       }}
     
     >
       <Fade in={open}>
         <div className={classes.paper}>
             <div className="d-flex justify-content-between">
                 <div>
                     <h5>Sign in to your account</h5>
                 <p className="login-sub mt-2">Access all your Orders, Payments and Profile. </p>
 
                 </div>
           
              <CloseIcon onClick={handleCloseLogin} className="cursor-pointer" />
             </div>
             <form className="mt-3">
 <div className="form-group">
 <div className="input-group">
  
   <input name="" className="form-control" placeholder="Email/Phone" type="email" />
 </div>
 </div>
 <div className="form-group">
 <div className="input-group">
  
     <input className="form-control" placeholder="Password" type="password" />
 </div>
 </div>
 <div className="form-group d-flex justify-content-between mt-3">
   <p className="pass-forgot mb-0 pt-2">Forgot Password?</p>
 <button type="submit" className="btn btn-custom btn-block col-6"> Login Now </button>
 </div>
 </form>
   <hr />
 <div className="d-flex justify-content-between">
       <p className="login-sub">Or sign innn with</p>
       <div className="col-6 d-flex justify-content-end">
       <a href="http://localhost:3005/auth/google">
          <img  className="auth-logo" width="24" height="24" src="https://storage.cloud.google.com/snazcartweb/icons/login/google_icon.png" />
          </a>
         
          <a href="http://localhost:3005/auth/facebook">
          <img  className="auth-logo" width="24" height="24" src="https://storage.cloud.google.com/snazcartweb/icons/login/facebook_icon.png" />
          </a>
          
       </div>
   </div>
   <hr />
   <p className="col-12"  style={{fontSize: 12, fontWeight: 500, textAlign: "center"}}>Don't have an account?  <a  style={{fontSize: 12, color: "#ff3b30", fontWeight: 500}} onClick={handleOpenSignup}>Create Account</a></p>
 
 
         </div>
       </Fade>
   </Modal>
     </div>
   
   </header>
 );
}

const mapStateToProps = (state)=>{
  return {
      user:state.auth
  }
}

export default connect(mapStateToProps)(NavigationBar);