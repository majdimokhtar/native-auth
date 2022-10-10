import { useContext } from "react"
import { useState } from "react"
import { Alert } from "react-native"
import AuthContent from "../components/Auth/AuthContent"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { AuthContext } from "../store/auth-context"
import { login } from "../util/auth"

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false)
  const authCtx = useContext(AuthContext)
  async function logginHandler({ email, password }) {
    setIsAuth(true)
    try {
      const token = await login(email, password)
      console.log(token)
      authCtx.autheticate(token)
    } catch (error) {
      Alert.alert(
        "Auth failed",
        "Please check your credentials or try again later!"
      )
      setIsAuth(false)
    }

  }
  if (isAuth) {
    return <LoadingOverlay message="logging you user..." />
  }
  return <AuthContent isLogin onAuthenticate={logginHandler} />
}

export default LoginScreen
