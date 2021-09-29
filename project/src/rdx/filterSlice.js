const CLICK_FILTER = "CLICK_FILTER";
const RESET_FILTER = "RESET_FILTER";

export const initialFilterState = {
  brand: [],
  category: [],
};

export const filterReducer = (state, { type, payload }) => {
  const nextState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case CLICK_FILTER:
      if (nextState[payload.key].includes(payload.value))
        nextState[payload.key].splice(nextState[payload.key].indexOf(payload.value), 1);
      else
        nextState[payload.key].push(payload.value);
      break;
    case RESET_FILTER:
      nextState[payload.key] = [];
      break;
    default:
      break;
  }

  return nextState
};

export const filterClickAction = (key, value) => ({
  type: CLICK_FILTER,
  payload: {
    key,
    value
  }
});

export const filterResetAction = (key) => ({
  type: RESET_FILTER,
  payload: {
    key,
  }
});
