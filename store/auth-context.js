import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext({
    token : "",
    isAuthenticated : false,
    autheticate:()=>{},
    logout:()=>{}
})

function AuthContextProvider ({children}){
const [authToken,setAuthToken]=useState()

function autheticate(token){
    setAuthToken(token)
}
function logout(){
    setAuthToken(null)
}

const value ={
    token : authToken,
    isAuthenticated : !!authToken,
    autheticate: autheticate,
    logout : logout
}
return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}

export default AuthContextProvider;