import React from 'react'
import "./page.css"
import { Outlet } from 'react-router'
import HeaderSection from '../headerSection/HeaderSection'

const PagePortion = () => {
  return (
    <React.Fragment>
      <div className='page-content'>
        <HeaderSection />
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export default PagePortion