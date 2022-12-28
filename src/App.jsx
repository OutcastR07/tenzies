import React from "react"
import Die from "./Die"
import { useState, useEffect } from 'react'
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(function () {
    const allDiceHeld = dice.every(die => die.isHeld)
    const firstDieValue = dice[0].value
    const allEqualValues = dice.every(die => die.value === firstDieValue)
    if (allDiceHeld && allEqualValues) {
      setTenzies(true)
    }
  }, [dice])

  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  ))

  function generateNewDie() {
    return {
      value: (Math.floor(Math.random() * 6)) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if (!tenzies) {
      setDice(prevDice => prevDice.map(die => {
        return (die.isHeld ? die : generateNewDie())
      }))
    } else {
      setTenzies(false)
      setDice(allNewDice)
    }
  }

  function holdDice(id) {
    setDice(prevDice => prevDice.map(die => {
      return (die.id === id ? {
        ...die, isHeld: !die.isHeld
      } : die)
    }))
  }

  return (
    < main >
      {tenzies ? <Confetti width={300}
        height={300} /> : null}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-btn" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main >
  )
}