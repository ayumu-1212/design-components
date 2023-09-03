export const AdditionalContents = () => {
  const data = getData()
  return <p>{data}</p>
}

let loadedData: string | null = null
const getData = () => {
  if (loadedData) {
    return loadedData
  } else {
    throw loadData(2).then((data) => {
      loadedData = data
    })
  }
}

const loadData = async (second: number) => {
  const sleep = (sleepSecond: number) =>
    new Promise((resolve) => setTimeout(resolve, sleepSecond * 1000))
  await sleep(second)
  return 'ok, world.'
}
