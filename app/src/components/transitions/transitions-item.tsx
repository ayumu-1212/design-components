import { css } from '../../../styled-system/css'

type Props = {
  content: string
  onChange: (content: string) => void
  onClose: () => void
}

export const TransitionsItem = ({ content, onChange, onClose }: Props) => {
  return (
    <div className={css({ padding: "1rem", backgroundColor: "#343A3F", borderRadius: "0.5rem" })}>
      <input className={css({ color: "white", backgroundColor: "#343A3F" })} type="text" value={content} onChange={(e) => onChange(e.target.value)}></input>
      <button className={css({ color: "white", backgroundColor: "#343A3F" })} onClick={onClose}>✖︎</button>
    </div>
  )
}