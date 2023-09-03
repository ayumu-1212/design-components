import { css } from '../../../styled-system/css'

type Props = {
  content: string
  onChange: (content: string) => void
  onClose: () => void
}

export const TransitionsItem = ({ content, onChange, onClose }: Props) => {
  const inputChange = (value: string) => {
    onChange(value)
  }

  return (
    <div className={boxStyle}>
      <div className={inputWrapperWtyle}>
        <div className={itemStyle}>{content}</div>
        <input
          className={inputStyle}
          type='text'
          value={content}
          onChange={(e) => inputChange(e.target.value)}
        ></input>
      </div>
      <button className={buttonStyle} onClick={onClose}>
        ✖︎
      </button>
    </div>
  )
}

const boxStyle = css({
  padding: '1rem',
  backgroundColor: '#343A3F',
  borderRadius: '0.5rem',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
})

const inputWrapperWtyle = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: 'calc(100% - 1.5rem)',
})

const itemStyle = css({
  display: 'inline-block',
  overflow: 'hidden',
  minWidth: '1em',
  padding: '2px 4px',
  height: '1.25rem',
  whiteSpace: 'nowrap',
  opacity: 0,
  _before: { content: '' },
})

const inputStyle = css({
  color: 'white',
  backgroundColor: '#343A3F',
  position: 'absolute',
  top: 0,
  left: 0,
  boxSizing: 'border-box',
  width: 'full',
  padding: '2px 4px',
  height: '1.25rem',
})

const buttonStyle = css({
  color: 'white',
  backgroundColor: '#343A3F',
  display: 'inline-block',
  width: '1.5rem',
})
