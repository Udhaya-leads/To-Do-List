
import { useNavigate } from "react-router-dom"

export default function Login(){

           const navigation = useNavigate()

           function onSubmit(){

            navigation('/dashboard')

           }


    return <>
         <h1>Login Page</h1>
          <button onClick={onSubmit}>Login</button>
          </>
}