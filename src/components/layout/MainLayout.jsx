import React from 'react'
import Topbar from '../common/Topbar'
import CountryContextProvider from '../../CountryData/CountryContext'

const MainLayout = ({children}) => {
  return (
    <CountryContextProvider>
        <Topbar/>
        {children}
    </CountryContextProvider>
  )
}

export default MainLayout