'use client'

import { useState, useDeferredValue } from 'react'

export const UseDeferredValueExample = () => {
  const [text, setText] = useState('')

  const deferredText = useDeferredValue(text)

  console.log(text, deferredText)

  return (
    <>
      <h1>04 Example of useDeferredValue</h1>
      <p>
        <input value={text} onChange={(e) => setText(e.currentTarget.value)} />
      </p>
      <p>{deferredText}</p>
    </>
  )
}
