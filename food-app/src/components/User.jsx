import { useEffect, useState } from "react";

const User = ({name}) => {

    const [age, setage] = useState(20);

    useEffect(() => {
      
    const timer = setInterval(() => {
        console.log('Pujari OP-functn');
    }, 1000);
    
      // return () => {
      //   clearInterval(timer);
      //   console.log('useffect Return');
      // }
    }, []);
    

    return(
        <div className="border-2 p-8">
            <p>Name: {name}</p>
            <p>Location: India</p>
            <p>Contact: @pujari78</p>
            <p>Age: {age}(functn)</p>
        </div>
    );
}

export default User;