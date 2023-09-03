'use client'

import { useState, useTransition, Suspense } from 'react'
import { AdditionalContents } from './additional-contents'

export const UseTransitionExample = () => {
  const [showChild, setShowChild] = useState(false)
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <h1>02 Example of useTransition</h1>
      {showChild ? (
        <AdditionalContents />
      ) : (
        <button
          disabled={isPending}
          onClick={() => {
            // setShowChildをstartTransitionで囲んだ
            startTransition(() => {
              setShowChild(true)
            })
          }}
        >
          追加コンテンツを表示
        </button>
      )}
    </>
  )
}
