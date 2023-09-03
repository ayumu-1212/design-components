import { css } from '../../../styled-system/css'
import { FadeItem } from '@/components/fade-items'

export default function View() {
  return (
    <div
      className={css({
        width: '100%',
        height: '100vh',
        backgroundColor: '#24242C',
      })}
    >
      <FadeItem />
    </div>
  )
}
