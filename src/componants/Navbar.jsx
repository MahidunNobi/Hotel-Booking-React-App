import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-orange-500'>
        <div className="container mx-auto flex justify-between px-4 text-white py-4">
            <div className="logo">
                <h4 className="text-xl">
                    <Link to={"/"}>  MBooking </Link>
                </h4>
            </div>
            <div className="btns text-orange-500">
                <Link to={"/register"} className='bg-gray-200 px-3 py-1 mx-2 md:mx-4 rounded-sm'> Register </Link>
                <Link to={"/login"} className='bg-gray-200 px-3 py-1 mx-2 md:mx-4 rounded-sm'> Login </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar