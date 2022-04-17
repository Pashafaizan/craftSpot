import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import {fetchData}  from "../../../middleware/requestHandler"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import userSponserData from "../../actions/user.actions"
import {useSelector,useDispatch} from "react-redux"
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "70ch",
      "@media (max-width: 768px)": {
        width: "60ch",
      },
      "@media (max-width: 767px)": {
        width: "35ch",
      },
      "@media (max-width: 320px)": {
        width: "30ch",
      },
    },
  },
}));

function Login({setToken}) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  

  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
    
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();

  let payload = {
    email,
    password,
  };
  const checkValidation = () => {
    if (email === "") {
      setErrorId(true);
      return false;
    }
    setErrorId(false);
    if (password === "") {
      setErrorPassword(true);
      return false;
    }
    setErrorPassword(false)
    return true;
  };

  const clearFields = () =>{
    setPassword("")
    setEmail("")
  }

  const submitForm = () => {
    fetchData(`user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(payload),
      }).then((res) => {
        
         
          if(res.message=="Login successfully"){
            localStorage.setItem('access_token',res.access_token);
            localStorage.setItem('refresh_token',res.refresh_token);
            localStorage.setItem('user',JSON.stringify(res.user));
           
            history.push('/seller/dashboard')
         
          }
          
        
     
      });
  
    }

  return (
    <div className="register_container">
      <ArrowBackIosIcon
        className="back_arrow"
        onClick={() => {
          history.goBack();
        }}  
      />
      <div style={{height:200,backgroundColor:"dodgerblue",width:"100%",zIndex:-100 ,position:"fixed",top:0,left:0,right:0}}></div>
      <div className="container_field" style={{height:"80vh"}}>
        <h2>Login Form</h2>
        <div className="line"></div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Email "
            error={errorId}
            value={email}
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Your Password"
            error={errorPassword}
            value={password}
            variant="outlined"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </form>

        <button className="btn-login" onClick={submitForm}>
          Login
        </button>
        <div className="signin_div">
          No Account? Please <a href="/marchandise/signup"> Register Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
