import React, { useState } from "react"
import authStore from "../stores/authStore"
import { useNavigate} from 'react-router-dom'


export default function LoginForm() {
    const store = authStore()
    const navigate=useNavigate();
    const [loginStatus,setLoginStatus]=useState('');

    const handleLogin=async(e)=>{
       try{ e.preventDefault();
        await store.login();
         //navigate

        navigate('/')   
    }catch{
        setLoginStatus('please enter valid email and password')
       
        console.log("please enter valid email and password");

    }
           
    }
    
    return (
        <div>
            <h6>{loginStatus}</h6>
            <form onSubmit={handleLogin}>
                 
                <input onChange={store.updateLoginForm} value={store.loginForm.email} type="email" name="email" />
                <input onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password" />
               
                <button type="submit">Login</button>
            </form>
           
        </div>
    )
   
    
}