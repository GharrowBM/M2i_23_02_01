interface MainComponentProps {
  proName: string;
  blabla: (value: string) => void
}

const MainComponent = (props: MainComponentProps) => {

  return (
    <>
    <h1>MainComponent</h1>
    <hr />
    <p>
      proName vaut <b>{props.proName}</b>
    </p>
    <button onClick={() => props.blabla("blabla")}>Click me!</button>
    </>
  )
}

export default MainComponent