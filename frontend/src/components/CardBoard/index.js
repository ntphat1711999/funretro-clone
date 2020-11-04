import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import RGL, { WidthProvider } from "react-grid-layout";
import Card from "./Card";
import { makeRandomId } from "../../utils/common";
import { useSelector } from "react-redux";

const ReactGridLayout = WidthProvider(RGL);

const CardBoard = (props) => {
  const { board_id, allCards, isAdd, onResetIsAdd, onLayoutChange = () => {} } = props;
  const classes = useStyles();
  const user = useSelector((state) => state.app.user);
  const [layout, setLayout] = useState([]);
  const [cardList, setCardList] = useState(allCards);

  const getCategory = (i) => {
    switch (i) {
      case 0:
        return "Went well";
      case 1:
        return "To improve";
      case 2:
        return "Action items";
      default:
        break;
    }
  };

  const getX = (category) => {
    switch (category) {
      case "Went well":
        return 0;
      case "To improve":
        return 1;
      case "Action items":
        return 2;
      default:
        break;
    }
  };

  const getAllLayout = () => {
    return cardList.map((card, i) => ({
      i: card.card_id,
      x: getX(card.category),
      y: card.shouldSave ? 1 : 0,
      w: 1,
      h: 1,
    }));
  };

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    onLayoutChange(newLayout);
  };

  const addNewCard = (i) => {
    const newCard = {
      content: "",
      board_id,
      card_id: makeRandomId(),
      category: getCategory(i),
      owner: user.email,
      shouldSave: true,
    };
    const newCardList = [...cardList, newCard];
    setCardList(newCardList);
  };

  useEffect(() => {
    const _allCards = allCards.filter((card) => card.board_id === board_id);
    const _unSaveCards = cardList.filter(
      (card) => card.shouldSave && !allCards.find((c) => c.card_id === card.card_id)
    );
    setCardList(_allCards.concat(_unSaveCards));
  }, [allCards]);

  useEffect(() => {
    if (isAdd !== -1) {
      addNewCard(isAdd);
      onResetIsAdd();
    }
  }, [isAdd]);

  useEffect(() => {
    setLayout(getAllLayout());
  }, [cardList]);

  return (
    <div className={classes.cardBoard}>
      <ReactGridLayout
        className="layout"
        layout={layout}
        onLayoutChange={handleLayoutChange}
        cols={3}
        margin={[0, 0]}
        rowHeight={120}
        resizeHandle={["se"]}
        isResizable={false}
        isDraggable={false}
      >
        {cardList.map((card, i) => (
          <div key={card.card_id}>
            <Card card={card} />
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
};

export default CardBoard;

const useStyles = makeStyles({
  cardBoard: {
    // position: "relative",
    width: "100%",
  },
});
