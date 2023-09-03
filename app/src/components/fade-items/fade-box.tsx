import { cva } from '../../../styled-system/css'

type Props = {
  show: boolean
}

export const FadeBox = ({ show }: Props) => {
  return <div className={boxStyle({ show: show })} />
}

const boxStyle = cva({
  base: {
    width: '300px',
    height: '300px',
    margin: '50px',
    backgroundColor: 'white',
    transition: 'opacity 500ms linear',
  },
  variants: {
    show: {
      true: { opacity: 1 },
      false: { opacity: 0 },
    },
  },
  defaultVariants: {
    show: false,
  },
})
