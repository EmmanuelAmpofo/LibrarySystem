import React, { useState } from "react";
import { Box, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [input, setInput] = useState("");

  const [capsLock, setCapsLock] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const navigate = useNavigate();

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

  const routeToPage = () => {
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSignUp = (event) => {
    event.preventDefault();
    if (
      input.firstname !== "" &&
      input.lastname !== "" &&
      input.username !== "" &&
      input.email !== "" &&
      input.password !== "" &&
      input.confirmPassword
    ) {
      console.log(input.firstname);
      console.log(input.lastname);
      console.log(input.username);
      console.log(input.email);
      console.log(input.password);
      alert("Registration Successful")
      navigate("/");
    } else {
      alert("Please all form fields are required");
    }
  };
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
            onChange={handleInputChange}
            value={input.firstname}
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
            onChange={handleInputChange}
            value={input.lastname}
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
            onChange={handleInputChange}
            value={input.username}
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
            onChange={handleInputChange}
            value={input.email}
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
            onChange={handleInputChange}
            value={input.password}
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
            onChange={handleInputChange}
            value={input.confirmPassword}
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
          <button type="submit" className="loginBtn" onClick={handleSignUp}>
            sign up
          </button>
        </Box>
        <span className="dontHave">
          Already have an account?{" "}
          <span onClick={routeToPage} className="haveAccount">
            Log In
          </span>
        </span>
      </form>
    </Box>
  );
}

export default SignUp;
