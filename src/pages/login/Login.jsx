import { Box, Input } from "@mui/material";
import React, { useState } from "react";
import "./login.css";

function Login() {
  const [capsLock, setCapsLock] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

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
                id=""
                onClick={showPassword}
              />
              <span className="shwPwd">show password</span>
            </Box>

            <a href="/" className="forgotPassword">
              forgot password?
            </a>
          </Box>
          <button type="submit" className="loginBtn">
            login
          </button>
        </Box>
        <span className="dontHave">
          Don' have an account?{" "}
          <a href="/" className="signUp">
            Sign Up
          </a>
        </span>
      </form>
    </Box>
  );
}

export default Login;
