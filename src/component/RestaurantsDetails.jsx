import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react'

const RestaurantDetails = () => {
   const {id} = useParams();
   const [restaurantMenu,setRestaurantMenu] = useState();

    useEffect(() => {
        if(id){
            getRestaurantInfo()
        }
    },[id])

    async function getRestaurantInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${id}&submitAction=ENTER`)
        const json = await data.json();
        setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info)
    }
     return(
        <h1>RestaurantDetails:{id}</h1>
    )
}

export default RestaurantDetails;