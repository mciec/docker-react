import React, { useCallback, useEffect, useState } from 'react'
import WeatherList from '../components/weatherList'
import { IWeatherRow } from '../components/weatherRow'

const LoginPage = (props: any): JSX.Element => {
  const [weather, setWeather] = useState<IWeatherRow[]>([])
  useEffect(() => {
    const getWeather = async (): Promise<any> => {
      const baseUri = process.env.REACT_APP_API_URI === undefined ? '' : process.env.REACT_APP_API_URI
      const uri = `${baseUri}/weatherforecast`
      const response = await fetch(uri)
      const weatherObj = await response.json()
      const obj = weatherObj as IWeatherRow[]
      obj.forEach((row, i) => { row.id = i })

      setWeather(obj)
    }

    getWeather()
      .catch(() => {})
  }, [])

  const updateRow = useCallback((row: IWeatherRow): void => {
    setWeather((prev) => prev.map((prevRow) => {
      if (prevRow.id === row.id) { return row }
      return prevRow
    }))
  }, []
  )

  return (
        <>
          <WeatherList List={weather} UpdateRow={updateRow} />

          {/* <label htmlFor = 'userName' >name</label>
          <input id='name' type={'text'} title='userName' placeholder='name' name='userName' ></input>
          <label htmlFor = 'password' >password</label>
          <input id='password' type={'password'} title='password' placeholder='password' name='password' ></input>
          <button type={'button'} id='login' title='login' name='login' >LogIn</button>
          <p></p>
          <table>
            <thead>
              <td>Date</td>
              <td>tempC</td>
              <td>tempF</td>
              <td>summary</td>
            </thead>
          {weather.map(row => <>
          <tr><td>{row.date}</td><td>{row.temperatureC}</td><td>{row.temperatureF}</td><td>{row.summary}</td></tr>
          </>

          )}
          </table> */}
        </>
  )
}

export default LoginPage
