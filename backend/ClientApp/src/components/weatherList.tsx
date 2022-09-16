import React from 'react'
import WeatherRow, { IWeatherRow } from './weatherRow'

interface IProps {
  List: IWeatherRow[]
  UpdateRow: (row: IWeatherRow) => void
}

const WeatherList = (props: IProps): JSX.Element => {
  const list = props.List
  return (
    <>
        <table>
        {list.map((row, i) =>
            <WeatherRow key={i} Row={row} UpdateRow={props.UpdateRow} />
        )
        }
        </table>
    </>
  )
}

export default WeatherList
