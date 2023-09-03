'use client'

import { useState, Suspense } from 'react'
import { AdditionalContents } from './additional-contents'

export const SuspenseExample = () => {
  const [showChild, setShowChild] = useState(false)

  return (
    <>
      <h1>01 Example of Suspense</h1>
      {showChild ? (
        <Suspense fallback={<p>loading...</p>}>
          <AdditionalContents />
        </Suspense>
      ) : (
        <button onClick={() => setShowChild(true)}>追加コンテンツを表示</button>
      )}
    </>
  )
}
