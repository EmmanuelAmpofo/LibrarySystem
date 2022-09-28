import { Box, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginSignUp.css";

function Login() {
  const [capsLock, setCapsLock] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigate = useNavigate()

  const checkCapsLockOn = (event) => {
    if (event.getModifierState("CapsLock")) {
      setCapsLock(true);
    } else {
      setCapsLock(false);
    }
  };

  const showPassword = () => {
    setVisiblePassword(visiblePassword ? false : true);
  };

  const routeToPage=()=>{
    navigate('/signup')
  }

  const handleSignIn=(event)=>{
    event.preventDefault()
    navigate("/admin")
  }

  return (
    <Box className="loginWrapper">
      <form action="" className="formWrapper">
        <Box className="inputContainer">
          <label htmlFor="username">Username:</label>
          <Input
            onKeyUp={checkCapsLockOn}
            id="username"
            variant="standard"
            className="inputField"
            disableUnderline={true}
            autoComplete="off"
            required={true}
          />
          {capsLock && <span className="caps">WARNING! Caps lock is ON</span>}

          <label htmlFor="email">Email:</label>
          <Input
            onKeyUp={checkCapsLockOn}
            id="email"
            variant="standard"
            className="inputField"
            disableUnderline={true}
            autoComplete="off"
            required={true}
            type="email"
          />

          <label htmlFor="password">Password:</label>
          <Input
            onKeyUp={checkCapsLockOn}
            id="password"
            type={visiblePassword ? "text" : "password"}
            variant="standard"
            className="inputField"
            disableUnderline={true}
            autoComplete="off"
            required={true}
          />
          <Box className="pwdWrapper">
            <Box className="togglePwd">
              <input
                type="checkbox"
                name="show password"
                id="showpwd"
                onClick={showPassword}
              />
              <span htmlFor="showpwd" className="shwPwd">show password</span>
            </Box>

            <a href="/" className="forgotPassword">
              forgot password?
            </a>
          </Box>
          <button type="submit" className="loginBtn" onClick={handleSignIn}>
            login
          </button>
        </Box>
        <span className="dontHave">
          Already have an account?{" "}
          <span onClick={routeToPage} className="haveAccount" >Sign Up</span>
        </span>
      </form>
    </Box>
  );
}

export default Login;
