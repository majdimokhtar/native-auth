import { useContext } from "react"
import { useState } from "react"
import { Alert } from "react-native"
import AuthContent from "../components/Auth/AuthContent"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { AuthContext } from "../store/auth-context"
import { creatUser } from "../util/auth"

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false)
  const authCtx=useContext(AuthContext)
  async function sigUpHandler({ email, password }) {
    setIsAuth(true)
    try {
    const token =  await creatUser(email, password)
      authCtx.autheticate(token)
    } catch (error) {
      Alert.alert(
        "Auth failed",
        "Please check your input could not create user!!"
      )
      setIsAuth(false)
    }
  }
  if (isAuth) {
    return <LoadingOverlay message="creating user..." />
  }
  return <AuthContent onAuthenticate={sigUpHandler} />
}

export default SignupScreen
