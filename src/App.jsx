import React from "react"
import Die from "./Die"
import { useState } from 'react'

export default function App() {

  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map(die => <Die value={die} />)

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push((Math.floor(Math.random() * 6)) + 1)
    }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    < main >
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-btn" onClick={rollDice}>Roll</button>
    </main >
  )
}