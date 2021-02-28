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

// Board -------------------------------------------------------------

  class Board extends React.Component {
    
    handleClick = (i)=>{
        const squares = this.props.squares.slice()
        if (calculateWinner(squares)|| squares[i]) {
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

    sendStatus = ()=>{
      let winner = calculateWinner(this.props.squares)
      if(winner){
        return 'Winner: player '+winner
      }else{
        return 'Next player: ' + (this.props.isNext === true ? 'O':'X')
      }
    }

    render() {
      const status = this.sendStatus()
      return (
        <div>
          <div className="status">{status}</div>
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
  

// Game ---------------------------------------------------------
  class Game extends React.Component {
    constructor(props){
      super(props)
      this.state={
          squares:Array(9).fill(null),
          isNext : true,
          winner:''
      }
    }

    update= async(newSquares)=>{
      this.setState({isNext: !this.state.isNext, 
               squares:newSquares})
      // let newChess
      // var storeArr = await newSquares.map((element,index)=>{
      //   let chess = this.state.squares[index]
      //   if((element !== chess)&&(element !== null) ){
      //     newChess = element
      //   }

      //   if((element !== chess)&&(element !== null)&&(chess !== null)){
      //     newChess =  chess
      //   }

      //   if(element === chess){
      //     newChess = chess
      //   }

      //   return newChess
      // })

      // for(let i =0; i<this.state.squares.length; i++ ){
      //   if(storeArr[i] !== this.state.squares[i]){
      //     await this.setState({isNext: !this.state.isNext, 
      //       squares:storeArr})
      //   }
      // }

    }

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board isNext={this.state.isNext} 
            winnerCalculate = {()=>{this.calculateWinner()}}
            squares={this.state.squares} 
            update={(newSquares)=>{this.update(newSquares)}}/>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
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