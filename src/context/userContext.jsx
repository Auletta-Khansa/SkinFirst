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
            const response = await axios.get(API+"profile", { withCredentials: true })
            const dataUser = response.data
            console.log("dataUser",dataUser)
            if(dataUser){
                setUser(dataUser)
                console.log("setUser", user)
                // axios.get(API +'profile').then(({data})=>{
                //     setUser(data)
                // })
                // console.log("Userrrrrrrrrr :", user)
            }
            else{
                console.log("Tidak ada user yang login")
            }
        }
    }

    const logout = async () => {
        let API = env.REACT_APP_SKINFIRST_API;
        try {
          await axios.post(API + "logout", null, { withCredentials: true });
          setUser(null); // Mengatur user ke null setelah logout
          console.log("User setelah logout:", user);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        getUser()
        // eslint-disable-next-line
    }, [])

    return(
        <UserContext.Provider value={{user, setUser, logout}}>        
            {children}
        </UserContext.Provider>
        
    )
    
}