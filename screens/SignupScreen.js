import { useState } from "react"
import { Alert } from "react-native"
import AuthContent from "../components/Auth/AuthContent"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { creatUser } from "../util/auth"

function SignupScreen() {
  const [isAuth, setIsAuth] = useState(false)
  async function sigUpHandler({ email, password }) {
    setIsAuth(true)
    try {
      await creatUser(email, password)
    } catch (error) {
      Alert.alert(
        "Auth failed",
        "Please check your input could not create user!!"
      )
    }
    setIsAuth(false)
  }
  if (isAuth) {
    return <LoadingOverlay message="creating user..." />
  }
  return <AuthContent onAuthenticate={sigUpHandler} />
}

export default SignupScreen
