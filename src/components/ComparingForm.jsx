import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'

function ComparingForm() {
    const { middleIndex, greaterHandler, showCards, cards, smallerHandler, equalityHandler, answer, actualTries } = useContext(GameContext)
    return (
        <>
            {showCards && (
                <div className='comparing'>
                    <h2>Your number</h2>
                    <h3 className='compare-btn' onClick={greaterHandler}>&gt;</h3>or
                    <h3 className='compare-btn' onClick={smallerHandler}>&lt;</h3>or
                    <h3 className='compare-btn' onClick={equalityHandler}>=</h3>
                    <h2>{cards[middleIndex] <= 0 ? "" : cards[middleIndex]}</h2>
                </div>
            )}
            {
                answer && (
                    <>
                        <div className='answer'>{answer}</div>
                        <h1>Your number is {answer} it took from me just {actualTries} {actualTries === 1 ? "try" : "tries"}</h1>
                    </>
                )
            }
        </>
    )
}

export default ComparingForm