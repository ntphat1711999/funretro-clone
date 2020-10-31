import React from "react";
import { Grid, makeStyles, TextField, Typography, Button, Dialog, DialogContent } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

function Signup() {
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
                Sign up
              </Typography>
              <Grid container className={classes.textFiled}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="fname"
                    variant="outlined"
                    required
                    fullWidth
                    id="fName"
                    label="First Name"
                    autoFocus
                    style={{ width: 170 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lname"
                    label="Last Name"
                    name="lname"
                    autoComplete="lname"
                    style={{ width: 170, marginLeft: 10 }}
                  />
                </Grid>
              </Grid>
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
                Sign up
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
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/" variant="body2">
                    Already have an account? Sign in
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

export default Signup;

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
