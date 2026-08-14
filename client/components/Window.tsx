import { useEffect, useRef, useState } from "react"

interface State {
  open: boolean,
  minimise: boolean,
}

interface Position {
  top: number,
  left: number,
}

interface Props {
  idx: number,
  state: State,
  focus: number,
  title: string,
  content: string,
  position: Position,
  onHandleAbout: (event: React.MouseEvent<HTMLButtonElement>) => void,
  handleStartDrag: (idx: number) => void,
  handleEndDrag: () => void,
}

function WindowObject({idx, state, focus, title, content, position, onHandleAbout, handleStartDrag, handleEndDrag}: Props) {
  const valueFromMouseDelta = ({x, y}: {x: number, y: number}) => x + y
  const [value, setValue] = useState(0)
  const [offset, setOffset] = useState({x: 0, y: 0})
  const [windowSize, setWindowSize] = useState({x: 0, y: 0})
  const [relativeLoc, setRelativeLoc] = useState({x: position.left, y: position.top})
  const ref = useRef<HTMLDivElement | null>(null)
  const size = { width: window.innerWidth - windowSize.x, height: window.innerHeight - windowSize.y }

  function handleDrag(e: React.MouseEvent<HTMLDivElement>) {
    e.preventDefault()
    const min = { width: 0, height: 0 }
    const newRelativeLoc = {x: clamp(e.clientX - offset.x, min.width, size.width), y: clamp(e.clientY - offset.y, min.height, size.height)}
    console.log(size, windowSize, newRelativeLoc)
    setRelativeLoc((prev) => ({...prev, x: newRelativeLoc.x, y: newRelativeLoc.y}))
    setValue(value + valueFromMouseDelta(newRelativeLoc))
  }

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    if(ref.current) {
      const boundingClient = ref.current.getBoundingClientRect()
      setOffset((prev) => ({...prev, x: e.clientX - boundingClient.left, y: (boundingClient.top) - e.clientY}))
      setWindowSize((prev) => ({...prev, x: ref.current.offsetWidth, y: ref.current.offsetHeight }))
    }
    handleStartDrag(idx)
    window.addEventListener("mousemove", handleDrag)
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleDrag)
        handleEndDrag()
      })
  }

  function clamp(value: number, min: number, max: number) {
    if(value < min) {
      return min
    }
    if(value > max) {
      return max
    }
    return value
  }

  useEffect(() => {
    setRelativeLoc((prev) => ({...prev, x: position.left, y: position.top}))
  }, [position])

  useEffect(() => {
    setWindowSize((prev) => ({...prev, x: ref.current.offsetWidth, y: ref.current.offsetHeight }))
  },[])

  return (
    <div
      key={`about${idx}${state.open}${state.minimise}`}
      className={focus === idx ? `about-window focus ${title}` : `about-window ${title}`}
      style={{ top: (relativeLoc.y ) + "px", left: relativeLoc.x +"px"}}
      ref={ref}
    >
      <div className="top-bar" onMouseDown={handleMouseDown}>
        <p>{title}</p>
        <div className="buttons">
          <button name={`minimise ${idx}`} onClick={onHandleAbout}>-</button> 
          <button name={`close ${idx}`} onClick={onHandleAbout}>x</button>
        </div>
      </div>
      <p>
        {content}
      </p>
    </div>
  )
}

export default WindowObject
