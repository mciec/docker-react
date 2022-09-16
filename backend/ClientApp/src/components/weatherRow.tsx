import React from 'react'

export interface IWeatherRow {
  id: number
  date: string
  temperatureC: number
  temperatureF: number
  summary: string
}

interface IProps {
  UpdateRow: (row: IWeatherRow) => void
  Row: IWeatherRow
}

const WeatherRow = (props: IProps): JSX.Element => {
  const row = props.Row

  const updateTempC = (temp: number): void => {
    props.UpdateRow({ ...row, temperatureC: temp })
  }
  const updateTempF = (temp: number): void => {
    props.UpdateRow({ ...row, temperatureF: temp })
  }

  return (
        <>
          <tr style={{ color: 'black', borderStyle: ' 1px solid black' }}>
            <td>
                {row.date}
            </td>
            <td>
                <input type={'number'} placeholder = 'tempC' value={row.temperatureC}
                onChange = {(e) => updateTempC(e.target.valueAsNumber)}
                />
            </td>
            <td>
                <input type={'number'} placeholder = 'tempF' value={row.temperatureF}
                onChange = {(e) => updateTempF(e.target.valueAsNumber)}
                />
            </td>
          </tr>
        </>
  )
}

export default WeatherRow
