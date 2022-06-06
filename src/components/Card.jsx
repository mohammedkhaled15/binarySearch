import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'


function Card() {

    const { showCards, cards } = useContext(GameContext)

    return (showCards && (
        cards.map(el => {
            return <div key={el} className='card'>{el}</div>
        })
    ))
}

export default Card