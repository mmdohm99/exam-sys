import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/login.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import AuthContext from "../Module/AuthProvider";
const USER_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const Login = () => {
  const [active, setActive] = useState(false);
  const {
    signInMail,
    setSignInMail,
    signInPassword,
    setSignInPassword,
    signInName,
    setSignInName,
    signInConfirmPassword,
    setSignInConfirmPassword,
  } = useContext(AuthContext);

 
  /////////////////////////////////////////////

  const navigate = useNavigate();

  return (
    <div className="formcontainer">
      <form className="form">
        <Box sx={{ display: active ? "flex" : "none", margin: "10px  " }}>
          <CircularProgress />
        </Box>
        <h1>Login</h1>
        <TextField
          className="input"
          onChange={(e) => setSignInMail(e.target.value)}
          id="outlined-search"
          label="someone@gmail.com "
        />

        <Alert
          className={
            USER_REGEX.test(signInMail) === true || signInMail === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          Invalid Mail — check it out!
        </Alert>
        <TextField
          className="input"
          onChange={(e) => setSignInName(e.target.value)}
          id="outlined-search"
          label="Student Name "
        />
        <Alert
          className={
            isFinite(signInName) === false || signInName === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          This Field must be strings — check it out!
        </Alert>
        <TextField
          className="input"
          onChange={(e) => setSignInPassword(e.target.value)}
          id="outlined-search"
          label="Password "
        />
        <Alert
          className={
            PWD_REGEX.test(signInPassword) === true || signInPassword === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          Password must have strings with numbers — check it out!
        </Alert>

        <TextField
          className="input"
          onChange={(e) => setSignInConfirmPassword(e.target.value)}
          id="outlined-search"
          label="Confirm Password "
        />
        <Alert
          className={
            signInPassword === signInConfirmPassword || signInPassword === ""
              ? "hidden"
              : "visible"
          }
          severity="error"
        >
          Password doesnot match— check it out!
        </Alert>

        <Button
          className="input"
          type="button"
          onClick={() => {
            setActive(true);
            setTimeout(() => {
              navigate("/test", { replace: true });
            }, 3000);
          }}
          disabled={
            USER_REGEX.test(signInMail) === false ||
            PWD_REGEX.test(signInPassword) === false ||
            signInPassword !== signInConfirmPassword
          }
          variant="outlined"
        >
          {" "}
          Login{" "}
        </Button>
      </form>
    </div>
  );
};
