import { useState } from "react";
import authStore from "../stores/authStore";
import {useNavigate} from 'react-router-dom'


export default function SignupForm() {
    const store = authStore();
    const [error,setError]=useState('');
    const navigate=useNavigate();



    const handleSignup = async(e) => {
        try{
            e.preventDefault()
        await store.signup();
      
        navigate('/login')
        }catch(err){
            setError("Email already Exist")
            console.log(err);
        }
        
    };

    return (
        <div>
            <h5>{error}</h5>
            <form onSubmit={handleSignup}>
                <input onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name="email" />
                <input onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name="password" />

                <button type="submit">Signup</button>
            </form>
        </div>
    )
}