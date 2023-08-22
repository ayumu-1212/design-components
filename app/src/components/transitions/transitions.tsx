'use client'

import { useState } from 'react'
import { css } from '../../../styled-system/css'
import { TransitionsItem } from './transitions-item'
import { TransitionsAddButton } from './transitions-add-button'

export const Transitions = () => {
  const [items, setItems] = useState<string[]>([])
  const onAdd = () => {
    const nextItems = [...items, '']
    setItems(nextItems)
  }
  const onChange = (index: number, content: string) => {
    const nextItems = items.map((item_content, item_index) => {
      if (index !== item_index) {
        return item_content
      }
      return content
    })
    setItems(nextItems)
  }
  const onRemove = (index: number) => {
    const nextItems = items.filter((_, item_index) => index !== item_index)
    setItems(nextItems)
  }
  const transitionItems = items.map((item, index) => {
    return (
      <TransitionsItem
        key={`item-${index}`}
        content={item}
        onChange={(content: string) => onChange(index, content)}
        onClose={() => onRemove(index)}
      />
    )
  })

  return (
    <div
      className={css({
        display: 'flex',
        padding: '1rem',
        gap: '1px',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      {transitionItems}
      <TransitionsAddButton onClick={onAdd} />
    </div>
  )
}
