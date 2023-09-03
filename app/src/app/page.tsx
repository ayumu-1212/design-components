import { css } from '../../styled-system/css'

export default function Home() {
  return (
    <>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Hello 🐼!
      </div>
      <ul>
        <li>
          <a href='/fade-item'>フェード</a>
        </li>
        <li>
          <a href='/suspense'>Suspense</a>
        </li>
        <li>
          <a href='/transitions'>Transitions</a>
        </li>
      </ul>
    </>
  )
}
