import * as React from 'react'

export const LazyCounterButtonPage = React.lazy(async () => await import('./CounterButtonPage'))
export const LazyLoginPage = React.lazy(async () => await import('./LoginPage'))
export const LazyHomePage = React.lazy(async () => await import('./HomePage'))
export const LazyProtectedPage = React.lazy(async () => await import('./ProtectedPage'))
export const LazyControlledFormPage = React.lazy(async () => await import('./ControlledFormPage'))
export const LazyShowYtSubscriptionsPage = React.lazy(async () => await import('./ShowYtSubscriptionsPage'))

export { LoadingPage } from './LoadingPage'
