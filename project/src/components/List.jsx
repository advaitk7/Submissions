import { memo } from "react";
import { addCardAction, changeListTitleAction, removeListAction } from "../rdx/cardListSlice";
import AddButton from "./AddButton";
import Card from "./Card";
import Element from "./EditableElement";
import RemoveButton from "./RemoveButton";

function List({ list: { title, cards }, dispatch, index: listIndex }) {
  const removeList = () => {
    dispatch(removeListAction(listIndex))
  }
  const addCard = () => {
    dispatch(addCardAction(listIndex));
  }

  const handleListTitleChange = (newTitle) => {
    dispatch(changeListTitleAction({ listIndex, title: newTitle }));
  }
  return (
    <div className="w-1/4 flex-none mr-3 p-5 border relative js-list">

      <RemoveButton handleRemove={removeList} />
      <Element value={title} handleChange={handleListTitleChange} dataKey="title" />
      {Array.isArray(cards) && cards.map((card, index) => (
        <Card {...{...card, listIndex, dispatch, index}} key={`${card.created} ${card.title}`} />
      ))}
      <AddButton handleAdd={addCard} title="Add Card" />
    </div>
  )
}

export default memo(List);