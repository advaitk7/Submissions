import { useEffect, useReducer } from "react";
import { addListAction, cardListReducer, initialState } from "../rdx/cardListSlice";
import AddButton from "./AddButton";
import List from "./List";

let init = true;

function initializer(initState) {
  let localState = localStorage.getItem("cardList");
  if (localState) return JSON.parse(localState);
  else return initState;
}

export default function Container() {
  const [state, dispatch] = useReducer(cardListReducer, initialState, initializer);
  const addList = () => {
    console.log("add List");
    dispatch(addListAction());
  }

  useEffect(() => {
    if (!init) {
      localStorage.setItem("cardList", JSON.stringify(state));
    } else {
      init = false;
    }
  }, [state]);

  
  return (
    <div className="border p-3 relative">
      <AddButton handleAdd={addList} title="Add List" />
      <div className="flex a-center overflow-auto">
        {state.list.map((list, index) => (
          <List {...{ ...list, dispatch, index }} key={index} />
        ))}
      </div>

    </div>
  );
}