import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'


function Start() {
    const { showStart, changeScreenHandler, numberChangeHandler, items } = useContext(GameContext)
    return (
        <>
            {
                showStart && (
                    <div>
                        <div>
                            <label>Choose number of total Cards</label>
                            <input type="number" onChange={numberChangeHandler} />
                        </div>
                        <div>
                            <h1>Guess number fom 0 ~ {items - 1}</h1>
                            <button onClick={changeScreenHandler}>Click Me if you picked one!</button>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Start