
import React from "react";
import ReactDOM  from "react-dom/client";

// OLD WAY TO DO THINGS
// Process => React.createElement => JS OBJECT => HTML (DOM)
const heading = React.createElement('h1',{
    id : "header",
    key: "something",
    custom : "any value or object or array"
},"HEADING TEXT")

// Process => JSX =>  React.createElement => JS OBJECT => HTML (DOM) (MAKE SURE REACT DOM render METHOD CONVERTS IT TO HTML)
const newHeading =  <h1 id="header" key="something">HERE I COME INTO PICTURE</h1>

const Body = () => (
    <>
     <h3>body text my name IS JOHN</h3>
     <h3>body text my bio kush bi</h3>
    </>
)

const renderFooter = () => (
    <h4>YEP YOU CAN RENDER THIS WAY ALSO AT THE END ITS JS FUNCTION THAT RETURN JSX</h4>
)
// ALL POSSIBLE WAYS TO RENDER COMPONENT
const MainComponent = () => {
 return(
    <div>
        {heading}
        {console.log('ANY JSX CODE IS FINE HERE JUST PUT INSIDE curly brackets')}
        <Body/>
       {renderFooter()}
    </div>
 )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainComponent/>);
