
interface State {
  open: boolean,
  minimise: boolean,
}

interface Props {
  idx: number,
  state: State,
  focus: number,
  title: string,
  content: string,
  onHandleAbout: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

function WindowObject({idx, state, focus, title, content, onHandleAbout}: Props) {

  return (
    <div key={`about${idx}${state.open}${state.minimise}`} className={focus === idx ? "about-window focus" : "about-window"}> 
      <div className="top-bar">
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
