import { Counter } from './components/Counter'

function App() {
  const init = { count: 0, click: 0 }
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initVal={init} />
    </>
  )
}

export default App
