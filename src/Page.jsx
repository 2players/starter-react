import React, { useState, useEffect } from 'react'
import './page.css'

function Page() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Julia')

  useEffect(() => {
    console.log(`Hi ${name}, you clicked ${count} times!`)
  })

  useEffect(() => {
    console.log(`Hi ${name}, you clicked ${count} times!`)
  })

  return (
    <>
      <p>
        Hi {name}, You clicked {count} times!
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name === 'Julia' ? 'Spike' : 'Julia')}>
        Change Name
      </button>
    </>
  )
}

export default Page
