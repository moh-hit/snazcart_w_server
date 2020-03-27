import React, { Fragment, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseIcon from "@material-ui/icons/Close";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { setInStorage, getFromStorage } from "../utils/storage";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5,
    width: 400
  }
}));
const NavigationBar = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userdata, setUserData] = useState({
    name: "My Account",
    picture: "",
    username: "",
    password: "",
    loggedIn: false
  });
  const [upName, setUpName] = useState('');
  const [upEmail, setUpEmail] = useState('');
  const [upPassword, setUpPassword] = useState('');

  const [inEmail, setInEmail] = useState('');
  const [inPassword, setInPassword] = useState('');

  const [userLogin, setUserLogin] = useState({
    signedUp: true,
    isLoading: true,
    token: "",
    signInError: "",
    signUpError: "",
    // inEmail: "",
    // inPassword: "",
    // upName: "",
    // upEmail: "",
    // upPassword: ""
  });

  useEffect(() => {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;

      fetch("http://localhost:3005/api/accounts/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            setUserLogin({
              token: token,
              isLoading: false
            });
          } else {
            setUserLogin({
              isLoading: false
            });
          }
        });
    } else {
      setUserLogin({
        isLoading: false
      });
    }

    if (props.user) {

      setUserData({
        loggedIn: true,
        name: props.user.username,
        picture: props.user.picture
      });
    }
  }, [props]);
  if (!props.user) {
    // props.history.push('/')
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

/* FOR SIGN IN FIELD*/
  const onChangeInEmail = event => {
    setInEmail(event.target.value);
  };

  const onChangeInPassword = event => {
    setInPassword(event.target.value);
  };


/* FOR SIGN UP FIELD*/
  const onChangeUpEmail = event => {
    setUpEmail(event.target.value);
  };

  const onChangeUpPassword = event => {
    setUpPassword(event.target.value);
  };

  const onChangeUpName = event => {
    setUpName( event.target.value);
  };

/* FOR SIGN IN BUTTON*/

  const onSignUp = () => {
    setUserLogin({
      isLoading: true
    });

    fetch("http://localhost:3005/api/accounts/signup", {
      method: "POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
        fullName: upName,
        email: upEmail,
        password: upPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if(json.success){
          setUserLogin({
            signedUp: true
          });
        }else{
          setUserLogin({
            signUpError: json.message,
            isLoading: false
          });
        }

      });
  setOpenSignup(false);
  setOpen(true);
  };

/* FOR SIGN UP BUTTON*/
  const onSignIn = () => {

    setUserLogin({
      isLoading: true
    });

    fetch("http://localhost:3005/api/accounts/signin", {
      method: "POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
        email: inEmail,
        password: inPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if(json.success){
          setInStorage('the_main_app', {token: json.token});
          setUserLogin({
            signedUp: true,
            token: json.token
          });
          userdata.name = inEmail;
          userdata.loggedIn = true;

          setInEmail('');
          setInPassword('');
        }else{
          setUserLogin({
            signInError: json.message,
            isLoading: false
          });
        }

      });
  setOpen(false);
  };

  const logout = () => {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token } = obj;

      fetch("http://localhost:3005/api/accounts/logout?token=" + token,{
    method: "POST"})
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            setUserLogin({
              token: '',
              isLoading: false
            });
          } else {
            setUserLogin({
              isLoading: false
            });
          }
        });
    }else {
      setUserLogin({
        isLoading: false
      });
    }
    userdata.loggedIn = false;
    userdata.name = 'My Account';
    userdata.picture = '';
    handleClose2();
  }

  let account;
  if (!userdata.loggedIn) {
    account = <AccountCircleOutlinedIcon />;
  } else if(userdata.picture != "") {
    account = (
      <img
        width="25"
        height="25"
        style={{ borderRadius: 15 }}
        src={userdata.picture}
      />
    );
  }
  else{
    account = <AccountCircleOutlinedIcon />;
  }

  return (
    <header id="header" className="fixed-top">
      {console.log(userdata.picture)}
      <div className="container-nav d-flex">
        <div className="logo mr-1">
          <a href="/">
            <img
              src="https://storage.cloud.google.com/snazcartweb/logo.png"
              alt="Snazcart"
            />
          </a>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 d-none d-md-block mr-auto">
          <div className="custom-search-input">
            <input type="text" placeholder="Search Anything Handmade..." />
            <button type="submit">
              <i className="header-icon_search_custom">
                <SearchIcon color="disabled" />
              </i>
            </button>
          </div>
        </div>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li>
              {!userdata.loggedIn ? (
                <a onClick={handleOpenLogin}>
                  {" "}
                  {account} {userdata.name}{" "}
                </a>
              ) : (
                <a onClick={handleClick}>
                  {" "}
                  {account} {userdata.name}{" "}
                </a>
              )}
            </li>
            <li>
              <a href="/cart">
                <ShoppingCartOutlinedIcon />
                <span> Cart</span>
              </a>
            </li>

            <li>
              <a href="/selleraccount">
                <StorefrontIcon /> Start Selling
              </a>
            </li>
          </ul>
        </nav>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          <li>
            <a href="http://localhost:3005/api/logout">logout</a>
          </li>
        </Menu>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl2}
          keepMounted
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
        >

          <li>
            <a onClick={logout}>logout</a>
          </li>
        </Menu>

        {/*SIGNIN MODAL*/}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleCloseLogin}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Sign in to your account</h5>
                  <p className="login-sub mt-2">
                    Access all your Orders, Payments and Profile.{" "}
                  </p>
                </div>

                <CloseIcon
                  onClick={handleCloseLogin}
                  className="cursor-pointer"
                />
              </div>
              <div className="mt-3">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      name=""
                      className="form-control"
                      placeholder="Email/Phone"
                      type="email"
                      value={inEmail}
                      onChange={onChangeInEmail}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      value={inPassword}
                      onChange={onChangeInPassword}
                    />
                  </div>
                </div>
                <div className="form-group d-flex justify-content-between mt-3">
                  <p className="pass-forgot mb-0 pt-2">Forgot Password?</p>
                  <button
                    className="btn btn-custom btn-block col-6"
                    onClick={onSignIn}
                  >
                    {" "}
                    Login Now{" "}
                  </button>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="login-sub">Or sign innn with</p>
                <div className="col-6 d-flex justify-content-end">
                  <a href="http://localhost:3005/auth/google">
                    <img
                      className="auth-logo"
                      width="24"
                      height="24"
                      src="https://storage.cloud.google.com/snazcartweb/icons/login/google_icon.png"
                    />
                  </a>

                  <a href="http://localhost:3005/auth/facebook">
                    <img
                      className="auth-logo"
                      width="24"
                      height="24"
                      src="https://storage.cloud.google.com/snazcartweb/icons/login/facebook_icon.png"
                    />
                  </a>
                </div>
              </div>
              <hr />
              <p
                className="col-12"
                style={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}
              >
                Don't have an account?{" "}
                <a
                  style={{ fontSize: 12, color: "#ff3b30", fontWeight: 500 }}
                  onClick={handleOpenSignup}
                >
                  Create Account
                </a>
              </p>
            </div>
          </Fade>
        </Modal>

        {/*SIGNUP MODAL*/}

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openSignup}
          onClose={handleCloseSignup}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={openSignup}>
            <div className={classes.paper}>
              <div className="d-flex justify-content-between">
                <div>
                  <h5>Create new account</h5>
                  <p className="login-sub mt-2">
                    A simple registration to get started with Snazcart.{" "}
                  </p>
                </div>

                <CloseIcon
                  onClick={handleCloseSignup}
                  className="cursor-pointer"
                />
              </div>
              <div className="mt-3">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      name=""
                      className="form-control"
                      placeholder="Full Name"
                      type="text"
                      value={upName}
                      onChange={onChangeUpName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      name=""
                      className="form-control"
                      placeholder="Email/Phone"
                      type="email"
                      value={upEmail}
                      onChange={onChangeUpEmail}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      value={upPassword}
                      onChange={onChangeUpPassword}
                    />
                  </div>
                </div>
                <div className="form-group d-flex mt-3">
                  <button
                    className="btn btn-custom btn-block"
                    onClick={onSignUp}
                  >
                    {" "}
                    Create Account{" "}
                  </button>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p className="login-sub">Or sign up with</p>
                <div className="col-6 d-flex justify-content-end">
                  <a href="http://localhost:3005/auth/google">
                    <img
                      className="auth-logo"
                      width="24"
                      height="24"
                      src="https://storage.cloud.google.com/snazcartweb/icons/login/google_icon.png"
                    />
                  </a>

                  <a href="http://localhost:3005/auth/facebook">
                    <img
                      className="auth-logo"
                      width="24"
                      height="24"
                      src="https://storage.cloud.google.com/snazcartweb/icons/login/facebook_icon.png"
                    />
                  </a>
                </div>
              </div>
              <p
                className="col-12 mt-3"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  textAlign: "left",
                  color: "#8E8E93"
                }}
              >
                By clicking Register or Continue with Google, Facebook, or
                Apple, you agree to our{" "}
                <a style={{ textDecoration: "underline" }}>Terms of Use</a> and{" "}
                <a style={{ textDecoration: "underline" }}>Privacy Policy</a>.
              </p>
              <hr />
              <p
                className="col-12"
                style={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}
              >
                Already have an account?{" "}
                <a
                  style={{ fontSize: 12, color: "#ff3b30", fontWeight: 500 }}
                  onClick={handleOpenLogin}
                >
                  Sign in
                </a>
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth
  };
};

export default connect(mapStateToProps)(NavigationBar);
