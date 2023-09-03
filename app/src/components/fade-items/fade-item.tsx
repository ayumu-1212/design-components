'use client'

import { useState, useTransition } from 'react'
import { css } from '../../../styled-system/css'
import { FadeBox } from './fade-box'
import { waiter } from '../waiter'
import { Timer } from './timer'

const Waiter = () => {
  getWait()
  return null
}

const getWait = () => {
  throw waiter(500).then((data) => {
    console.log(data)
  })
}

export const FadeItem = () => {
  const [show, setShow] = useState(false)
  const [timer, setTimer] = useState(false)
  const [isPending, startTransition] = useTransition()

  const toggle = () => {
    if (show) {
      startTransition(() => {
        setShow(false)
        setTimer(true)
        // waiter(500)
        // setTimer(new Timer(500))
      })
    } else {
      setShow(true)
      setTimer(false)
      startTransition(() => {
        waiter(10)
      })
    }
  }

  return (
    <div className={css({ color: 'white' })}>
      <h1>Animation Sample</h1>
      <p>
        <button
          className={css({ backgroundColor: 'white', marginLeft: '1rem' })}
          onClick={toggle}
        >
          toggle
        </button>
      </p>
      {show ? <FadeBox show={show && !isPending} /> : null}
      {timer ? <Waiter /> : ''}
    </div>
  )
}
