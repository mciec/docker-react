import React from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LazyLoginPage, LazyCounterButtonPage, LoadingPage, LazyHomePage, LazyProtectedPage, LazyControlledFormPage } from './pages'
import { SiteMap } from './components/SiteMap'
import { ThemeProvider } from './contextes/ThemeContext'

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider>
        <SiteMap />
        <React.Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<LazyHomePage/> }></Route>
            <Route path="/login" element={<LazyLoginPage/>}></Route>
            <Route path="/counterbutton/:myparam1" element={<LazyCounterButtonPage />}></Route>
            <Route path="/protected" element={<LazyProtectedPage />}></Route>
            <Route path="/controlledform" element={<LazyControlledFormPage />}></Route>

          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </div>
  )
}
