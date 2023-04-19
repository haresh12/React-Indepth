
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

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

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
