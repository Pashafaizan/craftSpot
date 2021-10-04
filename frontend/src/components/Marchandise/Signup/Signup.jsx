import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import "./login.css";
import { fetchData } from "../../../middleware/requestHandler";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Visibility from "@material-ui/icons/Visibility";
import { InputAdornment } from "@material-ui/core";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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

function VisibilityIcon(props) {
  if (props.state) {
    return <Visibility />;
  }
  return <VisibilityOff />;
}

function RegisterForm() {
  const [sponser_id, setSponserId] = useState("");
  const [sponser_name, setSponserName] = useState("");
  const [user_name, setName] = useState("");
  const [date_of_birth, setdate_of_birth] = useState(new Date());
  const [mobile_number, setMobileNumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorSId, setErrorSId] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorDOB, setErrorDOB] = useState(false);
  const [errorMNumber, setErrorMNumber] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState(false);
  const [cVisibilityIcon, setCVisibilityIcon] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const classes = useStyles();
  let history = useHistory();

  let payload = {
    sponser_id,
    sponser_name,
    user_name,
    date_of_birth,
    mobile_number,
    email,
    password,
  };
  const checkValidation = () => {
    if (sponser_id === "") {
      setErrorSId(true);
      return false;
    }
    setErrorSId(false);
    if (user_name === "") {
      setErrorName(true);
      return false;
    }
    setErrorName(false);
    if (date_of_birth === "") {
      setErrorDOB(true);
      return false;
    }
    if (email === "") {
      setErrorEmail(true);
      return false;
    }
    setErrorEmail(false);
    if (password === "") {
      setErrorPassword(true);
      return false;
    }
    setErrorPassword(false);
    if (mobile_number === "") {
      setErrorMNumber(true);
      return false;
    }
    setErrorMNumber(false);
    if (!passwordValid || confirmPassword == "") {
      setConfirmPassword(" ");
      setPasswordValid(false);
      return false;
    }
    setConfirmPassword("");
    setPasswordValid(true);
    return true;
  };

  const clearFields = () => {
    setSponserId("");
    setSponserName("");
    setName("");
    setMobileNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setdate_of_birth(new Date());
  };

  useEffect(() => {
    fetchData(`/user?user_id=${sponser_id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      console.log(res);
      setSponserName("Loding.....");
      if (res.status == "true") {
        setSponserName(res.userData.user_name);
        console.log(res.userData.user_name);
        return;
      }
    });
  }, [sponser_id]);

  const submitForm = () => {
    fetchData(`/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => {
      alert("Your user ID", res.userId);
    });

    clearFields();
  };

  return (
    <div style={{}}>
      <div className="register_container">
        <div
          style={{
            height: 200,
            backgroundColor: "dodgerblue",
            width: "100%",
            zIndex: -100,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
          }}
        ></div>
        <ArrowBackIosIcon
          className="back_arrow"
          onClick={() => {
            history.goBack();
          }}
        />
        <div className="container_field">
          <h2>Registeration Form</h2>
          <div className="line"></div>
          <form
            className={classes.root}
            style={{ marginTop: 30 }}
            noValidate
            autoComplete="off"
          >
            {/* <TextField
              id="outlined-basic"
              label="Sponser ID *"
              error={errorSId}
              variant="outlined"
              value={sponser_id}
              onChange={(e) => {
                setSponserId(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Sponser Name"
              variant="outlined"
              value={sponser_name}
              disabled={true}
            /> */}
            <TextField
              id="outlined-basic"
              label="Enter Your Name *"
              variant="outlined"
              error={errorName}
              value={user_name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              InputLabelProps={{
                shrink: true,
              }}
              label="Date of birth*"
              value={date_of_birth}
              error={errorDOB}
              variant="outlined"
              type={"date"}
              onChange={(e) => {
                setdate_of_birth(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              error={errorMNumber}
              label="Enter Your Mobile Number *"
              variant="outlined"
              type={"number"}
              value={mobile_number}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Email *"
              variant="outlined"
              error={errorEmail}
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter Your Password *"
              type={!visibilityIcon ? "password" : "text"}
              error={errorPassword}
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        !visibilityIcon
                          ? setVisibilityIcon(true)
                          : setVisibilityIcon(false);
                      }}
                    >
                      <VisibilityIcon state={visibilityIcon} />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password *"
              type={!cVisibilityIcon ? "password" : "text"}
              error={confirmPassword !== "" ? !passwordValid : false}
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                for (var i = 0; i < e.target.value.length; i++) {
                  if (e.target.value[i] != password[i]) {
                    setPasswordValid(false);
                    return;
                  }
                }
                setPasswordValid(true);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        !cVisibilityIcon
                          ? setCVisibilityIcon(true)
                          : setCVisibilityIcon(false);
                      }}
                    >
                      <VisibilityIcon state={cVisibilityIcon} />
                    </div>
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <button className="btn" onClick={submitForm}>
            Submit
          </button>
          <div className="signin_div">
            Already have an Account? Please <a href="/login"> Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
