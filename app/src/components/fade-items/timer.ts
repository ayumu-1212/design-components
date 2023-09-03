export class Timer {
  done: boolean
  promise: Promise<unknown>

  constructor(duration: number) {
    const timer = new Promise((resolve) => setTimeout(resolve, duration))
    this.done = false
    this.promise = timer.then(() => {
      this.done = true
    })
  }

  throwIfNotDone() {
    if (!this.done) {
      throw this.promise
    }
  }
}
