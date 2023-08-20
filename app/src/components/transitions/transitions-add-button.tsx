import { css } from '../../../styled-system/css'

type Props = {
  onClick: () => void
}

export const TransitionsAddButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={css({ display: "flex", alignItems: "center", justifyContent: "center", color: "white", width: "2rem", height: "2rem", borderRadius: "50%", backgroundColor: "#343A3F" })} >
      +
    </button>
  )
}