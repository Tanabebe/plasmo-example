import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"
import { useState } from "react"


const Content = () => {

  const [isShow] = useStorage("enableFlg")
  
  const [inputValue, setInputValue] = useState('')

  const [responseValue, setResponseValue] = useState('')

  const onInputHandler = (event) => {
    setInputValue(event.target.value)
    console.log(inputValue)
  }

  const onClickHandler = async (event) => {
    const response = await sendToBackground({
      name: "ping",
      body: {
        id: inputValue,
      }
    })
    setResponseValue(response.message)
  }

  return (
    <>
    { isShow
      ? <div style={{
        position: "fixed",
        bottom: 0,
        padding: 10,
        backgroundColor: "red",
      }}>
          <h1>Example Content UI</h1>
          <input value={inputValue} onChange={onInputHandler}/>
          <button onClick={onClickHandler}>Send Message to Background</button>
          <p>Background Response Value: {responseValue}</p>
        </div>
      : null
    }
    </>
  )
}

export default Content