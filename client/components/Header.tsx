interface Props {
  title: string[]
}

function PageHeader({ title }: Props) {
  return (
    <header>
      {title.map((letter, idx) => (
        <h1 key={`${letter}-${idx}`}>{letter}</h1>
      ))}
    </header>
  )
}

export default PageHeader