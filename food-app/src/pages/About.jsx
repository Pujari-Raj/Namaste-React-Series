import React from "react";
import User from '../components/User'
import UserClass from '../components/UserClass'

class About extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Parent constructor");
    
    }    

    componentDidMount() {
        // console.log("Parent component DidMount");
    }

    render(){
        console.log("Parent Render");
        return (
            <div className='mx-10 my-10'>
                <User name={"Pujari(function)"} />

                {/* <UserClass name={"first(class)"} location={"Bharat(class)"}  />
                <UserClass name={"second(class)"} location={"Bharat(class)"}  />
                <UserClass name={"thind(class)"} location={"Bharat(class)"}  /> */}
            </div>
          )
    }

}
  
// componentDidMount lifecycle
/**
 * -Parent constructor
 * - Parent Render
 * 
 * -First constructor
 * - First Render
 * 
 * -second constructor
 * - second Render
 * 
 * - FIRST component DidMount
 * - second component DidMount
 * 
 * - Parent component DidMount
 */

export default About;