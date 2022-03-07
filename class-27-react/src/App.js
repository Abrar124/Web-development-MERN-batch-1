import { React, useState, useEffect } from 'react'
import Product from './Product'

function App() {
  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(0)


  // useEffect(() => {
  //   alert("button click")
  // },[num])

  // const increaseNum = () => {
  //   setNum(num + 1)
  // }

  // const increaseNum2 = () => {
  //   setNum2(num2 + 1)
  // }

  return (
    <div>

      {/* <button onClick={increaseNum} >Click me {num}</button>
      <button onClick={increaseNum2} >Click me {num2}</button> */}

      <Product name="Book" price="$9" description="This is a novel" />
      <Product name="Book2" price="$10" description="This is a english book" />
      <Product name="Book3" price="$11" description="This is a computer book " />



    </div>
  )
}




export default App