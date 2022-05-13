import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../services";

const Signup = () => {

  const {register, handleSubmit} = useForm()
  const [userObj, setUserObj] = useState({})

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    setUserObj(data)
  }

  useEffect(() => {
    if (userObj.email) {
      createNewUser(userObj)
        .then((response) => {
          console.log('this is the info',response)
          setUserObj({})
          navigate('/login')
        })
    }
  }, [userObj, navigate])

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first_name">Name: </label>
        <input id="first_name" type="text" {...register("first_name")} required/>
        <br />
        <label htmlFor="last_name">Last Name: </label>
        <input id="last_name" type="text" {...register("last_name")} required/>
        <br />
        <label htmlFor="email">Email: </label>
        <input id="email" type="email" {...register("email")} required/>
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" type="password" {...register("password")} required/>
        <br />
        
        <input type="submit" value="Next" />
        <hr />
      </form>
      <div>
        <p>
          Already have an account?
          <Link to="/login">
            <span> Log In</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup