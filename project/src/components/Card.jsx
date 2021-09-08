import { memo, useRef } from "react";
import Draggable from "react-draggable";
import { changeCardDataAction, moveCardAction, removeCardAction } from "../rdx/cardListSlice";
import Element from "./EditableElement";
import RemoveButton from "./RemoveButton";

function Card({ title, description,created, dispatch, listIndex, index }) {
  const ref = useRef(null);

  const handleCross = () => {
    dispatch(removeCardAction(listIndex, index));
  }

  const handleStop = (e, ui) => {
    if (!ref.current) return;

    const node = ref.current;
    const nodeCoordinates = node.getBoundingClientRect();
    const [nodeLeft, nodeRight] = [nodeCoordinates.x, nodeCoordinates.x + nodeCoordinates.width];

    const currentParentList = node.closest(".js-list");

    let cardOutsideList = false;

    let coordinateLists = [].map.call(currentParentList.parentNode.children, el => {
      const rect = el.getBoundingClientRect();
      let [left, right] = [rect.x, rect.x + rect.width];
      if (el === currentParentList) {
        if (nodeLeft > right || nodeRight < left) {
          cardOutsideList = true;
        }
      }
      return { left, right };
    });

    if (!cardOutsideList) return;

    // out of bounds
    let cardOutofBounds = false;
    if (nodeRight < coordinateLists[0].left || nodeLeft > coordinateLists[coordinateLists.length -1].right) cardOutofBounds = true;

    if (cardOutofBounds) return;

    let newParentIndex = -1;
    coordinateLists.find((parent, index) => {
      if (parent.left < nodeLeft && parent.right > nodeRight) {
        newParentIndex = index;
        return true;
      }
      return false;
    });

    if (newParentIndex > -1) {
      dispatch(moveCardAction({ prevListIndex: listIndex, cardIndex: index, listIndex: newParentIndex }));
    }
  }

  const handleCardDataChange = (value, key) => {
    dispatch(changeCardDataAction({ listIndex, cardIndex: index, key, value }));
  }

  return (
    <Draggable onStop={handleStop} position={{ x: 0, y: 0 }} nodeRef={ref}>
      <div className="relative border m-1 p-3" ref={ref}>
        <RemoveButton handleRemove={handleCross} />
        <i className="text-sm text-gray-400 block">{created}</i>
        <Element value={title} handleChange={handleCardDataChange} dataKey="title" />
        <Element value={description} handleChange={handleCardDataChange} dataKey="description" />
      </div>
    </Draggable>
  );
}

export default memo(Card);