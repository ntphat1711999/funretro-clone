import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BoardCell from "./BoardCell";
import { boardApi } from "../../services";
import BoardAddBtn from "./BoardAddBtn";

function Board() {
  const classes = useStyles();
  const [boards, setBoards] = useState([]);

  const fetchData = async () => {
    const boards = await boardApi.getBoards();
    setBoards(boards);
  };

  const getAllData = async () => {
    await fetchData();
  };

  useEffect(() => {
    getAllData();
    return () => setBoards([]);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.header}>
        Public board
      </Typography>
      <Grid container spacing={5}>
        <BoardAddBtn />
        {boards.map((value, i) => (
          <BoardCell key={i} value={value} />
        ))}
      </Grid>
    </div>
  );
}

export default Board;

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
    margin: "auto",
    width: "90%",
  },
  header: {
    marginBottom: 20,
    color: "#283593",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
