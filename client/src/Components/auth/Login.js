import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'



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

class Modals extends Component{
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: ''};
}

logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
};

twitterResponse = (e) => {};

facebookResponse = (e) => {};

googleResponse = (e) => {};
onFailure = (error) => {
  alert(error);
}
render() {
  return(
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={openSignup}
    onClose={handleCloseSignup}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
  >
    <Fade in={openSignup}>
      <div className={classes.paper}>
          <div className="d-flex justify-content-between">
              <div>
                  <h5>Create new account</h5>
              <p className="login-sub mt-2">A simple registration to get started with Snazcart. </p>

              </div>
        
           <CloseIcon onClick={handleCloseSignup} className="cursor-pointer" />
          </div>
          <form className="mt-3">
          <div className="form-group">
<div className="input-group">

<input name="" className="form-control" placeholder="Full Name" type="text" />
</div>
</div>
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
<div className="form-group d-flex mt-3">
<button type="submit" className="btn btn-custom btn-block"> Create Account </button>
</div>
</form>
<hr />
<div className="d-flex justify-content-between">
    <p className="login-sub">Or sign up with</p>
    <div className="col-6 d-flex justify-content-end">
    <a href="http://localhost:3005/auth/google">
       <img  className="auth-logo" width="24" height="24" src="https://storage.cloud.google.com/snazcartweb/icons/login/google_icon.png" />
       </a>
      
      <a href="http://localhost:3005/auth/facebook">
       <img  className="auth-logo" width="24" height="24" src="https://storage.cloud.google.com/snazcartweb/icons/login/facebook_icon.png" />
       </a>
    </div>
</div>
<p className="col-12 mt-3"  style={{fontSize: 11, fontWeight: 500, textAlign: "left", color: "#8E8E93"}}>By clicking Register or Continue with Google, Facebook, or Apple, you agree to our <a style={{textDecoration: "underline"}}>Terms of Use</a>  and <a style={{textDecoration: "underline"}}>Privacy Policy</a>.</p>
<hr />
<p className="col-12"  style={{fontSize: 12, fontWeight: 500, textAlign: "center"}}>Already have an account?  <a  style={{fontSize: 12, color: "#ff3b30", fontWeight: 500}} onClick={handleOpenLogin}>Sign in</a></p>


      </div>
    </Fade>
  </Modal>
  );
}
}