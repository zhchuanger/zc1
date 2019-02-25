import React, { Component } from 'react'

let D= ({match}) =>{
    console.log(match);

  return(
    <div>
      {match ? "111":"000"}
    </div>
  )
}
export default D;