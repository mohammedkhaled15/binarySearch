import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'


function Start() {
    const { showStart, changeScreenHandler, numberChangeHandler, items, exTries } = useContext(GameContext)
    return (
        <>
            {
                showStart && (
                    <div>
                        <div>
                            <label>Choose number of total Cards</label>
                            <input type="number" min={10} value={items} onChange={numberChangeHandler} />
                        </div>
                        <div>
                            <h1>Guess number fom 0 ~ {items - 1}</h1>
                            <button onClick={changeScreenHandler}>Click Me if you picked one!</button>
                            {exTries && <h3>I Promise You it won't take more than {exTries} {exTries === 1 ? "try" : "tries"} to guess the number</h3>}
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Start