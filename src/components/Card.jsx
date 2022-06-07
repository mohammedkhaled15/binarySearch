import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'


function Card() {

    const { showCards, cards } = useContext(GameContext)

    return (showCards && (
        cards.map(el => {
            return <div key={el} className='card  bg-warning p-2.5 fs-1'>{el}</div>
        })
    ))
}

export default Card