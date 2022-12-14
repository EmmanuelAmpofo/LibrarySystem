import React, { useState } from "react";
import { Box, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

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
    comparePassword(event);
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
      alert("Registration Successful");
      navigate("/");
    } else {
      alert("Please all form fields are required");
    }
  };

  const comparePassword = (event) => {
    const { id, value } = event.target;
    setError((prev) => {
      const errorStateObj = {
        ...prev,
        [id]: "",
      };
      switch (id) {
        case "password":
          if (!value) {
            errorStateObj[id] = "Please enter your password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            errorStateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            errorStateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            errorStateObj[id] = "Please confirm password.";
          } else if (input.password && value !== input.password) {
            errorStateObj[id] = "Password and confirm password does not match.";
          }
          break;

        default:
          break;
      }

      return errorStateObj;
    });
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
            onBlur={comparePassword}
            value={input.password}
          />
          {error.password && <span className="caps">{error.password}</span>}
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
            onBlur={comparePassword}
            value={input.confirmPassword}
          />
          {error.confirmPassword && (
            <span className="caps">{error.confirmPassword}</span>
          )}
          <Box className="pwdWrapper" onClick={showPassword}>
            <Box className="togglePwd">
              <input
                type="checkbox"
                name="show password"
                id="vvv"
                onClick={showPassword}
              />
              <label htmlFor="vvv" className="shwPwd">
                show password
              </label>
            </Box>
          </Box>
          <button type="submit" className="loginBtn" onClick={handleSignUp}>
            sign up
          </button>
        </Box>
        <span className="dontHave">
          Already have an account?{" "}
          <label onClick={routeToPage} className="haveAccount">
            Log In
          </label>
        </span>
      </form>
    </Box>
  );
}

export default SignUp;
