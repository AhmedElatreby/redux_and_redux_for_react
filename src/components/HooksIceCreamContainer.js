import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function HooksCakeContainer() {
  const numOfIceCream= useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
        <h3>Using hooks</h3>
      <h2>Number of IceCream - {numOfIceCream}</h2>

      <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
