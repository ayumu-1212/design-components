import { css } from '../../../styled-system/css'
import { Transitions } from '@/components/transitions'

export default function View() {
  return (
    <div className={css({ width: "100%", height: "100vh", backgroundColor: "#24242C" })}>
      <div className={css({ fontSize: "2xl", fontWeight: 'bold', color: "white" })}>ここはトランジションについてのところ</div>
      <Transitions />
    </div>
  )
}