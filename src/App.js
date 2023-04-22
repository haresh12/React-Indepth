
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from "./component/About";
import Error from "./component/Error";

  /**
        Lets build our first app using react food delivery app.

             *  Header 
             *     Logo
             *     Nav Items
             *     Cart
             *  Body
             *    Search Bar
             *    RestaurantList
             *      RestaurantCard
             *        Image
             *        Name
             *        Rating 
             *        Cusines
             *        
    */
const AppLayout = () => {
    return(
        <>
          <Header/>
          <Body/>
          <Footer/>
        </>
    )
}

// always create app router below app layout and don't ask why ) if you  know js you know this

const appRouter = createBrowserRouter([
{
  path : '/',
  element : <AppLayout/>,
  errorElement : Error()
},
{
  path : '/about',
  element : <About/>
}
])
let root = ReactDOM.createRoot(document.getElementById('root'));
// MAKE SURE PROP NAME IN router NOT AN appRouter it took 30 mins to realize it
root.render(<RouterProvider router={appRouter}/>); 
