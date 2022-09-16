import React, { useState } from 'react'

interface IState {
  name?: string
  email?: string
  color?: string
}

const ControlledFormPage = (): JSX.Element => {
  const [state, setState] = useState<IState>()
  return (
    <form>
        <p>ControlledForm</p>
        <div>
            <input type={'text'} id='name' name='name' placeholder='name'
                value={state?.name}
                onChange={ (e) => {
                //   console.log(`name: ${e.target.value}`)
                  setState((prev) => { return { ...prev, name: e.target.value } })
                }} />
        </div>
        <div>
            <input type={'email'} id='email' name='email' placeholder='email'
                value={state?.email}
                onChange = { (e) => {
                  setState((prev) => { return { ...prev, email: e.target.value } })
                }} />
        </div>
        <div>
            <input type={'text'} id='color' name='color' placeholder='color'
            value={state?.color}
            onChange = { (e) => {
              setState((prev) => { return { ...prev, color: e.target.value } })
            }} />
        </div>
        <button id='submit' name='submit' type={'submit'} title='submit' >Submit</button>
    </form>
  )
}

export default ControlledFormPage
