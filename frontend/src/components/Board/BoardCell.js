import React from "react";
import { Container, Avatar, CardHeader, IconButton, Grid, AppBar, Toolbar, Fab } from "@material-ui/core";
import { MoreVert as MoreVertIcon, Add as AddIcon } from "@material-ui/icons";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
        <CardActions className={classes.cardActions}>
          <Button size="small">Learn More</Button>
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
    minWidth: 200,
    maxWidth: 275,
    background: "white",
    boxShadow: "0 2px 4px 0 rgba(192,208,230,0.5)",
    "&:hover": {
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.19) ",
    },
  },
  cardActions: {
    borderTop: "1px solid grey",
  },
  body: {
    marginTop: 10,
  },
});
