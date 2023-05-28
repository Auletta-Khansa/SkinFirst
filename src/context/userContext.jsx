import axios from "axios";
import env from "react-dotenv";
import { createContext, useState, useEffect } from "react";
// import { UserContext } from './userContext';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const getUser = async() => {
        let API = env.REACT_APP_SKINFIRST_API;
        console.log("API :", API)
        if(!user){
            const response = await axios.get(API+"profile")
            const dataUser = response.data
            setUser(dataUser)
            console.log("setUser", user)
            // axios.get(API +'profile').then(({data})=>{
            //     setUser(data)
            // })
            // console.log("Userrrrrrrrrr :", user)
        }
    }
    useEffect(()=>{
        getUser()
        // eslint-disable-next-line
    }, [])
    return(
        <UserContext.Provider value={{user, setUser}}>        
            {children}
        </UserContext.Provider>
        
    )
    
}