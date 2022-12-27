import React from "react"
import Die from "./Die"
import { useState } from 'react'

export default function App() {
  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main >
  )
}