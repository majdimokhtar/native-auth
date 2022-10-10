import axios from "axios"

const API_KEY = "AIzaSyBORBz5Q7gExbyU1SiQvopukuY5zYMHesQ"
// export const API_KEY = process.env.REACT_APP_API_KEY;
export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  })
  console.log(response.data);
}
export async function creatUser(email, password) {
  await authenticate("signUp", email, password)
}
export async function login(email, password) {
  await authenticate("signInWithPassword", email, password)
}
