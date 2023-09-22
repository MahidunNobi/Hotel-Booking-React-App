import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from "react-icons/ai"
import {useSearch} from "../../Context/SearchContext"

const Hotelroom = ({setOpenRoom}) => {

    const rooms = [
        {
            _id: "64ead46e83cd431af21acf97",
            title: "Classic",
            price: 236,
            maxPeople: 2,
            desc: "2 Bed, 1 Balcony, 1 Bathroom",
            roomNumbers: [
                {
                    number: 401,
                    unavailableDates: [],
                    _id: "64ead46e83cd1af21acf98"
                },
                {
                    number: 402,
                    unavailableDates: [],
                    _id: "64ead46e83cd431aff9"
                },
                {
                    number: 403,
                    unavailableDates: [],
                    _id: "64ead46e83cd431af1a8"
                }                
            ]            
        },        
        {
            _id: "64ead46e83cd43f21acf97",
            title: "Premium",
            price: 299,
            maxPeople: 2,
            desc: "2 Bed, 1 Balcony, 1 Bathroom",
            roomNumbers: [
                {
                    number: 501,
                    unavailableDates: [],
                    _id: "64ead46cd431af21acf98"
                },
                {
                    number: 502,
                    unavailableDates: [],
                    _id: "64ead46e83cdf21acf9"
                },
                {
                    number: 503,
                    unavailableDates: [],
                    _id: "64ead46e83c1af1acf98"
                }    
            ]            
        }        
    ]
     

  return (
    <div className=' fixed top-0 bg-[#33333394] w-full h-screen'>
        <div className="clsBtn w-full flex justify-end p-6">
            <button onClick={()=> setOpenRoom(false)}> 
                <AiOutlineClose className='text-2xl text-white ' />
            </button> 
        </div>
        <div className="mainContainer h-[80vh] flex justify-center items-center">
            <div className='bg-white w-[350px] p-6 rounded-lg'>
                <span className='text-lg font-medium mb-3'> Select your rooms:</span>
            
                <div className="rooms">
                    { rooms.map((room, i) =>  {
                    return (<div key={room._id} className="room flex justify-between mb-5">
                        <div className="left w-[60%]"> 
                            <span className="text-lg"> {room.title}</span>
                            <br />
                            <span className="desc text-gray-500"> {room.desc}</span> <br />
                            <span className=" MaxPeople text-sm"> Max People: {room.maxPeople}</span> <br />
                            <span className="price"> <b>${room.price}</b> </span>
                        </div>
                        <div className="right w-[35%] ml-3 flex justify-between flex-wrap space-y-0">
                            { room.roomNumbers.map((num, i) => {
                                return (<div key={num._id} className="num text-gray-500 flex flex-col items-center mx-1">
                                <label htmlFor="101" className=' text-xs'> {num.number} </label>
                                <input type="checkbox" value={num._id} />
                            </div>)
                            }) }                       
                        </div>
                    </div>)
                } )}                   
                    
                </div>
                <button className='w-full bg-orange-600 text-white py-2 text-lg'> Reserve </button>
            </div>
        </div>
    </div>
  )
}

export default Hotelroom