import React, { useReducer } from 'react'

interface State {
  count: number
}

interface Action {
  type: 'incr' | 'decr'

}

const reducer = (state: State, action: Action): State => {
  if (action.type === 'incr') {
    return { ...state, count: state.count + 1 }
  }
  if (action.type === 'decr') {
    return { ...state, count: state.count - 1 }
  }
  return { ...state }
}

export const useSimpleReducer = (): [State, React.Dispatch<Action>] => {
  const initialState: State = { count: 5 }

  const [state, stateDispatch] = useReducer(reducer, initialState)

  return [state, stateDispatch]
}
