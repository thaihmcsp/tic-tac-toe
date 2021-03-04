import React from 'react'
import './class.css'
import Board from './classBoard'

  class Game extends React.Component {
    constructor(props){
      super(props)
      this.state={
        squares: Array(9).fill(null),
        isNext : true,
        over:false,
        undo:1,
        history: [{
          squares: Array(9).fill(null),
        }]
      }
    }

    update= async(newSquares)=>{
      let newHistory = this.state.history.slice()
      let undo = this.state.undo
      if (undo === 1 ){
        newHistory.push(newSquares)
      }
      if(undo > 1){
        newHistory.splice(newHistory.length - undo+1,undo-1,newSquares)
      }

      this.setState({isNext: !this.state.isNext, 
               squares:newSquares, 
               undo:1,
               history:newHistory})
    }

    undo = (x) =>{
      let turn = this.state.undo + x
      let history = this.state.history.slice()
      let prevTurn = history[history.length - turn]
      if((turn > 0) && (turn <= history.length) ){
        this.setState({undo: turn,squares:prevTurn})
      }
    }

    reset = ()=>{
      this.setState({
        squares: Array(9).fill(null),
        isNext : true,
        over:false,
        undo:1,
        history: [{
          squares: Array(9).fill(null),
        }]})
    }

    sendStatus = ()=>{
      let history = this.state.history
      let current = history[history.length - 1]
      let winner = calculateWinner(current)
      if(history.length === 10){
        return 'Game Over'
      }
      if(winner){
        return 'Winner: player '+winner
      }else{
        return 'Next player: ' + (this.state.isNext === true ? 'O':'X')
      }
    }


    render() {
      let status =this.sendStatus()

      return (
        <div className="game">
          <div className="game-info">
            <div>
              <button onClick={()=>{this.reset()}}>reset </button>
            </div>
            <div>{status}</div>
            <div>
              <button onClick={()=>{this.undo(1)}}>prev</button>
              <button onClick={()=>{this.undo(-1)}}>next</button>
            </div>
            <ol>{/* TODO */}</ol>
          </div>
          <div className="game-board">
            <Board isNext={this.state.isNext} 
            squares={this.state.squares} 
            history = {this.state.history}
            undo = {this.state.undo}
            update={(newSquares)=>{this.update(newSquares)}}/>
          </div>
          
        </div>
      );
    }
  }
  
  // ========================================
  
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


export default Game