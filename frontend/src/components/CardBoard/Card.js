import { makeStyles } from "@material-ui/core";
import React from "react";

function Card(props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div>Do something</div>
    </div>
  );
}

export default Card;

const useStyles = makeStyles({
  card: {
    background: "red",
    padding: "0 7.5px",
  },
});
