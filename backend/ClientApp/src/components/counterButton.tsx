import React, { useState, useEffect } from 'react'

interface IProps {
  name: string
}

interface ICounter {
  count: number
}

const counterButton = (props: IProps): JSX.Element => {
  const [counter, setCounter] = useState<ICounter>({ count: 0 })
  const { name } = props

  useEffect(() => {
    console.log('rendering counter button')
  }, [])

  console.log(counter)

  return (
    <>
        <button type="submit" title = "incrementer" name={name} onClick = {
            () => { setCounter((prev: ICounter) => { return { ...prev, count: prev.count + 1 } }) }
            } >
            {counter.count.toString()}
        </button>
    </>
  )
}

export const CounterButton = counterButton
