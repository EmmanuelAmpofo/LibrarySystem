import React, { useState } from 'react'
import {Box, Input} from '@mui/material'
import { useNavigate } from 'react-router-dom';

function SignUp() {
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
  
  const routeToPage = ()=>{
    navigate('/')
  }

  return (
    <Box className="loginWrapper">
      <form action="" className="signUpFormWrapper">
        <Box className="inputContainer">
          <label htmlFor="firstname">Firstname:</label>
          <Input
            onKeyUp={checkCapsLockOn}
            id="firstname"
            variant="standard"
            className="inputField"
            disableUnderline={true}
            autoComplete="off"
            required={true}
          />
          {capsLock && <span className="caps">WARNING! Caps lock is ON</span>}
          <label htmlFor="lastname">Lastname:</label>
          <Input
            onKeyUp={checkCapsLockOn}
            id="lastname"
            variant="standard"
            className="inputField"
            disableUnderline={true}
            autoComplete="off"
            required={true}
          />
          
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <Input
            onKeyUp={checkCapsLockOn}
            id="confirmPassword"
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
          </Box>
          <button type="submit" className="loginBtn">
            sign up
          </button>
        </Box>
        <span className="dontHave">
          Already have an account?{" "}
          <span onClick={routeToPage} className="haveAccount" >Log In</span>
        </span>
      </form>
    </Box>
  );
}

export default SignUp