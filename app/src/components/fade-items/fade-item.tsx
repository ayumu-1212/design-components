'use client'

import { useState, useTransition } from 'react'
import { css } from '../../../styled-system/css'
import { FadeBox } from './fade-box'

export const FadeItem = () => {
  const [show, setShow] = useState(false)
  const [isPending, startTransition] = useTransition()

  const toggle = () => {
    if (show) {
      startTransition(() => {
        setShow(false)
        // setTimeout('', 500)
      })
    } else {
      setShow(true)
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
    </div>
  )
}
