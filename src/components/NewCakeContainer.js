import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
    const [number,setNumber] = useState(1)
  return (
    <div>
      <h3>using connect</h3>
      <h2>Number of cakes : {props.cakeNumber}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => props.buy(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cakeNumber: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
