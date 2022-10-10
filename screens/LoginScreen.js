import { useState } from "react"
import { Alert } from "react-native"
import AuthContent from "../components/Auth/AuthContent"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { login } from "../util/auth"

function LoginScreen() {
  const [isAuth, setIsAuth] = useState(false)
  async function logginHandler({ email, password }) {
    setIsAuth(true)
    try {
      await login(email, password)
    } catch (error) {
      Alert.alert(
        "Auth failed",
        "Please check your credentials or try again later!"
      )
    }
    setIsAuth(false)
  }
  if (isAuth) {
    return <LoadingOverlay message="logging you user..." />
  }
  return <AuthContent isLogin onAuthenticate={logginHandler} />
}

export default LoginScreen
