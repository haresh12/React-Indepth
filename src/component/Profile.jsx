
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