export const waiter = async (s: number) => {
  const sleep = (s: number) => new Promise((resolve) => setTimeout(resolve, s))
  await sleep(s)
  return 'hello'
}
