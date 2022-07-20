import React from 'react'
import Content from '../../components/content'
import SideBar from '../../components/sidebar'

import './style.scss'

const Home = () => {
  return (
    <div className='home'>
        <SideBar/>
        <Content/>
    </div>
  )
}

export default Home