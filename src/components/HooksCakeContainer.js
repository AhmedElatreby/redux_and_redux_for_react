import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
        <h3>Using hooks</h3>
      <h2>Number of cakes - {numOfCakes}</h2>

      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default HooksCakeContainer;
