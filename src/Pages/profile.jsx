import { useLogin } from "../hooks/useLogin"

export const ProfilePage = () => {
  const username = useLogin()
  return(
    <div>
      <h1>Profile</h1>
      <h5>username: {username}</h5>
    </div>
  )
}