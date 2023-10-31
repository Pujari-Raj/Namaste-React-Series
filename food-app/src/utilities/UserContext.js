import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Joey Tribbani",
})

export default UserContext;