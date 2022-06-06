import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

function ComparingForm() {
    const { middleIndex, greaterHandler, showCards, cards, smallerHandler, equalityHandler, answer } = useContext(GameContext)
    return (
        showCards && (
            <div className='comparing'>
                <h2>Your number</h2>
                <h3 className='compare-btn' onClick={greaterHandler}>&gt;</h3>or
                <h3 className='compare-btn' onClick={smallerHandler}>&lt;</h3>or
                <h3 className='compare-btn' onClick={equalityHandler}>=</h3>
                <h2>{cards[middleIndex] <= 0 ? "" : cards[middleIndex]}</h2>
                <h1>{answer && `Your number is ${answer}`}</h1>
            </div>
        )

    )
}

export default ComparingForm