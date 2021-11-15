// måste ha curly brackets med de andra sättet exporta, kolla MyFirstComponent.js
import { MyFirstComponent } from "./MyFirstComponent";
import { useState } from 'react'

export const App = () => {
  const [name, setName] = useState("Nelson")
  const [number, setNumber] = useState(0)


  return (
    <div>
      <h1 onClick={() => setNumber(number + 1)}>{number}</h1>
      <h1 onClick={() => setName("Mandela")}>{name}</h1>
      <MyFirstComponent name={name} age={28} />
    </div>
  )
}