import { IMAGE_BASE_URL } from '../constants'
import restaurants from '../utils/restaurants'
import { useState } from 'react'
const RestaurantCard = ({restaurant}) => {
    const {name,cuisines,avgRating,cloudinaryImageId} = restaurant
    return(
        <div className="resContainer">
        <img alt="restaurant" src={`${IMAGE_BASE_URL}${cloudinaryImageId}`} className="resLogo"/>
        <h2>{name}</h2>
        <h3>{cuisines.join(', ')}</h3>
        <h4>{avgRating} Rating</h4>
      </div>
    )
}

export default Body  = () => {
    const [searchRestaurants,setSearchRestaurants] = useState()
    const [restaurantList,setRestaurantList] = useState(restaurants)
    return(
        <>
        <div className='input-container'>
            <input type='text' placeholder='Search Restaurants' className='search-input' value={searchRestaurants} 
            onChange={(event) => {
                setSearchRestaurants(event.target.value)
            }}/>
            <button className="button" onClick={() => {
               let filteredRestaurant = restaurantList.filter((restaurant) => restaurant.data.name.includes(searchRestaurants))
               console.log(filteredRestaurant)
               setRestaurantList(filteredRestaurant)
            }}>
                Search
             </button>
        </div>
        <div className="resListContainer">
            {
              restaurantList.map(restaurant => {
                return(
                    <RestaurantCard key={restaurant.data.id}restaurant={restaurant?.data}/>
                    // <RestaurantCard {...restaurant.data}/> great we to pass if you know spread operator you will understand this

                )
              })
            }
        </div> 
        </>
    )
}