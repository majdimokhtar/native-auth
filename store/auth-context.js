import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  autheticate: () => {},
  logout: () => {},
})

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState()


  function autheticate(token) {
    setAuthToken(token)
    AsyncStorage.setItem("token", token)
  }
  function logout() {
    setAuthToken(null)
    AsyncStorage.removeItem("token")
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    autheticate: autheticate,
    logout: logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
