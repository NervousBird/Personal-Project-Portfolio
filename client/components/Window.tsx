import { useClickWindow } from "../utils/utils"
import { useState, useRef } from "react"

interface State {
  open: boolean,
  minimise: boolean,
}

interface Props {
  idx: number,
  state: State,
  focus: boolean,
  title: string,
  content: string,
  onHandleAbout: () => void,
}


function WindowObject({idx, state, focus, title, content, onHandleAbout}: Props) {
  const windowPosition = useRef()
  const [dragging, setDragging] = useState(false)

  const windowsRef = useClickWindow(() => {
  })

  return (
    <div key={`about${idx}${state.open}${state.minimise}`} ref={windowsRef} className={focus === idx ? "about-window focus" : "about-window"}> 
      <div className="top-bar">
        <p>{title}</p>
        <div className="buttons">
          <button name={`minimise ${idx}`} onClick={onHandleAbout}>-</button> 
          <button name={`close ${idx}`} onClick={onHandleAbout}>x</button>
        </div>
      </div>
      <p>
        Hi.
      </p>
      <p>
        {content}
      </p>
    </div>
  )
}

export default WindowObject
