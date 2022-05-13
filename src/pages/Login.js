import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
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
          navigate('/')
        })
    }
  }, [userObj, navigate])



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email: </label>
        <input {...register("email")} type="email" name="email" id="email" placeholder="example@email.com" />
        <br />
        <label htmlFor="password">Password: </label>
        <input {...register("password")} type="password" name="password" id="password" placeholder="●●●●●●●●"/>
        <br />
        <input type="submit" value="Ingresar" />
        <hr />
      </form>
      <div>
        <p>
          Don't have an account?
          <Link to="/signup">
            <span> Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login