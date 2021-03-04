import React from 'react'
import './class.css'

// square -----------------------------------------------------

  function Square(props) {
    return (
      <button 
      className="square" 
      onClick={()=>{props.onClick()
      }}
      >
        {props.value}
      </button>
    );
    
  }

  export default Square