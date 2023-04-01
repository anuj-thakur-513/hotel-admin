import { MantineProvider } from '@mantine/core'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import BookingTable from './Components/BookingTable'
import AppHeader from './Components/Header'
import Home from './Pages/Home'
import NewBooking from './Pages/NewBooking'
import NotFound from './Pages/NotFound'
import UITheme from './Utils/UITheme'

const App = () => {
  return (
    <UITheme>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<NewBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UITheme>
  )
}

export default App
