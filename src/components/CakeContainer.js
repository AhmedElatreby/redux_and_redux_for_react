import React from 'react'
import {  connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
<h3>using connect</h3>
    <h2>Number of cakes : {props.cakeNumber}</h2>
    <button onClick={props.buy}>Buy Cake</button>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    cakeNumber: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buy: () => dispatch(buyCake())
  }
}




export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
