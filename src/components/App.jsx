import {useState} from "react"
import TestStar from "./TestStar/TestStar"
import TestStar2 from "./TestStar2/TestStar2"
import TestStar3 from "./TestStar3/TestStar3"

export default function App() {
  const [count, setCount] = useState(0)
  const hundleTotal = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>Total counter: {count}</h1>
      <TestStar count={5} hundleTotal={hundleTotal} />
      <TestStar2 count={5} hundleTotal={hundleTotal} />
      <TestStar3 count={5} hundleTotal={hundleTotal} />
    </>
  )
}
