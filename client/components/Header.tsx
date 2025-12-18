interface Props {
  title: string
}

function PageHeader({ title }: Props) {
  const titleArray = title.split('')

  return (
    <header>
      {titleArray.map((letter, idx) => (
        <h1 key={`${letter}-${idx}`}>{letter}</h1>
      ))}
    </header>
  )
}

export default PageHeader