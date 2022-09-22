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

  const getYoutubeSubstriptions = (): void => {
    const redirectUri = `${window.location.origin}/showytsubscriptions`
    const clientId = '706648688117-cpbim3nba1rke57nvuev0ch2il0qle9m.apps.googleusercontent.com'
    const path = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${redirectUri}&prompt=consent&response_type=code&client_id=${clientId}&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube&access_type=offline`
    window.location.replace(path)
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
      <div>
        <button type='button' name='getYoutubeSubscriptions' onClick={getYoutubeSubstriptions} > getYoutubeSubscriptions</button>
      </div>
    </>
  )
}

export default CounterButtonPage
