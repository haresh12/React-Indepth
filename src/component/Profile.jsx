
// LETS CREATE ONE CLASS BASED COMPONENT
import React from 'react';
class Profile extends React.Component {

    constructor(props){
        // place to initialized a state variables
        super(props)
        this.state = {
            count : 0
        }
    }
   componentDidMount(){
    // IN CLASS BASED COMPONENT THIS IS INTERSTING THING SEE BECAUSE YOU HAVE USED THIS.TIMER THIS TIMER VARIABLE WILL BE TREATED LIKE 
    // GLOBAL VARIABLE AND BECAUSE OF THAT WE CAN USE IT IN componentWillUnmount TO CLEAR IT WHEN WE LEAVES THE PAGE
    this.timer = setInterval(()=> {
        console.log("Calling")
    },1000)
    console.log("get called after initial render")
   } 

   componentDidUpdate(prevProps,prevState){
    // this is how you can do dependency related stuff 100% better in useEffect more readable
    if(this.state.count !== prevState.count){
        console.log("Call this again because state changed")
    }
    console.log("get called after every update but make sure render get called first")
   }


   componentWillUnmount(){
     clearInterval(this.timer)
    console.log("called once you leave the component")
   }

    render() {
        // Destructure state and props only inside render
        const {name} = this.state;
        const {count} = this.state;
        return(
            <>
            <h1>THIS IS CLASS BASED COMPONENT : {count}</h1>
            <h2>Accessing Props using this.Props here name is : {name}</h2>
             <button className="button" onClick={() => {
                this.setState({
                    count : ++this.state.count
                })
             }}>
                Increase Count
              </button>  
            </>
        )
    }
}

export default Profile