import { useReducer } from 'react'
import { CountReducer } from '../functions/CountReducer'
import { State } from '../types/Interfaces.m'

export const Counter = ({ initVal }: { initVal: State }) => {
  const [state, dispatch] = useReducer(CountReducer, initVal)

  return (
    <>
      <h2>Counter with useReducer: {state.count}</h2>
      <h2>Veces Clickeado:{state.click}</h2>
      <button className='btn' onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })} className='btn'>
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'reset', init: initVal.count })}
        className='btn'
      >
        Reset
      </button>
      <button
        onClick={() => {
          document.querySelector('html')?.classList.toggle('back')
          document.querySelector('body')?.classList.toggle('back')
          return dispatch({ type: 'bg-color' })
        }}
        className='btn'
      >
        BackGround
      </button>
    </>
  )
}
