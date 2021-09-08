const initialCard = () => ({
      title: "Add Card Title",
      description: "Add Card Description",
      created: + new Date(),
    });
const initialList = () => ({
    title: "Add List Title",
    cards: [initialCard()],
  });
export const initialState = {
  list: [initialList()],
};

const ADD_LIST = "ADD_LIST";
const REMOVE_LIST = "REMOVE_LIST";
const ADD_CARD = "ADD_CARD";
const REMOVE_CARD = "REMOVE_CARD";
const MOVE_CARD = "MOVE_CARD";
const CHANGE_LIST_TITLE = "CHANGE_LIST_TITLE";
const CHANGE_CARD_DATA = "CHANGE_CARD_DATA";

export const cardListReducer = (state, { type, payload }) => {
  let tempState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case ADD_LIST:
      tempState.list = [...tempState.list, initialList()];
      break;
    case REMOVE_LIST:
      tempState.list.splice(payload.index, 1);
      break;
    case ADD_CARD:
      tempState.list[payload.listIndex].cards.push(initialCard());
      tempState.list[payload.listIndex].cards.sort((a,b) => b.created - a.created);
      break;
    case REMOVE_CARD:
      tempState.list[payload.listIndex].cards.splice(payload.index, 1);
      break;
    case MOVE_CARD:
      tempState.list[payload.listIndex].cards.push(...tempState.list[payload.prevListIndex].cards.splice(payload.cardIndex, 1));
      tempState.list[payload.listIndex].cards.sort((a,b) => b.created - a.created);
      break;
    case CHANGE_LIST_TITLE:
      tempState.list[payload.listIndex].title = payload.title;
      break;
    case CHANGE_CARD_DATA:
      tempState.list[payload.listIndex].cards[payload.cardIndex][payload.key] = payload.value;
      break;
    default:
      break;
  }
  return tempState;
}

export const addListAction = () => ({
    type: ADD_LIST,
  });

export const removeListAction = (idx) => ({
  type: REMOVE_LIST,
  payload: {
    index: idx,
  },
})

export const addCardAction = (listIndex) => ({
  type: ADD_CARD,
  payload: {
    listIndex,
  }
})

export const removeCardAction = (listIndex, index) => ({
  type: REMOVE_CARD,
  payload: {
    listIndex,
    index,
  }
})

export const moveCardAction = ({ prevListIndex, listIndex, cardIndex }) => ({
  type: MOVE_CARD,
  payload: {
    prevListIndex,
    listIndex,
    cardIndex,
  },
});

export const changeListTitleAction = ({ listIndex, title}) => ({
  type: CHANGE_LIST_TITLE,
  payload: {
    listIndex,
    title,
  },
});

export const changeCardDataAction = ({ listIndex, cardIndex, key, value }) => ({
  type: CHANGE_CARD_DATA,
  payload: {
    listIndex,
    cardIndex,
    key,
    value,
  },
});