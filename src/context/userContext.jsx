import axios from "axios";
import env from "react-dotenv";
import { createContext, useState, useEffect } from "react";
// import { UserContext } from './userContext';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        let API = env.REACT_APP_SKINFIRST_API;
        if(!user){
            axios.get(API +'profile').then(({data})=>{
                setUser(data)
            })
        }
    }, [])
    return(
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}