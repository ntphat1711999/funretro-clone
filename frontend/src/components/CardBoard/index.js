import { Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import Card from "./Card";

const ReactGridLayout = WidthProvider(RGL);

const CardBoard = (props) => {
  const { onLayoutChange = () => {} } = props;
  const classes = useStyles();
  const [layout, setLayout] = useState([]);

  const newLayout = [
    { x: 0, y: 0, w: 1, h: 1, i: "0" },
    { x: 0, y: 0, w: 1, h: 1, i: "1" },
    { x: 1, y: 0, w: 1, h: 1, i: "2" },
    { x: 1, y: 0, w: 1, h: 1, i: "3" },
    { x: 0, y: 0, w: 1, h: 1, i: "4" },
    { x: 2, y: 0, w: 1, h: 1, i: "5" },
  ];

  const onHandleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <div className={classes.cardBoard}>
      <ReactGridLayout layout={newLayout} cols={3} rowHeight={80} onLayoutChange={onLayoutChange} isResizable={false}>
        {newLayout.map((l, i) => (
          <div key={i} style={{ margin: `0 ${l.x === 1 ? "2.5px" : "auto"}` }}>
            <Card value={l} />
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};

export default CardBoard;

const useStyles = makeStyles({
  cardBoard: {
    position: "relative",
    left: -3,
  },
});
