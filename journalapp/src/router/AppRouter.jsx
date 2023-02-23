import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AppTheme } from '../theme/AppTheme'

export const AppRouter = () => {
  return (
    <AppTheme>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route path='/*' element={<JournalRoutes />} />
      </Routes>
    </AppTheme>
  )
}
