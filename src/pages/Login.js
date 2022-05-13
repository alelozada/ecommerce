import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../services"



const Login = () => {

  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()
  const [userObj, setUserObj] = useState({})

  const onSubmit = (data) => {
    console.log(data)
    setUserObj(data)
  }

  useEffect(() => {
    if (userObj.email) {
      loginUser(userObj)
        .then((response) => {
          localStorage.setItem("token", response.access)
        })
        .then(() => {
          navigate('/shop')
        })
    }
  }, [userObj, navigate])



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email: </label>
        <input {...register("email")} type="email" name="email" id="email" placeholder="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input {...register("password")} type="password" name="password" id="password" placeholder="password"/>
        <br />
        <input type="submit" value="Ingresar" />
        <hr />
      </form>
    </div>
  )
}

export default Login