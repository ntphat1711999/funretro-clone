import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StopIcon from "@material-ui/icons/Stop";
import CardBoard from "../CardBoard";

function BoardView(props) {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={5} className={classes.root}>
        <Grid item className={classes.title} xs={12}>
          HEL-1
        </Grid>
        <Grid container item className={classes.header} xs={12}>
          <Grid item xs={4} className={classes.titleColumn}>
            <div className={classes.wentWellHeader}>
              <StopIcon style={{ color: "blue" }} />
              <div>Went well</div>
            </div>
            <div className={classes.addBtn}>
              <AddIcon />
            </div>
          </Grid>
          <Grid item xs={4} className={classes.titleColumn}>
            <div className={classes.toImproveHeader}>
              <StopIcon style={{ color: "green" }} />
              <div>To improve</div>
            </div>
            <div className={classes.addBtn}>
              <AddIcon />
            </div>
          </Grid>
          <Grid item xs={4} className={classes.titleColumn}>
            <div className={classes.actionItemsHeader}>
              <StopIcon style={{ color: "red" }} />
              <div>Action Items</div>
            </div>
            <div className={classes.addBtn}>
              <AddIcon />
            </div>
          </Grid>
          <Grid item xs={12}>
            <CardBoard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BoardView;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  title: {
    fontSize: 48,
    textAlign: "center",
    marginTop: 20,
    marginBottom: -60,
    padding: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    minHeight: 80,
  },
  titleColumn: {
    flex: 1,
    margin: "auto 7.5px",
    textAlign: "center",
    padding: 0,
    "& > div:first-child": {
      textAlign: "left",
      height: 30,
      display: "flex",
      flexDirection: "row",
      fontWeight: 600,
    },
    "& > div:nth-child(2)": {},
  },
  addBtn: {
    background: "#ddd",
    cursor: "pointer",
    "&:hover": {
      background: "#ccc",
    },
  },
}));
