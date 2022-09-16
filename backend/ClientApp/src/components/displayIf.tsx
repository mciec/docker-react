import React from 'react'

interface IProps {
  condition: () => boolean
  children?: React.ReactNode
}

const displayIf = ({ condition, children }: IProps): JSX.Element => {
  return condition()
    ? <>{children}</>
    : <></>
}

export const DisplayIf = displayIf
