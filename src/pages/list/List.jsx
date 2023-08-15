import React, { useContext } from 'react'
import Header from '../../componants/Header/Header'
import HotelsList from '../../componants/HotelsList/HotelsList'
import HotelListSearch from '../../componants/HotelListSearch/HotelListSearch'
import { SearchContext } from '../../Context/SearchContext'

const List = () => {
  const SearchData = useContext(SearchContext)
  console.log(SearchData);
  return (
    <div>
      <Header page="hotelsList"/>
      <div className="searchAndHotelsList">
        <HotelListSearch />
        <HotelsList />
      </div>
    </div>
  )
}

export default List