import React from 'react'
import SingleHotelList from '../SingleHotellist/SingleHotelList'

const HotelsList = () => {
  return (
    <div className='md:w-[68%]'>
      <SingleHotelList />
      <SingleHotelList />
      <SingleHotelList />
      <SingleHotelList />
      
    </div>
  )
}

export default HotelsList