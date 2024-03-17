import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function ForgetPassword(){
    const [isUser,setIsUser]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/forgot-password',{
            email
        }).then(res=>{
            if(res.data.status){
                alert('check your email')
                navigate('/login')
            }
            setIsUser(res.data.message)
            console.log(res.data.message);
        }).catch(err=>{
            console.log('err in reset');
            
        })
    }
    return(
        <div>
             <form  onSubmit={handleSubmit}>
                <h2>Forgot password</h2>
                  <h4>{isUser}</h4>
                 <label htmlFor="email">Enter your email</label>
                <input type="email" autoComplete="off" placeholder="Email"  onChange={(e)=>
                    setEmail(e.target.value)
                     }/>

                <button type="submit">forgot password</button>
            </form>
        </div>

    ) 
}