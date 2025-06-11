import { useState } from "react";

function Form(){

        //    const[name,setName]= useState("")
        //    const[age,setAge]= useState("")
        //    const[email,setEmail]= useState("")
        //    const[phone,setPhone]= useState("")
           
        //    console.log('Confirm Name',name)

        const [input, setInput]=useState({call:"+91",email:"@gmail.com",country:"India",about:"About your self"});

           function handleSubmit(e){
            console.log('Confirm submit!')
            // console.log('Confirm Details',name,age,email,phone)\
            console.log('Confirm Details',input)
            e.preventDefault(); 

            // < e.preventDefault(); - means // prevent page reload. (browser do not refresh and not change anything so console visible the result)/>
           }


           function handlechange(e){
            const name=e.target.name
            const value=e.target.value
            setInput((previousState)=>{return{...previousState,[name]: value}})
           }

    return<form onSubmit={handleSubmit}>
        <label>Enter You Name: <input type="text" name="name" onChange ={handlechange} /></label> <br/>
        <label>Enter You age: <input type="text" name="age" onChange ={handlechange} /></label> <br/>
        <label>Enter You Email: <input type="text" name="email" onChange ={handlechange} value={input.email} /></label> <br/>
        <label>Enter You Phone no: <input type="text" name="call" onChange ={handlechange} value={input.call}/></label> <br/>
        <label>Enter Your country: <select name="country" onChange ={handlechange} value={input.country}>
            <option value={""}>select</option>
            <option value={"India"}>India</option>
            <option value={"Australia"}>Australia</option>
            <option value={"Russia"}>Russia</option>
            <option value={"Afghanistan"}>Afghanistan</option>
        </select>
        </label> <br/>
        <label>Enter Your message: <textarea name="about"  value={input.about} onChange ={handlechange} /> </label> <br/>
     
        <input type="Submit" value={"Submit Form"}/>

         </form>
    }

export default Form;