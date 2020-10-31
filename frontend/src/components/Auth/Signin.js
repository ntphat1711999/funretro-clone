import React from "react";
import { Grid, makeStyles, TextField, Typography, Button, Dialog, DialogContent } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

function Signin() {
  const classes = useStyles();

  const handleSignin = () => {};

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12}>
          <img src="https://source.unsplash.com/random" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Grid>
        <Dialog open={true} onClose={false} classes={classes.root} maxWidth="lg">
          <DialogContent>
            <Grid container direction="column" alignItems="center" className={classes.form}>
              <Typography variant="h3" color="initial">
                Sign in
              </Typography>
              <TextField
                id="outlined-secondary"
                fullWidth
                margin="normal"
                required
                label="Email"
                variant="outlined"
                className={classes.textFiled}
              />
              <TextField
                id="outlined-secondary"
                fullWidth
                margin="normal"
                required
                label="Password"
                variant="outlined"
                type="password"
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
                  <Link href="#" variant="body2">
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
