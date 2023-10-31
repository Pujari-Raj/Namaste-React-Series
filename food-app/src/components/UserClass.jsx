import React from "react";
import UserContext from "../utilities/UserContext"

// React Class Based Component is nothing but a JS-CLass, As React Function Based Component is a JS-Function

class UserClass extends React.Component {
  constructor(props) {
    /*
        super(props) in the constructor of a React component is essential to ensure that the component correctly inherits from React.Component and that the props object is properly initialized, allowing you to access this.props 
         */
    super(props);

    this.state = {
      age: 20,

      userData : {
        username: "Lorem Ipsum",
        location: "Lorem Ipsum",
      },
    };

    /* To update a state we have to use  this.setState({
             age: this.state.age+ 2,
     })
    Even if we "n" no of state variables we should in one object.    
         */
    console.log("CHild constructor");
  }

  //   IN class based component we use componentDidMount for making api call
  async componentDidMount() {

    // this.timer = setInterval(() => {
    //   console.log('Pujari OP');
    // }, 1000);

    console.log("Child component DidMount");

    // const  data = await fetch("https://api.github.com/users/Pujari-Raj");
    // const jsondata = await data.json();

    // this.setState({
    //   userData: jsondata,
    // })

    // console.log(jsondata);
  }

  componentDidUpdate(){
    console.log("component DidUpdated");
  }

  //  This will call when we change the component (change page in website)
  componentWillUnmount(){
    // clearInterval(this.timer)
    console.log("component Unmount");
  }

  render() {
    console.log("CHild Render");

    // destructing the props
    // const { name } = this.props;

    //
    const {name, id, avatar_url} = this.state.userData

    return (
      <div className="border-2 p-8">
        <p>Name: Lorem Ispum</p>
        <p>user context value: 
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h5>{loggedInUser}</h5>
            )}
          </UserContext.Consumer>
        </p>
        {/* <p>Location: {this.props.location}</p>
        <p>Contact: @pujari78</p> */}
        {/* <p>Age: {this.state.age}(class)</p>
        <button
          className="border-2 p-4"
          onClick={() => {
            this.setState({
              age: this.state.age + 2,
            });
          }}
        >
          Increase Age
        </button> */}
        <br />
        {/* <h2>Github Details</h2>
        <img src={avatar_url} />
        <p>Name: {name}</p>
        <p>ID: {id}</p> */}
      </div>
    );
  }
}

// Updating lifecycle
/**
 * 
 * -Component constructor
 * - Component Render
 * - <HTML>(Dummy data/ Shimmer) 
 * - component DidMount
 * - <API Call>
 * - <this.setState> => state variable is updated
 * 
 * --- UPDATE
 * - render (API data)
 * - <HTML>(New API data) 
 * - Parent component DidMount
 */

export default UserClass;

