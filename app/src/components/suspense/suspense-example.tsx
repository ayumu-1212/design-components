'use client'

import { useState, Suspense } from 'react'

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

const AdditionalContents = () => {
  const data = getData()
  return <p>{data}</p>
}

let loadedData: string | null = null
const getData = () => {
  if (loadedData) {
    return loadedData
  } else {
    throw loadData(2).then((data) => {
      loadedData = data
    })
  }
}

const loadData = async (second: number) => {
  const sleep = (sleepSecond: number) =>
    new Promise((resolve) => setTimeout(resolve, sleepSecond * 1000))
  await sleep(second)
  return 'ok, world.'
}
