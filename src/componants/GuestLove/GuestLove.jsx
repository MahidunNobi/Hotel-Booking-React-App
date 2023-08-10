import React from 'react'

const GuestLove = () => {
  return (
    <div className='my-6'>
        <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold mb-6">
                Homes guests love
            </h3>
            <div className="homesList md:flex md:justify-between "> 

              <div className="home md:w-[24%]">
                <div className="img rounded-lg overflow-hidden h-[220px] mb-3">
                  <img 
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" 
                  alt="" 
                  className='w-full object-cover -mt-4'
                  />
                </div>
                <div className="desc flex flex-col space-y-2">
                  <span className='text-lg font-bold'> Aparthotel Stare Miasto</span>
                  <p className='text-sm text-gray-800'> 06. Terézváros, Hungary, Budapest</p>
                  <p className='text-gray-500'> 
                    Starting from &nbsp;
                    <span className='font-bold text-black'>                 
                      BDT 32,429 
                    </span> 
                  </p>
                  <div className="reviewsSection">
                    <span className='bg-orange-700 text-white px-2 rounded-md py-1'> 8.7</span> 
                    <span className="text-sm text-gray-600"> Exellent- 4857 reviews</span>
                  </div>
                </div>
              </div>
              <div className="home md:w-[24%]">
                <div className="img rounded-lg overflow-hidden h-[220px] mb-3">
                  <img 
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" 
                  alt="" 
                  className='w-full object-cover -mt-4'
                  />
                </div>
                <div className="desc flex flex-col space-y-2">
                  <span className='text-lg font-bold'> 7Seasons Apartments Budapest</span>
                  <p className='text-sm text-gray-800'> Old Town, Poland, Kraków</p>
                  <p className='text-gray-500'> 
                    Starting from &nbsp;
                    <span className='font-bold text-black'>                 
                      BDT 62,429 
                    </span> 
                  </p>
                  <div className="reviewsSection">
                    <span className='bg-orange-700 text-white px-2 rounded-md py-1'> 8.9</span> 
                    <span className="text-sm text-gray-600"> Exellent- 1857 reviews</span>
                  </div>
                </div>
              </div>
              <div className="home md:w-[24%]">
                <div className="img rounded-lg overflow-hidden h-[220px] mb-3">
                  <img 
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" 
                  alt="" 
                  className='w-full object-cover -mt-4'
                  />
                </div>
                <div className="desc flex flex-col space-y-2">
                  <span className='text-lg font-bold'> Cheval Three Quays at The Tower of London</span>
                  <p className='text-sm text-gray-800'> City of London, United Kingdom, London</p>
                  <p className='text-gray-500'> 
                    Starting from &nbsp;
                    <span className='font-bold text-black'>                 
                      BDT 65,429 
                    </span> 
                  </p>
                  <div className="reviewsSection">
                    <span className='bg-orange-700 text-white px-2 rounded-md py-1'> 8.9</span> 
                    <span className="text-sm text-gray-600"> Wonderful- 1857 reviews</span>
                  </div>
                </div>
              </div>
              <div className="home md:w-[24%]">
                <div className="img rounded-lg overflow-hidden h-[220px] mb-3">
                  <img 
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o=" 
                  alt="" 
                  className='w-full object-cover -mt-4'
                  />
                </div>
                <div className="desc flex flex-col space-y-2">
                  <span className='text-lg font-bold'> The Apartments by The Sloane Club</span>
                  <p className='text-sm text-gray-800'> Prague 1, Czech Republic, Praha 1</p>
                  <p className='text-gray-500'> 
                    Starting from &nbsp;
                    <span className='font-bold text-black'>                 
                      BDT 18,429 
                    </span> 
                  </p>
                  <div className="reviewsSection">
                    <span className='bg-orange-700 text-white px-2 rounded-md py-1'> 8.9</span> 
                    <span className="text-sm text-gray-600"> Wonderful- 1857 reviews</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default GuestLove