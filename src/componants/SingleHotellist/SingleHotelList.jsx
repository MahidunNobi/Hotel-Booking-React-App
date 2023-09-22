import React from 'react'
import {BiCheck} from "react-icons/bi"
import { Link } from 'react-router-dom'

const SingleHotelList = () => {

  return (
    <div className='md:flex md:items-center border border-orange-300 rounded-lg p-3 mb-6'>
        <div className="img md:w-[30%]  mr-3 rounded-lg overflow-hidden">
            <img 
            className='w-full'
            src="https://cf.bstatic.com/xdata/images/hotel/square200/464802062.webp?k=df44905295e8b2dd8928a35e645577ccc4f6522a26043959cbd6e265ecbeded7&o=" 
            alt="" 
            />
        </div>
        <div className="Desc md:flex md:justify-between md:w-[70%] md:items-center">
            <div className="TitleAndDesc md:w-[70%]">
                <div className="Header flex justify-between w-full"> 
                    <Link to={"4561"} className='text-2xl hover:text-orange-500 cursor-pointer'> Patio do Tijolo</Link>
                    
                </div>
                <p> 500m from center</p>
                <p className="text-green-800 flex items-center font-semibold">
                    <BiCheck className='text-xl ' />
                    Free Airport Taxi
                </p>
                <p className="text-green-800 flex items-center font-semibold">
                    <BiCheck className='text-xl ' />
                    Free cancelletion
                </p>
                <p className="font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>
                    1-Bathroom, 1-Bed and full studio
                </p>
                <p className='text-green-600 text-sm'> You can cancell Leter, so look in the great price</p>
            </div>
            <div className="priceRating h-full flex flex-col justify-between">
                <div className="ratings flex justify-end">
                    <p className='text-lg mr-3'> Exellent </p>
                    <p className='bg-orange-500 text-white px-2 rounded-sm py-1'> 8.9</p>
                </div>
                <div className="priceBtn text-right">
                    <h1 className="text-3xl">
                        $112
                    </h1>
                    <p className="text-sm text-gray-400">
                        Includes taxes and fees
                    </p>
                    <button className='bg-orange-600 text-white px-6 py-2 rounded-md'>
                        See Availability
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default SingleHotelList