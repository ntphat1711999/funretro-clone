import React from "react";
import { IconButton, Grid, CardActions, CardContent, Typography, Tooltip, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import moment from "moment";

function BoardCell(props) {
  const { value } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.boardCell}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {value.name}
          </Typography>
        </CardContent>
        <CardContent style={{ paddingTop: 0 }}>
          <Typography variant="body2" color="textSecondary" component="span">
            <AccessAlarmsIcon style={{ fontSize: ".9rem" }} />
            {moment(value.date).format("MMM-DD")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span" style={{ float: "right" }}>
            8 cards
          </Typography>
        </CardContent>
        <CardContent className={classes.boardSmall}>
          <ul>
            <Tooltip title="Went Well">
              <li className={classes.cardWentWell}></li>
            </Tooltip>
            <Tooltip title="To Improve">
              <li className={classes.cardToImprove}></li>
            </Tooltip>
            <Tooltip title="Action Items">
              <li className={classes.cardActionItems}></li>
            </Tooltip>
          </ul>
        </CardContent>
        <CardActions className={classes.boardAction}>
          <Tooltip title="Edit name of board">
            <IconButton size="small" className={classes.editIcon}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share board">
            <IconButton size="small" className={classes.shareIcon}>
              <ShareIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete board">
            <IconButton size="small" className={classes.deleteIcon}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BoardCell;

const useStyles = makeStyles({
  boardCell: {
    cursor: "pointer",
    padding: 0,
    minWidth: 220,
    background: "white",
    boxShadow: "0 2px 4px 0 rgba(192,208,230,0.5)",
    "&:hover": {
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.19) ",
    },
  },
  boardSmall: {
    borderTop: "1px solid #f1f1f1",
    "& > ul": {
      listStyle: "none",
      padding: 0,
      margin: 0,
      height: 30,
      display: "flex",
      flexDirection: "row",
      "& > li": {
        width: 50,
        height: 30,
        margin: "0 6px",
      },
    },
  },
  boardAction: {
    borderTop: "1px solid #f1f1f1",
    justifyContent: "space-around",
    padding: 5,
    "& > button": {
      padding: "5px 0",
    },
  },
  body: {
    marginTop: 10,
  },
  cardWentWell: {
    background: "#009688",
  },
  cardToImprove: {
    background: "#e91e63",
  },
  cardActionItems: {
    background: "#9c27b0",
  },
});
