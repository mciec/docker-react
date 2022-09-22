interface ICallResult {
  httpCode?: number
  error?: string
  response?: any
}

interface IApiClient {
  baseUri?: string
  headers?: {[index: string]: string}
  apiCall: (path: string, method: 'GET' | 'POST' | 'PUT' | 'PATCH', queryVariables?: { [index: string]: string}, body?: any) => Promise<ICallResult>

}

const ApiClientFactory = (baseUri: string, headers?: {[index: string]: string}): IApiClient => {
  return {
    baseUri,
    headers,
    apiCall: async (_path: string, _method: 'GET' | 'POST' | 'PUT' | 'PATCH', _queryVariables?: { [index: string]: string}, _body?: any): Promise<ICallResult> => {
      const requestInit: RequestInit = {
        method: _method,
        body: _body
      }

      if (headers !== undefined) {
        requestInit.headers = headers
      }

      let query: string = ''
      if (_queryVariables !== undefined) {
        query = '?'
        let ampersand = ''
        Object.entries(_queryVariables).forEach(([key, val]) => {
          query += `${ampersand}${key}=${encodeURIComponent(val)}`
          ampersand = '&'
        })
      }

      const res: ICallResult = {}
      await fetch(`${baseUri}/${_path}${query}`, requestInit)
        .then(async r => {
          res.httpCode = r.status
          res.response = await r.json()
          return res
        })
        .catch(e => {
          res.httpCode = -1
          res.error = e
        }
        )

      return res
    }

  }
}

export default ApiClientFactory
