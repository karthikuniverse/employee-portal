import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const MainLayout = () => {
  return (
    <React.Fragment>
      <div className='layout_port'>
        <Sidebar />      
      </div>
    </React.Fragment>
  )
}

export default MainLayout