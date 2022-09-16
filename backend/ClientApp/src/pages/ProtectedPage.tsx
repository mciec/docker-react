import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DisplayIf } from '../components/displayIf'

const ProtectedPage = (): JSX.Element => {
  const authorized: boolean = true

  const navigate = useNavigate()

  useEffect(() => {
    if (!authorized) {
      return navigate('/counterbutton/*', { state: { } })
    }
  }, [])

  const alwaysTrue = (): boolean => true

  return (
    <>
    <DisplayIf condition={alwaysTrue}>
      ProtectedPage
    </DisplayIf>
    </>
  )
}

export default ProtectedPage
