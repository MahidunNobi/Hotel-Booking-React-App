import React from 'react'
import Navbar from '../../componants/Navbar'
import Header from '../../componants/Header/Header'
import Tranding from '../../componants/Tranding/Tranding'
import PropertyType from '../../componants/PropertyType/PropertyType'
import GuestLove from '../../componants/GuestLove/GuestLove'

const Home = () => {
  return (
    <div className='mb-72'>
      <Navbar />
      <Header />
      <Tranding/>
      <PropertyType />
      <GuestLove />
    </div>
  )
}

export default Home