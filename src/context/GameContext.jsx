import React, { useEffect, useState } from 'react'
import { createContext } from "react";

export const GameContext = createContext()

function GameContextFunc(props) {
    const [showStart, setShowStart] = useState(true)
    const [showCards, setShowCards] = useState(false)
    const [items, setItems] = useState(0)
    const [cards, setCards] = useState([])
    const [leftIndex, setLeftIndex] = useState(0)
    const [rightIndex, setRightIndex] = useState(0)
    const [middleIndex, setMiddleIndex] = useState(0)
    const [answer, setAnswer] = useState(null)


    const createCards = (items) => {
        for (let i = 0; i < items; i++) {
            cards.push(i)
        }
        setCards(cards)
        return cards
    }

    const changeScreenHandler = () => {
        setShowStart(false)
        setShowCards(true)
        createCards(items)
    }


    const numberChangeHandler = (e) => {
        let totalNumb = items
        totalNumb = e.target.value
        setItems(totalNumb)
    }

    /************Buttons handlers**************/

    const greaterHandler = () => {
        if (leftIndex <= rightIndex) {
            cards.splice(leftIndex, (middleIndex + 1) - leftIndex)
            setCards(cards)
            setLeftIndex(0)
            setRightIndex(cards.length - 1)
        } else {
            console.log("your number isn't here");
        }
        if (cards.length === 1) {
            setAnswer(cards[0])
        }
    }

    const smallerHandler = () => {
        if (leftIndex <= rightIndex) {
            cards.splice(middleIndex, rightIndex - (middleIndex - 1))
            setCards(cards)
            setLeftIndex(0)
            setRightIndex(cards.length - 1)
        } else {
            console.log("your number isn't here");
        }
        if (cards.length === 1) {
            setAnswer(cards[0])
        }
    }

    const equalityHandler = () => {
        setAnswer(cards[middleIndex])
    }

    useEffect(() => {
        setRightIndex(cards.length - 1)
        setMiddleIndex(Math.floor((leftIndex + rightIndex) / 2))
    }, [showCards, leftIndex, rightIndex, cards])

    console.log(cards, leftIndex, middleIndex, rightIndex);

    return (
        <GameContext.Provider value={{ showStart, changeScreenHandler, showCards, items, numberChangeHandler, middleIndex, greaterHandler, createCards, cards, smallerHandler, equalityHandler, answer }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContextFunc