import MainHeader from '@/shared/MainHeader'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className=''>
        {children}
      </main>

    </>
  )
}

export default MainLayout