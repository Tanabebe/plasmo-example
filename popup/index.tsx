import { useStorage } from "@plasmohq/storage/hook"

function IndexPopup() {

  const [isShow, setIsShow] = useStorage("enableFlg", (v) => v === undefined ? false: v)

  const showCotent = () => {
    setIsShow(!isShow)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 200,
      }}>
      <p>Example Popup UI</p>
      <button onClick={showCotent}>{ isShow ? "ON" : "OFF"}</button>
    </div>
  )
}

export default IndexPopup
