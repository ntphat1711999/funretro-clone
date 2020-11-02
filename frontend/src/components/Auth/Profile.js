import React, { useEffect, useState } from "react";
import { Grid, Typography, TextField, Button, Breadcrumbs, Link, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { Link as RouteLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux";
import { authApi } from "../../services";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  label: {
    minWidth: 110,
  },
}));

function Profile() {
  const classes = useStyles();
  const user = useSelector((state) => state.app.user);
  const token = useSelector((state) => state.app.token);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.name) {
      setFirstName(user.name.split(" ")[0]);
      setLastName(user.name.split(" ")[1]);
    }
  }, [user]);

  const submitChangeProfile = async (data, token) => {
    try {
      await authApi.updateProfile(data, token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeProfile = () => {
    const newName = firstName.trim() + " " + lastName.trim();
    const data = { id: user.id, newName };
    dispatch(actions.updateProfile({ name: newName }));
    localStorage.setItem("user", JSON.stringify({ ...user, name: newName }));
    submitChangeProfile(data, token);
  };

  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-start"
        alignContent="center"
        wrap="nowrap"
        style={{ padding: 40 }}
      >
        <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/" component={RouteLink} className={classes.link}>
              <HomeIcon className={classes.icon} />
              Home
            </Link>
            <Typography color="textPrimary" className={classes.link}>
              <PersonIcon className={classes.icon} />
              Profile
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} style={{ width: "100%", padding: "10px 0" }}>
          <Divider />
        </Grid>
        <Grid item container xs={12} spacing={1}>
          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <Typography variant="h6" color="initial" className={classes.label}>
                First name:
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="firstname"
                size="small"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <Typography variant="h6" color="initial" className={classes.label}>
                Last name:
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="lastname"
                size="small"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={handleChangeProfile} variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
