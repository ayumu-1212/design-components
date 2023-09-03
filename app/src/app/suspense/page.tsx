import {
  SuspenseExample,
  UseDeferredValueExample,
  UseTransitionExample,
} from '@/components/suspense'

export default function View() {
  return (
    <div>
      <SuspenseExample />
      <UseTransitionExample />
      <UseDeferredValueExample />
    </div>
  )
}
