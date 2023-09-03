import { css } from '../../../styled-system/css'
import { Transitions } from '@/components/transitions'

export default function View() {
  return (
    <div
      className={css({
        width: '100%',
        height: '100vh',
        backgroundColor: '#24242C',
      })}
    >
      <Transitions />
    </div>
  )
}
