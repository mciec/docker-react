import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { parse } from 'query-string'
import ApiClientFactory from './../api/ApiClient'

interface IOauth2TokenResponse {
  access_token: string | undefined
  expires_in: number | undefined
  refresh_token: string | undefined
  scope: string | undefined
  token_type: string | undefined
}

const ShowYtSubscriptionsPage = (): JSX.Element => {
  const location = useLocation()
  const navigate = useNavigate()
  const code = parse(location.search).code as string
  const scope = parse(location.search).scope as string
  const [tokenResponse, setTokenResponse] = useState<IOauth2TokenResponse>()
  const identityUri = 'https://oauth2.googleapis.com'
  const identityApiClient = ApiClientFactory(identityUri, { 'content-type': 'application/x-www-form-urlencoded' })

  // const ytUri = 'https://youtube.googleapis.com' /// youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like'
  // const ytApiClient = ApiClientFactory(identityUri, { 'content-type': 'application/x-www-form-urlencoded' })

  useEffect(() => {
    if (code === undefined || code === '' || scope === undefined || scope === '') {
      return navigate('/counterbutton/*', { state: { } })
    }
    getOAuth2Key(code, scope)
      .catch(() => {})
  })

  const getOAuth2Key = async (code: string, scope: string): Promise<any> => {
    if (tokenResponse !== undefined) return

    const path = 'token'
    const clientId = '706648688117-cpbim3nba1rke57nvuev0ch2il0qle9m.apps.googleusercontent.com'
    const clientSecret = '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'
    const redirectUri = `${window.location.origin}/showytsubscriptions`
    const body = `code=${code}&client_id=${clientId}&client_secret=${clientSecret}&scope=&grant_type=authorization_code&redirect_uri=${encodeURIComponent(redirectUri)}`
    console.log(`getOauth2Key [start]: body = ${body}`)
    const resp = await identityApiClient.apiCall(path, 'POST', undefined, body)
    console.log(`getOauth2Key [end]: resp = ${JSON.stringify(resp)}`)
    setTokenResponse(resp.response)
  }

  return (
      <>
        <p>code: {code}</p>
        <p>scope: {scope}</p>
        <p>oauth2Key: {JSON.stringify(tokenResponse)}</p>

      </>
  )
}

export default ShowYtSubscriptionsPage
