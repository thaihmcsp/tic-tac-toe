import React from 'react'
import './class.css'
import Square from './classSquare'

class Board extends React.Component {
    
    handleClick = (i)=>{
        const squares = this.props.squares.slice()
        if (calculateWinner(squares)|| this.props.squares[i]) {
          return;
        }
        squares[i]= this.props.isNext === true ? 'O' : 'X'
        this.props.update(squares)
    }

    renderSquare(i) {
      return (
        <Square 
            value = {this.props.squares[i]} 
            onClick ={()=>{this.handleClick(i)}}
        />
      )
    }


    render() {
      // const status = this.sendStatus()
      return (
        <div>
          {/* <div className="status">{status}</div> */}
          <div className="board-row">
            {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  // ------------------------------------------------------------------------------

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  export default Board