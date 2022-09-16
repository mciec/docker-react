import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { CounterButton } from '../components/counterButton'
import { parse } from 'query-string'
import { useSimpleReducer } from '../hooks/useSimpleReducer'

const CounterButtonPage = (): JSX.Element => {
  const location = useLocation()
  const queryVal1 = parse(location.search).queryVal1
  const queryVal2 = parse(location.search).queryVal2
  const { myparam1 } = useParams()

  const [state, stateDispatch] = useSimpleReducer()

  const increment = (): void => {
    stateDispatch({ type: 'incr' })
  }

  const decrement = (): void => {
    stateDispatch({ type: 'decr' })
  }

  console.log(location)
  return (
    <>
      <p>myparam1: {myparam1}</p>
      <p>queryVal1: {queryVal1}</p>
      <p>queryVal2: {queryVal2}</p>
      <p>CounterButtonPage</p>
      <CounterButton name = "lalala" />
      <br/>

      <p>{state.count}</p>
      <button type='button' name='decr' onClick={decrement} > Decrement</button>
      <button type='button' name='incr' onClick={increment} > Increment</button>

    </>
  )
}

export default CounterButtonPage
