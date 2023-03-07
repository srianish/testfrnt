import "./Forms.css";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import axios from "axios";
import NavBar from "../Home/NavBar";
function Login(){
    const signIn = useSignIn()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = (e) => {
        axios.post("https://srianish-curly-goggles-7qg6vvvrjq7hrxpw-3000.preview.app.github.dev/api/auth/login",{
            email:email,
            password:password,
            role:"student"
        })
        .then((res)=>{
            console.log(res)
        if(signIn(
            {
                token: res.data.token,
                expiresIn:3600,
                tokenType: "Bearer"
                
            }
        )){
            navigate("/home")
        }else {
            console.log("Problem Signing In")
    }})
    }
    return  < div className="container">
        <h1>Please Login</h1>
        <input type="email" placeholder="Enter Email" className="f-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Enter Password"  className="f-input" value={password}onChange={(e)=>setPassword(e.target.value)}/>
        
        <br/><br/>
        
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Student</label>
       
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Teacher</label>
       
        <input type="radio" id="ss2" value="option1 "/>
        <label htmlFor="ss2">Admin</label>
        
        <h5><Link to="/forgot" >Forgot Password ?</Link> </h5>
        <button className="btn-l" onClick={onSubmit}>Login</button>
        <h5>New User ? <Link to="/register" >Register</Link></h5>
    </div>
    
}
export default Login;