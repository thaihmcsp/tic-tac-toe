import React from 'react'
import Square from './Square'

function Board (){

    return(
        <div className='Board'>
            <div className='column'>
                <Square number='1'/>
                <Square number='2'/>
                <Square number='3'/>
            </div>
            <div className='column'>
                <Square number='1'/>
                <Square number='2'/>
                <Square number='3'/>
            </div>
            <div className='column'>
                <Square number='1'/>
                <Square number='2'/>
                <Square number='3'/>
            </div>
        </div>
    )
}

export default Board