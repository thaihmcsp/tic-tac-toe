import React,{useState} from 'react'

function Square (props){

    const [player,setPlayer]=useState('')

    const changePlayer = ()=>{
        setPlayer('O')
    }

    return(
        <div className='square' onClick={changePlayer}>
            {player}
        </div>
    )
}

export default Square