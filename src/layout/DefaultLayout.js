import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { EleveProvider } from '../context/EleveProvider'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <EleveProvider>
            <AppContent />
          </EleveProvider>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
