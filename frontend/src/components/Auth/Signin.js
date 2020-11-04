import React, { useState } from "react";
import { Grid, makeStyles, TextField, Typography, Button, Dialog, DialogContent } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, useHistory } from "react-router-dom";
import { authApi } from "../../services";
import { useDispatch } from "react-redux";
import { actions } from "../../redux";
import { validateEmail } from "../../utils/common";
import CustomizedSnackbars from "../common/CustomizedSnackbars";

function Signin() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const submitSignin = async (data) => {
    try {
      const response = await authApi.signin(data);
      const { user, token } = response;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      dispatch(actions.signin({ user, token }));
      setMessage({ type: "success", content: "Sign in successfully !!!", open: true });
      history.push("/");
    } catch (error) {
      console.log(error);
      setMessage({ type: "error", content: "Email or Password is wrong !!!", open: true });
      history.push("/signin");
    }
  };

  const handleSignin = () => {
    if (!validateEmail(email)) {
      setMessage({ type: "error", content: "Invalid email !!!", open: true });
      return;
    }
    submitSignin({ email, password });
  };

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>
          <img
            src="https://source.unsplash.com/random"
            alt="background"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Dialog open={true} onClose={() => false} maxWidth="lg">
          <DialogContent>
            <Grid container direction="column" alignItems="center" className={classes.form}>
              <Typography variant="h3" color="initial">
                Sign in
              </Typography>
              <TextField
                id="email"
                autoComplete="email"
                fullWidth
                margin="normal"
                required
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                className={classes.textFiled}
              />
              <TextField
                id="password"
                autoComplete="password"
                fullWidth
                margin="normal"
                required
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className={classes.textFiled}
              />
              <Button onClick={handleSignin} variant="contained" color="primary" style={{ width: "50%" }}>
                Sign in
              </Button>
              <Button
                onClick={handleSignin}
                variant="outlined"
                startIcon={<FacebookIcon color="primary" style={{ fontSize: 28 }} />}
                color="default"
                className={classes.button}
              >
                Sign in with Facebook
              </Button>
              <Button
                onClick={handleSignin}
                variant="outlined"
                startIcon={
                  <img
                    width="20px"
                    style={{ marginBottom: 3, marginRight: 5 }}
                    alt="Google sign-in"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                  />
                }
                color="default"
                className={classes.button}
              >
                Sign in with Google
              </Button>
              <Grid container>
                <Grid item xs style={{ marginRight: 10 }}>
                  <Link to="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
      <CustomizedSnackbars message={message} />
    </div>
  );
}

export default Signin;

const useStyles = makeStyles({
  root: {
    width: 600,
    height: "auto",
  },
  form: {
    "&> *": {
      margin: "10px auto",
    },
  },
  textFiled: {
    width: 360,
    margin: "10px auto",
  },
  button: {
    width: "100%",
  },
});
